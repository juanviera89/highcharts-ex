
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chart, HIGHCHARTS_MODULES } from 'angular-highcharts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chart;
  public chart1;
  public chart2;
  public chart3;
  public chart4;
  public chart5;
  public chart6;
  public chart7;
  public chart8;
  public chart9;
  public chart10;
  public chart11;

  constructor(public navCtrl: NavController) {

    this.chart = new Chart({
      chart: {
        type: 'line',
        events: {
          load:  () =>{
            setInterval(()=>{
              let shiftCondition = this.chart.ref.series[0].points.length >= 15;
              this.chart.addPoint(Math.floor(Math.random() * 10),0,   true,      shiftCondition);
        /*                                       ^               ^      ^          ^
                                            Valor del punto , Serie, Redibujar , Shift    */
              console.log(this.chart.ref.series[0].points.length);
              
            },1000);
          }
      }
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });

    this.chart1 = new Chart(
      {
        chart: {
          type: 'line',
          events: {
            load:  () =>{
              setInterval(()=>{
                let shiftCondition = this.chart1.ref.series[0].points.length >= 15;
                this.chart1.addPoint(Math.floor(Math.random() * 200000 + 10000),0,   true,      shiftCondition);

                 shiftCondition = this.chart1.ref.series[1].points.length >= 15;
                this.chart1.addPoint(Math.floor(Math.random() * 200000 + 10000),1,   true,      shiftCondition);

                 shiftCondition = this.chart1.ref.series[2].points.length >= 15;
                this.chart1.addPoint(Math.floor(Math.random() * 200000 + 10000),2,   true,      shiftCondition);

                 shiftCondition = this.chart1.ref.series[3].points.length >= 15;
                this.chart1.addPoint(Math.floor(Math.random() * 200000 + 10000),3,   true,      shiftCondition);

                 shiftCondition = this.chart1.ref.series[4].points.length >= 15;
                this.chart1.addPoint(Math.floor(Math.random() * 200000 + 10000),4,   true,      shiftCondition);
                
              },1000);
            }
        }
        },

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
              
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]
    
    });

    this.chart2 = new Chart({
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Exchange rate'
          }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                      [0, "#7cb5ec"],
                      [1, "rgba(124,181,236,0)"]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [{
          type: 'area',
          name: 'USD to EUR',
          data: [ [1,2] , [ 2,3] , [ 3,3] , [ 4,5] , [ 5,3] , [ 6,6] , [ 7,7] , [ 8,3] , [ 9,2] , [ 10,4] , [11,5] , [ 12,5] , [ 13,6] , [ 14,7] , [ 15,5] , [16,3] , [ 17,1] , [18,3] ]
      }]
    });

    this.chart3 = new Chart({
      chart: {
          type: 'area'
      },
      title: {
          text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
          text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
              'thebulletin.metapress.com</a>'
      },
      xAxis: {
          allowDecimals: false,
          labels: {
              formatter: function () {
                  return this.value; // clean, unformatted number for year
              }
          }
      },
      yAxis: {
          title: {
              text: 'Nuclear weapon states'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000 + 'k';
              }
          }
      },
      tooltip: {
          pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'USA',
          data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
              1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
              27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
              26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
              24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
              22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
              10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
      }, {
          name: 'USSR/Russia',
          data: [null, null, null, null, null, null, null, null, null, null,
              5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
              4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
              15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
              33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
              35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
              21000, 20000, 19000, 18000, 18000, 17000, 16000]
      }]
  });

    //this.chart3 = new Chart();

    this.chart4 = new Chart({

      chart: {
          type: 'arearange',
          zoomType: 'x'
      },

      title: {
          text: 'Temperature variation by day'
      },

      xAxis: {
          type: 'datetime'
      },

      yAxis: {
          title: {
              text: null
          }
      },

      tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: '°C'
      },

      legend: {
          enabled: false
      },

      series: [{
          name: 'Temperatures',
          data: [[
            1388538000000,
            1.1,
            4.7
          ],
          [
            1388624400000,
            1.8,
            6.4
          ],
          [
            1388710800000,
            1.7,
            6.9
          ],
          [
            1388797200000,
            2.6,
            7.4
          ],
          [
            1388883600000,
            3.3,
            9.3
          ],
          [
            1388970000000,
            3.0,
            7.9
          ],
          [
            1389056400000,
            3.9,
            6.0
          ],
          [
            1389142800000,
            3.9,
            5.5
          ],
          [
            1389229200000,
            -0.6,
            4.5
          ],
          [
            1389315600000,
            -0.5,
            5.3
          ],
          [
            1389402000000,
            -0.3,
            2.4
          ],
          [
            1389488400000,
            -6.5,
            -0.4
          ],
          [
            1389574800000,
            -7.3,
            -3.4
          ],
          [
            1389661200000,
            -7.3,
            -2.3
          ],
          [
            1389747600000,
            -7.9,
            -4.2
          ],
          [
            1389834000000,
            -4.7,
            0.9
          ]]
      }]

    });

    this.chart5 = new Chart({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ('#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2012',
          data: [1052, 954, 4250, 740, 38]
      }]
    });


    this.chart6 = new Chart({
      chart: {
          type: 'bar',
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#2a2a2b'],
               [1, '#3e3e40']
            ]
         },
         style: {
            fontFamily: '\'Unica One\', sans-serif'
         },
         plotBorderColor: '#606063'
      },
      title: {
          text: 'Stacked bar chart',
          style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
         }
      },
      subtitle: {
         style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
         }
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
          gridLineColor: '#707073',
          labels: {
            style: {
                color: '#E0E0E3'
            }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          title: {
            style: {
                color: '#A0A0A3'

            }
          },
          
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total fruit consumption',
              style: {
                color: '#A0A0A3'
            }
          },
          gridLineColor: '#707073',
          labels: {
            style: {
                color: '#E0E0E3'
            }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          tickWidth: 1
      },
      legend: {
          reversed: true,
          itemStyle: {
            color: '#E0E0E3'
         },
         itemHoverStyle: {
            color: '#FFF'
         },
         itemHiddenStyle: {
            color: '#606063'
         }
      },
      plotOptions: {
          series: {
              stacking: 'normal',
              dataLabels: {
                color: '#B0B0B3'
             },
             marker: {
                lineColor: '#333'
             }
          },
          boxplot: {
             fillColor: '#505053'
          },
          errorbar: {
             color: 'white'
          }
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }],
      labels: {
         style: {
            color: '#707073'
         }
      },

      drilldown: {
         activeAxisLabelStyle: {
            color: '#F0F0F3'
         },
         activeDataLabelStyle: {
            color: '#F0F0F3'
         }
      },
   
      navigation: {
         buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
               fill: '#505053'
            }
         }
      },
      colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
      '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      
      
  });
  
  this.chart7 = new Chart({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
  });

  this.chart8 = new Chart({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Efficiency Optimization by Branch'
    },
    xAxis: {
        categories: [
            'Seattle HQ',
            'San Francisco',
            'Tokyo'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Employees'
        }
    }, {
        title: {
            text: 'Profit (millions)'
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Employees',
        color: 'rgba(165,170,217,1)',
        data: [150, 73, 20],
    }, {
        name: 'Employees Optimized',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40],
    }, {
        name: 'Profit',
        color: 'rgba(248,161,63,1)',
        data: [183.6, 178.8, 198.5],
        yAxis: 1
    }, {
        name: 'Profit Optimized',
        color: 'rgba(186,60,61,.9)',
        data: [203.6, 198.8, 208.5],
        yAxis: 1
    }]
  });

  this.chart9 = new Chart({

    chart: {
        type: 'columnrange',
        inverted: true
    },

    title: {
        text: 'Temperature variation by month'
    },

    subtitle: {
        text: 'Observed in Vik i Sogn, Norway'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'Temperature ( °C )'
        }
    },

    tooltip: {
        valueSuffix: '°C'
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}°C'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Temperatures',
        data: [
            [-9.7, 9.4],
            [-8.7, 6.5],
            [-3.5, 9.4],
            [-1.4, 19.9],
            [0.0, 22.6],
            [2.9, 29.5],
            [9.2, 30.7],
            [7.3, 26.5],
            [4.4, 18.0],
            [-3.1, 11.4],
            [-5.2, 10.4],
            [-13.5, 9.8]
        ]
    }]

});

this.chart10 = new Chart({

    exporting: {
        enabled: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: null,
    tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: null,
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
            animation:{
                duration:0
            },
            innerSize: '80%'
        }
    },
    series: [{
        name: 'Brands',
        data: [{
            name: 'IE',
            y: 57
        }, {
            name: 'Chrome',
            y: 43,
        },]
    }]

});

this.chart11 = new Chart({

    exporting: {
        enabled: false
    },
    chart: {
        type: 'solidgauge',
        height: '110%'
    },

    title: {
        text: 'Activity',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: "rgba(124,181,236,0.3)",
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: "rgba(67,67,72,0.3)",
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: "rgba(144,237,125,0.3)",
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: "#7cb5ec",
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: "#434348",
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Stand',
        data: [{
            color: "#90ed7d",
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]

});

  }

  

  
  }



  



