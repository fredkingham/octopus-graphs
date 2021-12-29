import _ from 'lodash'


let numDaysLeft = function(lastDateWithData){
  /*
  * Returns the number of days left in the month after the given date.
  */
  let someDate = new Date(lastDateWithData.getFullYear(), lastDateWithData.getMonth() + 1, 0)
  let numDaysInMonth = someDate.getDate();
  return numDaysInMonth - lastDateWithData.getDate();
}


let translate = function(xtitle, someData, max) {
  let config = {};
  let results = someData.results;
  _.each(results, result => {
    result.interval_start = new Date(result.interval_start);
  })
  results = _.orderBy(results, 'interval_start');

  let data = results.map((x) => x.consumption);

  // lets make graphs consistent
  data.forEach(x => {
    if(x > max){
      max = x;
    }
  })
  data.unshift(xtitle);
  let xAxis = results.map((x) => {
    let asDate = new Date(x.interval_start);
    asDate.setMilliseconds(0);
    asDate.setSeconds(0);
    asDate.setHours(0);
    return asDate;
  });

  // Pad out the month to the full month
  if(xAxis.length){
    var lastDate = xAxis[xAxis.length -1];
    var numDaysLeftInMonth = numDaysLeft(lastDate);
    _.each(_.range(numDaysLeftInMonth), amount => {
      xAxis.push(new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + amount))
      data.push(null);
    })
  }

  xAxis.unshift("x");
  config = {
    padding: {
      top: 10
    },
    data: {
      x: "x",
      columns: [xAxis, data],
      type: "bar",
      color: function(d, value) {
        // color scheme
        // https://color.adobe.com/color%20theme_colors-color-theme-16582317
        let x = value["x"];
        if (!x) {
          return "#333";
        }
        if (x.getDay() === 0 || x.getDay() === 6) {
          return "#D2E4D8";
        } else {
          return "#344F59";
        }
      },
    },
    //   bar: {
    //     width: 40
    //     // or
    //     //width: 100 // this makes bar width 100px
    //   },
    axis: {
      x: {
        type: "timeseries",
        tick: {
          format: "%Y-%m-%d",
          rotate: 45,
        },
      },
      y: {
        max: max
      }
    },
  };
  return config;
};

export default translate;
