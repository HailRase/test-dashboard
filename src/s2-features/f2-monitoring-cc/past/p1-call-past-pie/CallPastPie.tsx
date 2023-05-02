import React, {PureComponent} from 'react';
import {Pie, PieChart, ResponsiveContainer} from 'recharts';

const data01 = [
    {name: 'Пропущено', value: 11, fill: '#e70707'},
    {name: 'Принято', value: 1513, fill: '#4bb253'},
];
const data02 = [
    {name: 'НОД-5', value: 14, fill: '#ef958a'},
    {name: 'НОД-4', value: 15, fill: '#2db2c3'},
    {name: 'НОД-1', value: 11, fill: '#1631c0'},
    {name: 'Белтел Могилёвская', value: 58, fill: '#cf7e10'},
    {name: 'Белтел Минская', value: 270, fill: '#79ea6f'},
    {name: 'Белтел Гродненская', value: 75, fill: '#77ba8f'},
    {name: 'Белтел Гомельская', value: 48, fill: '#7cbfcc'},
    {name: 'Белтел Витебская', value: 70, fill: '#fdea77'},
    {name: 'Белтел Брестская', value: 71, fill: '#696d85'},
    {name: 'Repeat call', value: 65, fill: '#fd8c7e'},
    {name: 'MTC', value: 423, fill: '#05bad0'},
    {name: 'Life', value: 47, fill: '#4bb253'},
    {name: 'A1', value: 333, fill: '#fd3101'},
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
    const textAnchor = cos >= 0 ? 'start' : 'end';

    const endPoint = [
        {x3: x1 - 20, y3: y1 - 10}, {x3: x1 - 40, y3: y1 + 5}, {x3: x1 - 55, y3: y1 + 20},
        {x3: x1 - 50, y3: y1 + 30}, {x3: x1 - 20, y3: y1 + 10}, {x3: x1 - 10, y3: y1 - 35},
        {x3: x1 - 20, y3: y1 - 35}, {x3: x1 - 25, y3: y1 - 35}, {x3: x1 - 35, y3: y1 - 35},
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


export default class CallPastPie extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

    render() {
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
                         innerRadius={"50%"}
                         outerRadius={"65%"}
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
                         outerRadius={"40%"}
                         fill="#8884d8"
                         labelLine={false}
                         paddingAngle={2}
                         label={renderSkippedAcceptItem}
                    />

                </PieChart>
            </ResponsiveContainer>
        );
    }
}
