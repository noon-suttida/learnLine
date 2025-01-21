// var options = {
//     chart: {
//       height: 400,
//       type: "line", // ใช้ line สำหรับ HR ร่วมกับ candlestick
//     },
//     series: [
//       {
//         name: "Blood Pressure",
//         type: "candlestick",
//         data: [
//           {
//             x: "Day 1",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 2",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 3",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 4",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 5",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 6",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//           {
//             x: "Day 7",
//             y: [140, 90, 140, 90], // [เปิด, ปิด, สูงสุด, ต่ำสุด]
//           },
//         ],
//       },
//       {
//         name: "Heart Rate (HR)",
//         type: "line",
//         data: [
//           { x: "Day 1", y: 65 },
//           { x: "Day 2", y: 67 },
//           { x: "Day 3", y: 66 },
//           { x: "Day 4", y: 68 },
//           { x: "Day 5", y: 70 },
//           { x: "Day 6", y: 66 },
//           { x: "Day 7", y: 67 },
//         ],
//       },
//     ],
//     xaxis: {
//       categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//       title: {
//         text: "Days",
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: "Blood Pressure (mmHg)",
//         },
//         min: 50,
//         max: 150,
//       },
//       {
//         opposite: true,
//         title: {
//           text: "Heart Rate (BPM)",
//         },
//         min: 50,
//         max: 150,
//       },
//     ],
//     annotations: {
//       yaxis: [
//         {
//           y: 140,
//           borderColor: "#FF0000",
//           label: {
//             text: "Max Systolic",
//             style: {
//               color: "#fff",
//               background: "#FF0000",
//             },
//           },
//         },
//         {
//           y: 90,
//           borderColor: "#FF0000",
//           label: {
//             text: "Max Diastolic",
//             style: {
//               color: "#fff",
//               background: "#FF0000",
//             },
//           },
//         },
//         {
//           y: 77,
//           borderColor: "#008000",
//           label: {
//             text: "Max HR",
//             style: {
//               color: "#fff",
//               background: "#008000",
//             },
//           },
//         },
//       ],
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//         if (seriesIndex === 0) {
//           const bp = w.config.series[seriesIndex].data[dataPointIndex].y;
//           return `<div style="padding:5px;">Blood Pressure:<br> Systolic: ${bp[0]} mmHg<br> Diastolic: ${bp[1]} mmHg<br> Max: ${bp[2]} mmHg<br> Min: ${bp[3]} mmHg</div>`;
//         }
//         if (seriesIndex === 1) {
//           return `<div style="padding:5px;">Heart Rate: ${w.config.series[seriesIndex].data[dataPointIndex].y} BPM</div>`;
//         }
//       },
//     },
//     legend: {
//       position: "bottom",
//     },
//   };
  
//   var chart = new ApexCharts(document.querySelector("#candleStick"), options);
//   chart.render();
  

// var options = {
//     chart: {
//       height: 400,
//       type: "line", // ใช้ line สำหรับ HR ร่วมกับ candlestick
//       margin: {
//         left: 20, // ลดระยะขอบด้านซ้าย
//         right: 20, // ลดระยะขอบด้านขวา
//       },
//     },
//     series: [
//       {
//         name: "Blood Pressure",
//         type: "candlestick",
//         data: [
//           { x: "Day 1", y: [130, 140, 85, 90] },
//           { x: "Day 2", y: [140, 90, 140, 90] },
//           { x: "Day 3", y: [140, 90, 140, 90] },
//           { x: "Day 4", y: [140, 90, 140, 90] },
//           { x: "Day 5", y: [140, 90, 140, 90] },
//           { x: "Day 6", y: [140, 90, 140, 90] },
//           { x: "Day 7", y: [140, 90, 140, 90] },
//         ],
//       },
//       {
//         name: "Heart Rate (HR)",
//         type: "line",
//         data: [
//           { x: "Day 1", y: 65 },
//           { x: "Day 2", y: 67 },
//           { x: "Day 3", y: 66 },
//           { x: "Day 4", y: 68 },
//           { x: "Day 5", y: 70 },
//           { x: "Day 6", y: 66 },
//           { x: "Day 7", y: 67 },
//         ],
//       },
//     ],
//     plotOptions: {
//       candlestick: {
//         colors: {
//           upward: "#116aef",
//           downward: "#cf434f",
//         },
//       },
//     },
//     xaxis: {
//       categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//       title: {
//         text: "Days",
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: "Blood Pressure (mmHg)",
//         },
//         min: 50,
//         max: 150,
//         width: 50, // ปรับความกว้างแกน Y
//       },
//       {
//         opposite: true,
//         title: {
//           text: "Heart Rate (BPM)",
//         },
//         min: 50,
//         max: 150,
//         width: 50, // ปรับความกว้างแกน Y
//       },
//     ],
//     annotations: {
//       yaxis: [
//         {
//           y: 140,
//           borderColor: "#FF0000",
//           label: {
//             text: "Max Systolic",
//             style: {
//               color: "#fff",
//               background: "#FF0000",
//             },
//           },
//         },
//         {
//           y: 90,
//           borderColor: "#FF0000",
//           label: {
//             text: "Max Diastolic",
//             style: {
//               color: "#fff",
//               background: "#FF0000",
//             },
//           },
//         },
//         {
//           y: 77,
//           borderColor: "#008000",
//           label: {
//             text: "Max HR",
//             style: {
//               color: "#fff",
//               background: "#008000",
//             },
//           },
//         },
//       ],
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//         if (seriesIndex === 0) {
//           const bp = w.config.series[seriesIndex].data[dataPointIndex].y;
//           return `<div style="padding:5px;">Blood Pressure:<br> Systolic: ${bp[0]} mmHg<br> Diastolic: ${bp[1]} mmHg<br> Max: ${bp[2]} mmHg<br> Min: ${bp[3]} mmHg</div>`;
//         }
//         if (seriesIndex === 1) {
//           return `<div style="padding:5px;">Heart Rate: ${w.config.series[seriesIndex].data[dataPointIndex].y} BPM</div>`;
//         }
//       },
//     },
//     legend: {
//       position: "bottom",
//     },
//   };

//   var chart = new ApexCharts(document.querySelector("#candleStick"), options);
//   chart.render();



// var options = {
//     series: [{
//       data: [{
//         x: 'Team A',
//         y: [1, 5]
//       }, {
//         x: 'Team B',
//         y: [4, 6]
//       }, {
//         x: 'Team C',
//         y: [5, 8]
//       }, {
//         x: 'Team D',
//         y: [3, 11]
//       }]
//   }, {
//       data: [{
//         x: 'Team A',
//         y: [2, 6]
//       }, {
//         x: 'Team B',
//         y: [1, 3]
//       }, {
//         x: 'Team C',
//         y: [7, 8]
//       }, {
//         x: 'Team D',
//         y: [5, 9]
//       }]
//   }],
//     chart: {
//     type: 'rangeBar',
//     height: 350
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false
//     }
//   },
//   dataLabels: {
//     enabled: true
//   }
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		title: {
			fontColor: "#333333",
			fontFamily: "Arial, sans-serif"
		},
		axisY: {
			includeZero: false,
			interval: 10,
			minimum: 55,
			maximum: 150,
			gridThickness: 0,  // ซ่อนเส้นพื้นหลัง
			lineThickness: 2,  // ปรับความหนาเส้นแกน
			lineColor: "#555555", // กำหนดสีของเส้นแกน
			tickLength: 0, // ซ่อนเครื่องหมายขีดเล็กๆ
			labelFontColor: "#555555",
			titleFontColor: "#555555",
			margin: 20, // ระยะห่างจากกราฟ
			stripLines: [
				{
					value: 135,
					// label: "ความดันโลหิตสูง (ไม่เกิน 135)",
					color: "red",
					labelFontColor: "red",
					labelAlign: "near",
					lineDashType: "dash"
				},
				{
					value: 75,
					// label: "ความดันโลหิตต่ำ (ไม่เกิน 75)",
					color: "blue",
					labelFontColor: "blue",
					labelAlign: "near",
					lineDashType: "dash"
				}
			]
		},
		axisX: {
			interval: 1,
			valueFormatString: "DD/MM/YYYY",
			labelAngle: -90,
			labelFontColor: "#555555",
			gridThickness: 0, // ซ่อนเส้นพื้นหลัง
			lineThickness: 2, // ปรับความหนาเส้นแกน
			lineColor: "#555555", // กำหนดสีของเส้นแกน
			tickLength: 0, // ซ่อนเครื่องหมายขีดเล็กๆ
			margin: 20 // ระยะห่างจากกราฟ
		},
        toolTip: {
			content: "{x} </br> min: {y[0]}, max: {y[1]}"
		},
		data: [
			{
				showInLegend: true,
				indexLabel: "{y[#index]}",
				legendText: "Month wise Min & Max Temperature",
				type: "rangeColumn",
				color: "#6bc170",
				dataPoints: [
					{ x: new Date(2025,00,01), y: [83, 123]},  
					{ x: new Date(2025,01,01), y: [87, 127] },
					{ x: new Date(2025,02,01), y: [84, 123] },
					{ x: new Date(2025,03,01), y: [85, 137] },
					{ x: new Date(2025,04,01), y: [84, 129] },
					{ x: new Date(2025,05,01), y: [87, 127] },
					{ x: new Date(2025,06,01), y: [85, 137] },
					{ x: new Date(2025,07,01), y: [87, 126] }
				]
			},
			{
				showInLegend: true,
				legendText: "Mean Arterial Pressure (MAP)",
				type: "line",
				color: "#4e8dee",
				lineThickness: 3,
				markerType: "circle",
				markerSize: 8,
				dataPoints: [
					{ x: new Date(2025,00,01), y: 106 },
					{ x: new Date(2025,01,01), y: 108 },
					{ x: new Date(2025,02,01), y: 106 },
					{ x: new Date(2025,03,01), y: 107 },
					{ x: new Date(2025,04,01), y: 110 },
					{ x: new Date(2025,05,01), y: 112 },
					{ x: new Date(2025,06,01), y: 108 },
					{ x: new Date(2025,07,01), y: 109 }
				]
			}
		],
		legend: {
			fontColor: "#333333",
			cursor: "pointer"
		},
        width: 700,
	});
	chart.render();
}

