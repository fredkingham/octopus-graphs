let translate = function(xtitle, someData, max) {
  let config = {};
  let data = someData.results.map((x) => x.consumption);

  // lets make graphs consistent
  data.forEach(x => {
    if(x > max){
      max = x;
    }
  })
  data.unshift(xtitle);
  let xAxis = someData.results.map((x) => {
    let asDate = new Date(x.interval_start);
    asDate.setMilliseconds(0);
    asDate.setSeconds(0);
    asDate.setHours(0);
    return asDate;
  });

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
