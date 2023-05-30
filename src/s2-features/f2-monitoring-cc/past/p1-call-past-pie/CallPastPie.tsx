import React, {PureComponent} from 'react';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import {useScale} from "../../../../common/hooks/useScale";
import {QueueDataType, TotalAcceptAndSkippedCallType} from "../../realTime/r1-monitoring-cc-pie/MonitoringCCPie";




const CallPastPie = () => {
    const scale = useScale()
    const data01: TotalAcceptAndSkippedCallType[] = [
        {name: 'Пропущено', value: 11, fill: '#e70707'},
        {name: 'Принято', value: 1534, fill: '#4bb253'},
    ];
    const data02: QueueDataType[] = [
        {name: 'НОД-6', value: 64/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-5', value: 54/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-4', value: 42/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-3', value: 97/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-2', value: 61/*totalCallReducer('Видеотерминалы')*/, fill: '#d9dc46'},
        {name: 'НОД-1', value: 87/*totalCallReducer('Видеотерминалы')*/, fill: '#2d585d'},
        {name: 'Белтел Могилёвская', value: 158 /*totalCallReducer('GSM')*/, fill: '#4bb253'},
        {name: 'Белтел Минская', value: 65 /*totalCallReducer('39-48-75')*/, fill: '#008dfe'},
        {name: 'Белтел Гродненская', value: 148 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: 'Белтел Гомельская', value: 70 /*totalCallReducer('151 Other')*/, fill: '#a2bab1'},
        {name: 'Белтел Витебская', value: 271/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: 'Белтел Брестская', value: 175/*totalCallReducer('151 Beltelecom')*/, fill: '#392c70'},
        {name: 'Repeat call', value: 95/*totalCallReducer('151 Beltelecom')*/, fill: '#4f457e'},
        {name: 'MTC', value: 123/*totalCallReducer('105 Other')*/, fill: '#ece296'},
        {name: 'Life', value: 67 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: 'International', value: 253/*totalCallReducer('105 Beltelecom')*/, fill: '#7eb9f6'},
        {name: 'A1', value: 383/*totalCallReducer('105 Beltelecom')*/, fill: '#d34758'},
    ];


    const renderProviderItem = (props: any) => {

        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = index >= 13 ? 'start' : 'end';

        const endPoint = [
            {x3: 460 / scale, y3: 70 / scale} /*1.НОД-6*/,
            {x3: 430 / scale, y3: 85 / scale} /*2.НОД-5*/,
            {x3: 410 / scale, y3: 100 / scale} /*3.НОД-4*/,
            {x3: 390 / scale, y3: 115 / scale} /*4.НОД-3*/,
            {x3: 385 / scale, y3: 130 / scale} /*5.НОД-2*/,
            {x3: 370 / scale, y3: 145 / scale} /*6.НОД-1*/,
            {x3: 360 / scale, y3: 180 / scale} /*7.Белтел Могилёвская*/,
            {x3: 360 / scale, y3: 195 / scale} /*8.Белтел Минская*/,
            {x3: 360 / scale, y3: 210 / scale} /*9.Белтел Гродненская*/,
            {x3: 370 / scale, y3: 225 / scale} /*10.Белтел Гомельская*/,
            {x3: 380 / scale, y3: 240 / scale} /*11.Белтел Витебская*/,
            {x3: 385 / scale, y3: 255 / scale} /*12.Белтел Брестская*/,
            {x3: 400 / scale, y3: 290 / scale} /*13.Repeat call*/,
            {x3: 600 / scale, y3: 205 / scale} /*14.MTC*/,
            {x3: 600 / scale, y3: 190 / scale} /*15.Life*/,
            {x3: 600 / scale, y3: 175 / scale} /*16.International*/,
            {x3: 560 / scale, y3: 90 / scale} /*17.A1*/
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
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[10].x3} ${endPoint[10].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[11].x3} ${endPoint[11].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[12].x3} ${endPoint[12].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[13].x3} ${endPoint[13].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[14].x3} ${endPoint[14].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[15].x3} ${endPoint[15].y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[16].x3} ${endPoint[16].y3}`,
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
    const renderSkippedAcceptItem = (props: any) => {
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

        return (
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart width={630}
                          height={265}
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
                         label={renderProviderItem}
                         paddingAngle={1}
                    />
                    <Pie data={data01}
                         startAngle={-270}
                         dataKey="value"
                         cx="50%"
                         cy="50%"
                         outerRadius={"30%"}
                         fill="#8884d8"
                         labelLine={false}
                         paddingAngle={2}
                         label={renderSkippedAcceptItem}
                    />
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        );

}
export default CallPastPie;
