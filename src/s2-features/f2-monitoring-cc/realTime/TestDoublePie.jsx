import React, {useEffect, useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import {
    dataColors,
    totalDataColor
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";

/*const ParentComponent = () => {
    const [name, setName] = useState(["1","2","3","4","5","6","7","8","9"]);
    const [chartData, setChartData] = useState(null);
    const [chartData1, setChartData1] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setChartData([1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
            setChartData1([1, 2,]);
        }, 2000);
    }, []);

    return <TestDoublePie name={name} chartData={chartData} chartData1={chartData1}/>;
};*/
highchartsExporting(Highcharts);
highchartsOfflineExporting(Highcharts);
const TestDoublePie = ({chartData, chartData1, height}) => {
    const [option, setOptions] = useState()
    useEffect(() => {
        const elements = document.querySelectorAll('.highcharts-credits');
        elements.forEach(element => {
            element.remove();
        });
        const filtredChartData = chartData.filter( obj => obj.value > 0)
        const filtredChartData1 = chartData1.filter( obj => obj.value > 0)
        const series = [
            {
                minSize: "50%",
                innerSize: "75%",
                size: "65%",
                name: "111",
                borderRadius: 0,
                clip: false,
                data: filtredChartData.map((obj, index) => {
                    if (obj.value > 0)
                        return {
                            name: obj.name,
                            y: obj.value,
                            order: index
                        }
                }).reverse(),
                dataSorting: {
                    enabled: false,
                },
                startAngle: 0,
                colors: [
                    '#fcea87',
                    '#489f48',
                    '#7eb9f6',
                    '#02bbd0',
                    '#f1a492',
                    '#7c84b8',
                    '#76c5e7',
                    '#b3b3d9',
                    '#ef9288',
                    '#ef7457',
                    '#6171c5',
                    '#d4830e',
                    '#50878d',
                    '#64b280',
                    '#7dbecf',
                    '#ec977d',
                    '#ee5194'
                ],
                credits: { enabled: false },
                title: "111",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b> {point.percentage:.0f}% ({point.y})",
                },
            },
            {
                minSize: "20%",
                size: "35%",
                name: "222",
                borderRadius: 0,
                data: filtredChartData1.map(obj => {
                    if (obj.value > 0)
                        return {
                            name: obj.name,
                            y: obj.value,
                            showInLegend: true
                        }
                }).reverse(),
                dataSorting: {
                    enabled: false,
                },
                startAngle: 0,
                colors: ['#4bb253','#e70707'],
                title: "222",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b> {point.percentage:.0f}% ({point.y})",
                    formatter: function () { // настроить формат метки данных
                        if (this.point.y >= 5) { // отобразить метку для секторов с размером >= 5
                            return '<b>' + this.point.name + '</b>: ' + this.point.percentage.toFixed(1) + '%';
                        } else {
                            return null; // не отображать метку для секторов с размером < 5
                        }
                    }
                },
            }
        ];

        const options = {
            exporting: {
                enabled: true,
                buttons: {
                    contextButton: {
                        menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG","downloadSVG"]
                    }
                }
            },
            chart: {
                plotBorderWidth: 0,
                borderRadius: 0,
                plotShadow: false,
                type: "pie",
                height: height,
                includeInDataExport: true

            },
            title: {
                style: {
                    display: "none"
                }
            },
            tooltip: {
                pointFormat: "<b>{point.name}</b>: {point.y:.0f}",
                backgroundColor: "#1B1B1B",
                borderColor: "transparent",
                valueDecimals: 2,
                style: {
                    color: "#fff",
                    fontSize: "12px"
                }
            },
            accessibility: {
                point: {
                    valueSuffix: "%"
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    color: "#fff",
                    cursor: "pointer",
                    startAngle: -35,
                    dataLabels: {
                        connectorShape: 'fixedOffset',
                        enabled: true,
                        crop: false,
                        overflow: 'allow',

                        distance: 15, // установить расстояние между меткой и сектором
                        connectorWidth: 1,
                        style: {
                            fontSize: "10px"
                        },
                        padding: 0,

                    },
                    center: ["50%", "45%"],
                    showInLegend: false,
                    sorting: false,
                    connectEnds: true

                }
            },
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
    }, [chartData, chartData1])
    return (
        <div style={{width: "100%", height: "100%"}}>
            <HighchartsReact highcharts={Highcharts} options={option}/>
        </div>
    );
};

export default TestDoublePie;
