function randomArray(aLength, minNum, maxNum){
	var randArray = new Array();
	for(var i=0;i<aLength+1;i++){
		randArray[i]= minNum+ Math.floor(maxNum*Math.random());
	}
	return randArray;
	
}

Highcharts.chart("container",{
			title:{
				text:"Мой первый график"
			},
			subtitle:{
				text:"От 0 до 100"
			},
			yAxis:{
				title: {
					text: "Ось Y"
				}
			},
			legend:{
				layout: "vertical",
				align: "right",
				verticalAlign: "middle"
			},
			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 0
				}
			},
			series: [{
				name: "Первая кривая",
				data: randomArray(100,0,100)
			}],
			responsive: {
				rules: [{
					conditions: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: "horizontal",
							align: "center",
							verticalAlign: "bottom"
						}
					}
				}]
			}
		});
			