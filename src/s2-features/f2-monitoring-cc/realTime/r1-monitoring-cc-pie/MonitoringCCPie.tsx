import React from 'react';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {useScale} from "../../../../common/hooks/useScale";
export interface TotalAcceptAndSkippedCallType {
    name: string
    value: number
    fill: string
}
export interface QueueDataType {
    name: string
    value: number
    fill: string
}
interface CallPieType {
    data1: TotalAcceptAndSkippedCallType[]
    data2: QueueDataType[]
}
const MonitoringCCPie: React.FC<CallPieType> = ( {data1,data2}) => {
    const scale = useScale()

    const renderQueueLabel = (props: any) => {
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
            {x3: 280 / scale, y3: 60 / scale} /*1.НОД-6*/,
            {x3: 250 / scale, y3: 75 / scale} /*2.НОД-5*/,
            {x3: 225 / scale, y3: 90 / scale} /*3.НОД-4*/,
            {x3: 205 / scale, y3: 105 / scale} /*4.НОД-3*/,
            {x3: 200 / scale, y3: 120 / scale} /*5.НОД-2*/,
            {x3: 190 / scale, y3: 135 / scale} /*6.НОД-1*/,
            {x3: 190 / scale, y3: 160 / scale} /*7.Белтел Могилёвская*/,
            {x3: 190 / scale, y3: 175 / scale} /*8.Белтел Минская*/,
            {x3: 195 / scale, y3: 190 / scale} /*9.Белтел Гродненская*/,
            {x3: 200 / scale, y3: 205 / scale} /*10.Белтел Гомельская*/,
            {x3: 205 / scale, y3: 220 / scale} /*11.Белтел Витебская*/,
            {x3: 215 / scale, y3: 235 / scale} /*12.Белтел Брестская*/,
            {x3: 255 / scale, y3: 265 / scale} /*13.Repeat call*/,
            {x3: 390 / scale, y3: 205 / scale} /*14.MTC*/,
            {x3: 390 / scale, y3: 190 / scale} /*15.Life*/,
            {x3: 390 / scale, y3: 175 / scale} /*16.International*/,
            {x3: 370 / scale, y3: 90 / scale} /*17.A1*/
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
                <Pie data={data2}
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
                     activeShape={<>
                         <path></path>
                     </>}
                />
                <Pie data={data1}
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

export default MonitoringCCPie;