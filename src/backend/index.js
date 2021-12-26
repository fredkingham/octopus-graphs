const API_URL = "https://api.octopus.energy/v1/";

function getPeriodQueryString(someMonth, someYear) {
  let endDate = new Date(someYear, someMonth, 1, 0, 0, 0, 0);
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)
  if(endDate > tomorrow){
    endDate = tomorrow;
  }
  let periodTo = endDate.toISOString(); // exclusive
  let periodFrom = new Date(someYear, someMonth - 1, 1, 0, 0, 0, 0);
  periodFrom = periodFrom.toISOString();
  return `?period_to=${periodTo}&period_from=${periodFrom}&group_by=day`;
}

// local storage proxy object that stores the fields in key in localStorage[user]
const userLocalStorageHandler = {
  getUserStorage() {
    let userStorage = window.localStorage["user"];
    if (!userStorage) {
      return {};
    } else {
      return JSON.parse(userStorage);
    }
  },
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    }
    if (!target.keys.includes(prop)) {
      throw `userLocalStorageHandler, does not accept ${prop}, only accepts ${target.keys.join(
        ","
      )}`;
    }
    return this.getUserStorage()[prop];
  },
  set(target, prop, value) {
    if (!target.keys.includes(prop)) {
      throw `userLocalStorageHandler, does not accept ${prop}, only accepts ${target.keys.join(
        ","
      )}`;
    }
    let userStorage = this.getUserStorage();
    userStorage[prop] = value;
    window.localStorage["user"] = JSON.stringify(userStorage);
    return true;
  },
};

const user = new Proxy(
  {
    keys: [
      "apiKey",
      "gasMeterPoint",
      "gasSerialNumber",
      "electrictityMeterPoint",
      "electricitySerialNumber",
    ],
  },
  userLocalStorageHandler
);

var backend = {
  user: user,
  getApiKey() {
    return user.apiKey;
  },
  setApiKey(apiKey) {
    user.apiKey = apiKey;
  },
  clean(someData, someMonth){
    /*
    * So the api always returns the last date with flawed data.
    * Not sure why but we request one more day then we need and
    * then clean
    */
   someData.results = someData.results.filter(r => {
     let intervalDate = new Date(r.interval_end)
     return intervalDate.getMonth() === someMonth -1
   });
   return someData;
  },
  check() {
    /*
    checks the user credentials.

    returns "apiKey" if the apiKey is wrong.
    returns "electricity" if the electricity is wrong.
    returns "gas" if the gas is wrong.
    */
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return new Promise((result, reject) => {
      var gasProm = this.getMonthsGas(month, year, false);
      var eleProm = this.getMonthsElectricity(month, year, false);
      eleProm.then(
        () => {
          gasProm.then(
            () => {
              result();
            },
            () => {
              reject("gas");
            }
          );
        },
        (eleFail) => {
          if (eleFail.status === 401) {
            reject("apiKey");
          } else {
            reject("electricity");
          }
        }
      );
    });
  },
  getUrl(url) {
    return new Promise((result, reject) => {
      let headers = new Headers();
      headers.append("Authorization", `Basic ${window.btoa(this.user.apiKey)}`);
      let options = {
        headers: headers,
        method: "GET",
      };
      fetch(url, options).then(
        (response) => {
          if (response.ok) {
            response.json().then((json) => {
              window.localStorage[url] = {
                result: JSON.stringify(json),
                cacheDate: JSON.stringify(new Date())
              }
              result(json);
            });
          } else {
            reject(response);
          }
        },
        (failed) => {
          reject(failed);
        }
      );
    });
  },
  get(url, cache) {
    let cached = cache || typeof cache === "undefined";
    if (cached && window.localStorage[url] && window.localStorage[url].result) {
      return Promise.resolve(JSON.parse(window.localStorage[url].result));
    }
    return this.getUrl(url);
  },
  getMonthsElectricity(someMonth, someYear, cache) {
    const electricityUrl = `${API_URL}electricity-meter-points/${this.user.electrictityMeterPoint }/meters/${this.user.electricitySerialNumber}/consumption/`;
    const url = electricityUrl + getPeriodQueryString(someMonth, someYear);
    const currentDate = new Date();

    // never cache the current month
    if(someMonth === currentDate.getMonth() && someYear === currentDate.getFullYear()){
      cache = false;
    }
    return this.get(url, cache).then(x => {
      return this.clean(x, someMonth);
    });
  },
  getMonthsGas(someMonth, someYear, cache) {
    const gasUrl = `${API_URL}gas-meter-points/${this.user.gasMeterPoint}/meters/${this.user.gasSerialNumber}/consumption/`;
    const url = gasUrl + getPeriodQueryString(someMonth, someYear);
    const currentDate = new Date();

    // never cache the current month
    if(someMonth === currentDate.getMonth() && someYear === currentDate.getFullYear()){
      cache = false;
    }
    return this.get(url, cache).then(x => {
      return this.clean(x, someMonth);
    })
  },
};

export default backend
