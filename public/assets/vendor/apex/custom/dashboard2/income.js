var options = {
  chart: {
    height: 300,
    type: "line",
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
      name: "อัตราการเต้นหัวใจ",
      data: [77, 78, 79, 79, 77, 79, 78, 79, 77, 77, 78, 79],
    },
  ],
  grid: {
    borderColor: "#d8dee6",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "04/01/2025",
      "05/01/2025",
      "06/01/2025",
      "07/01/2025",
      "10/01/2025",
      "11/01/2025",
      "12/01/2025",
      "13/01/2025",
      "14/01/2025",
      "18/01/2025",
      "19/01/2025",
      "20/01/2025",
    ],
    labels: {
      rotate: -90,
      rotateAlways: true,
      align: "right",
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetY: 5,
    },
  },
  yaxis: {
    min: 70, // กำหนดค่าต่ำสุดของแกน Y
    max: 80, // กำหนดค่าสูงสุดของแกน Y
    tickAmount: 4, // จำนวนช่วงที่ต้องการแสดง (50, 60, 70, 80, 90)
    labels: {
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetX: -10, // ปรับระยะห่างตัวเลขแกน Y ออกจากเส้น (ค่าลบจะเลื่อนไปทางซ้าย)
      formatter: function (val) {
        return val.toFixed(0); // แสดงตัวเลขเต็ม (ไม่มีทศนิยม)
      },
    },
  },
  colors: ["#48bb49", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#income"), options);

chart.render();




var options2 = {
  chart: {
    height: 300,
    type: "line",
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
      name: "ค่าเฉลี่ย",
      data: [78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08],
    },
    {
      name: "อัตราการเต้นหัวใจ",
      data: [77, 78, 79, 79, 77, 79, 78, 79, 77, 77, 78, 79],
    },
  ],
  grid: {
    borderColor: "#d8dee6",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "04/01/2025",
      "05/01/2025",
      "06/01/2025",
      "07/01/2025",
      "10/01/2025",
      "11/01/2025",
      "12/01/2025",
      "13/01/2025",
      "14/01/2025",
      "18/01/2025",
      "19/01/2025",
      "20/01/2025",
    ],
    labels: {
      rotate: -90,
      rotateAlways: true,
      align: "right",
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetY: 5,
    },
  },
  yaxis: {
    min: 70, // กำหนดค่าต่ำสุดของแกน Y
    max: 80, // กำหนดค่าสูงสุดของแกน Y
    tickAmount: 4, // จำนวนช่วงที่ต้องการแสดง (50, 60, 70, 80, 90)
    labels: {
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetX: -10, // ปรับระยะห่างตัวเลขแกน Y ออกจากเส้น (ค่าลบจะเลื่อนไปทางซ้าย)
      formatter: function (val) {
        return val.toFixed(0); // แสดงตัวเลขเต็ม (ไม่มีทศนิยม)
      },
    },
  },
  colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
};

var chart2 = new ApexCharts(document.querySelector("#income2"), options2);

chart2.render();






var options3 = {
  chart: {
    height: 300,
    type: "line",
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
      name: "ค่าเฉลี่ย",
      data: [78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08, 78.08],
    },
    {
      name: "อัตราการเต้นหัวใจ",
      data: [77, 78, 79, 79, 77, 79, 78, 79, 77, 77, 78, 79],
    },
  ],
  grid: {
    borderColor: "#d8dee6",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "04/01/2025",
      "05/01/2025",
      "06/01/2025",
      "07/01/2025",
      "10/01/2025",
      "11/01/2025",
      "12/01/2025",
      "13/01/2025",
      "14/01/2025",
      "18/01/2025",
      "19/01/2025",
      "20/01/2025",
    ],
    labels: {
      rotate: -90,
      rotateAlways: true,
      align: "right",
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetY: 5,
    },
  },
  yaxis: {
    min: 70, // กำหนดค่าต่ำสุดของแกน Y
    max: 80, // กำหนดค่าสูงสุดของแกน Y
    tickAmount: 4, // จำนวนช่วงที่ต้องการแสดง (50, 60, 70, 80, 90)
    labels: {
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      offsetX: -10, // ปรับระยะห่างตัวเลขแกน Y ออกจากเส้น (ค่าลบจะเลื่อนไปทางซ้าย)
      formatter: function (val) {
        return val.toFixed(0); // แสดงตัวเลขเต็ม (ไม่มีทศนิยม)
      },
    },
  },
  colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
};

var chart3 = new ApexCharts(document.querySelector("#income3"), options3);

chart3.render();
