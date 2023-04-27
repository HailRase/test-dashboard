import React, {useEffect, useState} from 'react';
import {Pie, PieChart, ResponsiveContainer} from "recharts";

const CallTodayPie = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        function handleResize() {
            const newScale = window.devicePixelRatio || 1;
            setScale(newScale);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(scale)
    const data01 = [
        {name: 'Пропущено', value: 11, fill: '#e70707'},
        {name: 'Принято', value: 1534, fill: '#4bb253'},
    ];
    const data02 = [
        {name: 'НОД-5', value: 14/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-4', value: 26/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-1', value: 53/*totalCallReducer('Видеотерминалы')*/, fill: '#2d585d'},
        {name: 'Белтел Могилёвская', value: 58 /*totalCallReducer('GSM')*/, fill: '#4bb253'},
        {name: 'Белтел Минская', value: 270 /*totalCallReducer('39-48-75')*/, fill: '#008dfe'},
        {name: 'Белтел Гродненская', value: 48 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: 'Белтел Гомельская', value: 70 /*totalCallReducer('151 Other')*/, fill: '#a2bab1'},
        {name: 'Белтел Витебская', value: 71/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: 'Белтел Брестская', value: 75/*totalCallReducer('151 Beltelecom')*/, fill: '#392c70'},
        {name: 'Repeat call', value: 65/*totalCallReducer('151 Beltelecom')*/, fill: '#4f457e'},
        {name: 'MTC', value: 423/*totalCallReducer('105 Other')*/, fill: '#ece296'},
        {name: 'Life', value: 47 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: 'A1', value: 333/*totalCallReducer('105 Beltelecom')*/, fill: '#d34758'},
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
            {x3: x1 - 10, y3: y1 - 10}, {x3: x1 - 30, y3: y1 + 5}, {x3: x1 - 45, y3: y1 + 20},
            {x3: x1 - 40, y3: y1 + 30}, {x3: x1 - 15, y3: y1 + 10}, {x3: x1 - 15, y3: y1 - 20},
            {x3: x1 - 20, y3: y1 - 20}, {x3: x1 - 25, y3: y1 - 20}, {x3: x1 - 35, y3: y1 - 20},
            {x3: x1 - 5, y3: y1 + 10}, {x3: x1 - 5, y3: y1 + 20}, {x3: x1 + 20, y3: y1 - 5},
            {x3: x1 + 20, y3: y1 - 5}
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
        ];

        return (
            <g>
                <path d={paths[index]} stroke={fill} fill="none"/>
                <text style={{fontSize: ".6vw", fontWeight: "500"}}
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
                <text style={name === "Принято" ? {fontSize: ".6vw", fontWeight: "700"} : {
                    fontSize: ".6vw",
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
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CallTodayPie;