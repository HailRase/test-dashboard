import React, {useEffect, useState} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsOfflineExporting from 'highcharts/modules/offline-exporting';

highchartsExporting(Highcharts);
highchartsOfflineExporting(Highcharts);
const HighchartsHistogram = ({data}) => {
    const notAcceptData = data.map( i => i.notAccept)
    const acceptData = data.map( i => i.accept)
    const avgCallsData = data.map( i => i.avgCalls)
    const maxSimultaneousCallData = data.map( i => i.maxSimultaneousCall)
    const oplnSysData = data.map( i => i.oplnSys)
    const opActivityData = data.map( i => i.opActivity)
    debugger
    const [option, setOptions] = useState()
    useEffect(() => {
        const elements = document.querySelectorAll('.highcharts-credits');
        elements.forEach(element => {
            element.remove();
        });
        const series = [
            {
                name: 'Не принято',
                yAxis: 0,
                data: notAcceptData,
                color: '#d34758',
                marker: {
                    symbol: 'square' // изменение типа символа элемента легенды на квадратный
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            {
                name: 'Принято',
                yAxis: 0,
                data: acceptData,
                color: '#459e47',
                marker: {
                    symbol: 'square', // изменение типа символа элемента легенды на квадратный
                    style: {
                        borderRadius: 0
                    }
                }
            },
            {
                name: 'Среднее время разговора',
                yAxis: 1,
                type: 'spline',
                color: '#43127d',
                data: avgCallsData,
                marker: {
                    symbol: 'circle' // изменение типа символа элемента легенды на квадратный
                }
            },
            {
                name: 'Максимальное количество одновременных звонков',
                yAxis: 1,
                type: 'spline',
                color: '#f2ef2c',
                data: maxSimultaneousCallData,
                marker: {
                    symbol: 'circle' // изменение типа символа элемента легенды на квадратный
                }
            },
            {
                name: 'Операторов в системе',
                yAxis: 1,
                type: 'spline',
                color: '#30999a',
                data: oplnSysData,
                marker: {
                    symbol: 'square' // изменение типа символа элемента легенды на квадратный
                }
            },
            {
                name: 'Активность операторов',
                yAxis: 2,
                type: 'spline',
                color: '#a16821',
                data: opActivityData,
                marker: {
                    symbol: 'triangle' // изменение типа символа элемента легенды на квадратный
                },
                visible: false
            }
        ];

        const options = {
            exporting: {
                enabled: true,
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadSVG"]
                    }
                }
            },
            chart: {
                type: 'column',
                height: '26%',

            },
            title: {
                style: {
                    display: "none"
                }
            },
            tooltip: {
                shared: true,
                style: {
                    fontSize: 20
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    },
                    pointWidth: 30
                },
                spline: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            xAxis: [{
                categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00',
                    '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
                ],
            }],
            yAxis: [
                { // Secondary yAxis
                    title: {
                        text: 'Кол-во звонков',
                        style: {
                            color: '#000000'
                        }
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: 'black'
                        },
                        formatter: function() {
                            return Highcharts.numberFormat(this.total, 0); // форматируем сумму стопки столбцов и возвращаем ее для метки
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#000000'
                        }
                    },
                },
                { // Primary yAxis
                    min: -5,
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#000000'
                        }
                    },
                    title: {
                        text: '[Среднее время] = [Минут], [Операторы]=[Человек]',
                        style: {
                            color: '#000000'
                        }
                    },
                    opposite: true
                },
                { // Primary yAxis
                    min: -5,
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#000000'
                        }
                    },
                    title: {
                        style: {
                            display: 'none'
                        }
                    },
                    opposite: true
                },
            ],
            series,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500 // установить максимальную ширину контейнера
                    },
                    chartOptions: {
                        legend: {
                            enabled: false // скрыть легенду при маленьком размере экрана
                        },
                        plotOptions: {
                            pie: {
                                dataLabels: {
                                    enabled: false // скрыть метки данных при маленьком размере экрана
                                }
                            }
                        }
                    }
                }]
            }
        };
        setOptions(options)
    }, [])
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={option}/>
        </div>
    );
};

export default HighchartsHistogram;