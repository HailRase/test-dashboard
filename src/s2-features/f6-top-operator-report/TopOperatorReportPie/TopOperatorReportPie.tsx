import React from 'react';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {topOperatorReportData} from "../../../data/topOperatorReportData";
import s from './TopOperatorReportPie.module.scss'

const TopOperatorReportPie = () => {
    const data01 = [
        {name: 'Пропущено', value: 37, fill: '#e70707'},
        {name: 'Принято', value: 1491, fill: '#4bb253'},
    ];
    const topOperators = topOperatorReportData
        .sort((a, b) => b.receivedIncomingCallsCount - a.receivedIncomingCallsCount)
        .slice(0, 20)
        .map(operator => ({
            operator: operator.operator,
            receivedIncomingCallsCount: operator.receivedIncomingCallsCount,
            fill: getRandomColor()
        }));

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const data02 = [
        {name: 'Видеотерминалы', value: 76/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'GSM', value: 1 /*totalCallReducer('GSM')*/, fill: '#4bb253'},
        {name: '39-48-75', value: 4 /*totalCallReducer('39-48-75')*/, fill: '#008dfe'},
        {name: '39-25-47', value: 4 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: '151 Other', value: 1 /*totalCallReducer('151 Other')*/, fill: '#a2bab1'},
        {name: '151 GSM', value: 52/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: '151 Beltelecom', value: 10/*totalCallReducer('151 Beltelecom')*/, fill: '#392c70'},
        {name: '105 Other', value: 7/*totalCallReducer('105 Other')*/, fill: '#ece296'},
        {name: '105 GSM', value: 766 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: '105 Beltelecom', value: 572/*totalCallReducer('105 Beltelecom')*/, fill: '#d34758'},
    ];

    const renderQueueLabel = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, innerRadius, outerRadius, percent, value, operator, index} = props;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);


        return (
            <g>
                <text style={{fontSize: "12px", fontWeight: "500", color: "black"}}
                      x={x}
                      y={y}
                      textAnchor={x > cx ? 'start' : 'end'}
                      fill="#333">
                    {`${operator}`} {`${(percent * 100) <= 3
                    ? Math.ceil(Number((percent * 100).toFixed(2)))
                    : Math.floor(Number((percent * 100).toFixed(2)))}% `}
                    {` (${value})`}
                </text>
            </g>
        );
    };
    const renderSkippedAcceptLabel = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = cos >= 0 ? 'start' : 'end';


        const endPoint = [{x3: 400, y3: 105}, {x3: 370, y3: 240}]
        const paths = [
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[0].x3} ${endPoint[0].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[1].x3} ${endPoint[1].y3}`,
        ];

        return (
            <g>
                <path d={paths[index]} stroke={fill} fill="none"/>
                <text style={name === "Принято" ? {fontSize: "12px", fontWeight: "700"} : {
                    fontSize: "12px",
                    fontWeight: "500"
                }}
                      x={textAnchor === 'start' ? endPoint[index].x3 + 5 : endPoint[index].x3 - 5}
                      y={endPoint[index].y3 + 5}
                      textAnchor={textAnchor}
                      fill="#333">
                    {`${name}`} {`${(percent * 100) <= 3
                    ? Math.ceil(Number((percent * 100).toFixed(2)))
                    : Math.floor(Number((percent * 100).toFixed(2)))}% `}
                    {` (${value})`}
                </text>
            </g>
        );
    };
    const CustomTooltip = ({active, payload, label}: any) => {
        if (active && payload && payload[0].dataKey === "receivedIncomingCallsCount") {
            return (
                <div className={s.tooltipContainer}>
                    <span className="label">{payload[0].payload.operator}</span>
                    <br/>
                    <span className="intro">Звонков принято: <b>{payload[0].value}</b></span>
                </div>
            );
        }else if (active && payload && payload[0].dataKey === "value"){
            return (
                <div className={s.tooltipContainer}>
                <span className="label">{payload[0].payload.name}: {payload[0].payload.value}</span>

            </div>
            );
        }
    }
    return (
        <ResponsiveContainer>
            <PieChart
                margin={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}>
                <Tooltip content={CustomTooltip} wrapperStyle={{ outline: 'none' }}/>
                <Pie data={topOperators}
                     startAngle={-270}
                     dataKey={"receivedIncomingCallsCount"}
                     cx="50%"
                     cy="50%"
                     innerRadius={"40%"}
                     outerRadius={"55%"}
                     fill="#82ca9d"
                     labelLine={false}
                     label={renderQueueLabel}
                     paddingAngle={1}
                />
                <Pie data={data01}
                     startAngle={-280}
                     dataKey="value"
                     cx="50%"
                     cy="50%"
                     outerRadius={"30%"}
                     fill="#8884d8"
                     labelLine={false}
                     label={renderSkippedAcceptLabel}
                     paddingAngle={2}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TopOperatorReportPie;