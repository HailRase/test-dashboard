import React from 'react';
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    LabelList,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    {name: 'Кол-во звонков', date: "04.03", serviceLevel: 88, skipped: 37, accept: 1491},
];

const QueueReportHistogram = () => {
    return (
        <ResponsiveContainer>
            <ComposedChart data={data} margin={{}}>
                <XAxis dataKey={"date"}
                       tickLine={false}
                       style={{fontSize: "12px", fontWeight: 600, textAnchor: "middle"}}/>
                <YAxis yAxisId="1"
                       domain={[0, 1750]}
                       label={{value: 'Кол-во звонков', angle: -90, position: 'insideLeft', dy: 60}}
                       tickCount={8}
                       tickSize={8}
                       axisLine={false}
                       tickLine={false}
                />
                <YAxis
                    yAxisId="2"
                    orientation="right"
                    type="number"
                    tickCount={8}
                    tickSize={8}
                    domain={[88, 100]}
                    axisLine={false}
                    tickLine={false}
                    minTickGap={1}
                    tickMargin={0}
                    padding={{
                        top: 0,
                        bottom: 0,
                    }}
                />
                <CartesianGrid stroke="#a6a2a2" vertical={false}/>
                <Tooltip/>
                <Legend/>
                <Bar barSize={380}
                     dataKey="accept"
                     name={"Принято"}
                     stackId="a"
                     fill="#479e48"
                     yAxisId={"1"}
                     label={{position: 'center', fill: "#ffffff", fontSize: "12px"}}/>
                <Bar dataKey="skipped"
                     name={"Не принято"}
                     stackId="a"
                     fill="#d54758"
                     yAxisId={"1"}
                     style={{paddingBottom: "5px"}}
                     label={{position: 'insideBottom', fill: "#737171", fontSize: "14px", dy: -10}}>
                    <LabelList dataKey="skipped" position="center" fill="#ffffff" style={{fontSize: "12px"}}/>
                </Bar>
                <Line type="linearClosed"
                      name={"Уровень обслуживания"}
                      dataKey="serviceLevel"
                      yAxisId={"2"}
                      fill="#ebbe01"
                      label={{position: "top", fill: "black", fontSize: "14px"}}
                      strokeWidth={2}
                      stroke="#ebbe01"/>
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default QueueReportHistogram;