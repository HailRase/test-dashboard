import React, {useEffect, useState} from 'react';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {useScale} from "../../../common/hooks/useScale";

const QueueReportPie = () => {

    const scale = useScale()
    const data01 = [
        {name: 'Пропущено', value: 37, fill: '#e70707'},
        {name: 'Принято', value: 1491, fill: '#4bb253'},
    ];
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
        const textAnchor = index >= 9 ? 'start' : 'end';


        const endPoint = [
            {x3: 430 / scale, y3:  90/ scale} /*1.105 GSM*/,
            {x3: 390 / scale, y3:  115/ scale} /*2.105 Beltelecom*/,
            {x3: 620 / scale, y3:  165/ scale} /*10.105 Other*/,
            {x3: 620 / scale, y3:  165/ scale} /*10.151 GSM*/,
            {x3: 370 / scale, y3:  140/ scale} /*3.151 Beltelecom*/,
            {x3: 620 / scale, y3:  165/ scale} /*10.151 Other*/,
            {x3: 345 / scale, y3:  240/ scale} /*7.GSM*/,
            {x3: 350 / scale, y3:  165/ scale} /*4.Видеотерминалы*/,
            {x3: 345 / scale, y3:  215/ scale} /*6.Проблемнеы и VIP*/,
            {x3: 345 / scale, y3:  190/ scale} /*5.39-25-47*/,
            {x3: 350 / scale, y3:  265/ scale} /*8.39-48-75*/,
            {x3: 395 / scale, y3:  320/ scale} /*9.39-20-30*/,
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


        const endPoint = [{x3: x1 + 5, y3: y1 - 10}, {x3: x1 - 5, y3: y1 + 10}]
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
        <ResponsiveContainer width={"100%"} height={"100%"} >
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
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default QueueReportPie;