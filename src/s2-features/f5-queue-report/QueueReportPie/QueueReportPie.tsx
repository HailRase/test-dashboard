import React from 'react';
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {queueReportData} from "../../../data/queueReportData";

const QueueReportPie = () => {

    const data01 = [
        {name: 'Пропущено', value: 37, fill: '#e70707'},
        {name: 'Принято', value: 1491, fill: '#4bb253'},
    ];
    const reportData = [...queueReportData.map(r => ({name: r.queue, value: r.totalCall}))]
    console.log(reportData)
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
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = cos >= 0 ? 'start' : 'end';


        const endPoint = [
            {x3: 360, y3: 50}, {x3: 315, y3: 70}, {x3: 285, y3: 90}, {x3: 275, y3: 110}, {x3: 265, y3: 130},
            {x3: 265, y3: 150}, {x3: 265, y3: 170}, {x3: 265, y3: 190}, {x3: 290, y3: 255}, {x3: 505, y3: 125}
        ]
        const paths = [
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[0].x3} ${endPoint[0].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[1].x3} ${endPoint[1].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[2].x3} ${endPoint[2].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[3].x3} ${endPoint[3].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[4].x3} ${endPoint[4].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[5].x3} ${endPoint[5].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[6].x3} ${endPoint[6].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[7].x3} ${endPoint[7].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[8].x3} ${endPoint[8].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[9].x3} ${endPoint[9].y3}`,
        ];

        return (
            <g>
                <path d={paths[index]} stroke={fill} fill="none"/>
                <text style={{fontSize: "12px", fontWeight: "500"}}
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


        const endPoint = [{x3: 400, y3:105}, {x3: 370, y3: 240}]
        const paths = [
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[0].x3} ${endPoint[0].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[1].x3} ${endPoint[1].y3}`,
        ];

        return (
            <g>
                <path d={paths[index]} stroke={fill} fill="none"/>
                <text style={name==="Принято" ?{fontSize: "12px", fontWeight: "700"}:{fontSize: "12px", fontWeight: "500"}}
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

    return (
        <ResponsiveContainer>
            <PieChart
                      margin={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0
                      }}>
                <Pie data={data02}
                     startAngle={-270}
                     dataKey={"value"}
                     cx="50%"
                     cy="50%"
                     innerRadius={80}
                     outerRadius={110}
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
                     outerRadius={60}
                     fill="#8884d8"
                     labelLine={false}
                     label={renderSkippedAcceptLabel}
                     paddingAngle={2}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default QueueReportPie;