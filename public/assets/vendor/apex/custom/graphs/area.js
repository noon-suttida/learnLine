var options = {
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  series: [
    {
      name: "Blood Pressure",
      data: [10, 40, 15, 40, 20, 35, 20, 10, 31, 43, 56, 29],
    },
  ],
  grid: {
    borderColor: "",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 2,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: [
    "#d12828",
  ],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: [
      "#2f477a",
      "#35508a",
      "#3b5999",
      "#4f6aa3",
      "#627aad",
      "#768bb8",
      "#899bc2",
      "#9daccc",
    ],
    strokeColor: "#ffffff",
    strokeWidth: 2,
    hover: {
      size: 7,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#areaGraph"), options);

chart.render();


