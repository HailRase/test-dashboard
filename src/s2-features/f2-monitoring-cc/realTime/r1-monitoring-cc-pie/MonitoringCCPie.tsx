import React, {useEffect, useState} from 'react';
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
    pieLabelName: "month" | "day"
    data1: TotalAcceptAndSkippedCallType[]
    data2: QueueDataType[]
}

const MonitoringCCPie: React.FC<CallPieType> = ({data1, data2, pieLabelName}) => {
    const scale = useScale()
    const [queueLabelXY, setQueueLabelXY] = useState<any>({})


    const changeQueueLabelXY = (props: any) => {
        setQueueLabelXY(props)
    }

    const QueueLabel = (props: any) => {
        /*const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index, endAngle} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = index >= 13 ? 'start' : 'end';
        const my = cy + (outerRadius + 15) * sin;
        const ex = x2 + (cos >= 0 ? 1 : -1) * 10;
        const ey = my;*/


        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index, x, y} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = index >= 13 ? 'start' : 'end';
        const my = cy + (outerRadius + 15) * sin;
        const ex = x2 + (cos >= 0 ? 1 : -1) * 10;
        const ey = my
        const [x3, setX3] = useState(x/scale)
        const [y3, setY3] = useState(y/scale)
        /*useEffect(() => {
            if (y - y3 > 15) {
                setX3(x)
                setY3(y + 15)
            }else {
                setX3(x)
                setY3(y)
            }
        }, [x,y] )
        debugger
        console.log("X3["+index+"]: " + x3)
        console.log("Y3["+index+"]: " + y3)*/

        const endPoint = [
            {x3: 250 / scale, y3: 70 / scale} /*1.НОД-6*/,
            {x3: 220 / scale, y3: 85 / scale} /*2.НОД-5*/,
            {x3: 195 / scale, y3: 100 / scale} /*3.НОД-4*/,
            {x3: 175 / scale, y3: 115 / scale} /*4.НОД-3*/,
            {x3: 170 / scale, y3: 130 / scale} /*5.НОД-2*/,
            {x3: 160 / scale, y3: 145 / scale} /*6.НОД-1*/,
            {x3: 180 / scale, y3: 200 / scale} /*7.Белтел Могилёвская*/,
            {x3: 180 / scale, y3: 215 / scale} /*8.Белтел Минская*/,
            {x3: 190 / scale, y3: 230 / scale} /*9.Белтел Гродненская*/,
            {x3: 200 / scale, y3: 245 / scale} /*10.Белтел Гомельская*/,
            {x3: 215 / scale, y3: 260 / scale} /*11.Белтел Витебская*/,
            {x3: 225 / scale, y3: 275 / scale} /*12.Белтел Брестская*/,
            {x3: 360 / scale, y3: 295 / scale} /*13.Repeat call*/,
            {x3: 400 / scale, y3: 205 / scale} /*14.MTC*/,
            {x3: 400 / scale, y3: 190 / scale} /*15.Life*/,
            {x3: 400 / scale, y3: 175 / scale} /*16.International*/,
            {x3: 380 / scale, y3: 90 / scale} /*17.A1*/
        ]
        /*const paths = [
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        ];*/
        const paths = [
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
            `M ${x1} ${y1} Q ${x2} ${y2}, ${x3} ${y3}`,
        ];


        return (<g>
                {value === 0 ? <></> : <>
                    {/*<path style={{zIndex: 1}} d={`M ${x1} ${y1} Q ${x2} ${y2}, ${newEx} ${ey}`}
                      stroke={fill} fill="none"/>*/}
                    <path d={paths[index]} stroke={fill} fill="none"/>
                    {/*<text style={{fontSize: "12px", fontWeight: "500"}}
                      x={textAnchor === 'start' ? ex + 5 : ex - 5}
                      y={ey + 5}
                      textAnchor={textAnchor}
                      fill="#333"></text>*/}
                    <text style={{fontSize: "12px", fontWeight: "500"}}
                          x={textAnchor === 'start' ? x + 5 : x - 5}
                          y={y + 5}
                          textAnchor={textAnchor}
                          fill="#333">
                        {`${name}`} {`${(percent * 100) <= 3
                        ? Math.ceil(Number((percent * 100).toFixed(2)))
                        : Math.floor(Number((percent * 100).toFixed(2)))}% `}
                        {` (${value})`}
                    </text>
                </>}
            </g>
        );
    };

    const RenderSkippedAcceptLabel = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index} = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const x1 = cx + outerRadius * cos;
        const y1 = cy + outerRadius * sin;
        const x2 = cx + (outerRadius + 10) * cos;
        const y2 = cy + (outerRadius + 10) * sin;
        const textAnchor = index >= 0 ? 'start' : 'end';
        const my = cy + (outerRadius + 15) * sin;
        const ex = x2 + (cos >= 0 ? 1 : -1) * 10;
        const ey = my;


        const endPoint = [{x3: (x1 + 5) / scale, y3: y1 - 10}, {x3: (x1 - 5) / scale, y3: y1 + 10}]
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
                     label={<QueueLabel pieLabelName={pieLabelName} queueLabelXY={queueLabelXY}
                                        changeQueueLabelXY={changeQueueLabelXY}/>}
                     paddingAngle={1}
                     style={{zIndex: 9999}}
                     minAngle={5}
                     isAnimationActive={false}
                     animationBegin={0}
                />
                {/*<QueueLabel pieLabelName={pieLabelName} queueLabelXY={queueLabelXY} changeQueueLabelXY={changeQueueLabelXY}/>*/}
                <Pie data={data1}
                     startAngle={-280}
                     dataKey="value"
                     cx="50%"
                     cy="50%"
                     outerRadius={"30%"}
                     fill="#8884d8"
                     labelLine={false}
                     label={RenderSkippedAcceptLabel}
                     paddingAngle={2}
                     isAnimationActive={false}
                     animationBegin={0}
                />
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MonitoringCCPie;