// Morris Bar Chart
Morris.Bar({
  element: "morrisBar",
  data: [
    { x: "01/12/2024", y: 2, z: 4, a: 2},
    { x: "03/12/2024", y: 3, z: 5, a: 2},
    { x: "04/12/2024", y: 5, z: 2, a: 3},
    { x: "13/12/2024", y: 4, z: 4, a: 5},
    { x: "16/12/2024", y: 8, z: 3, a: 5},
    { x: "17/12/2024", y: 4, z: 5, a: 3},
    { x: "20/12/2024", y: 5, z: 4, a: 7},
    { x: "22/12/2024", y: 3, z: 5, a: 5},

  ],
  xkey: "x",
  ykeys: ["y", "z", "a"],
  labels: ["อุณหภูมิร่างกาย", "อ็อกซิเจนในเลือด", "ความดันโลหิต"],
  resize: true,
  hideHover: "auto",
  gridLineColor: "#dfd6ff",
  barColors: [
    "#1169f6",
    "#248a65",
    "#94ccb8",
  ],
  xLabelAngle: 90, // เพิ่มมุมให้ข้อความแกน x เป็นแนวตั้ง
  barSizeRatio: 0.5, // ลดขนาดแท่งให้เล็กลง (50% ของพื้นที่ที่แท่งใช้ได้)
});
