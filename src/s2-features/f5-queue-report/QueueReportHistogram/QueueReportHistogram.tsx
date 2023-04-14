import React, {useState} from 'react';
import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const QueueReportHistogram = () => {
    const [opLineVisible, setOpLineVisible] = useState<boolean>(false)

    const onOpActivityLegendHandle = (e: any) => {
        if(e.dataKey === "opActivity"){
            setOpLineVisible(false)
        }else if(e.dataKey === "_opActivity"){
            setOpLineVisible(true)
        }
        console.log(e)
    }
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                /*data={data}*/
                margin={{
                    top: 10,
                    right: 0,
                    left: 10,
                    bottom: 0,
                }}
            >
                <CartesianGrid stroke="#a6a2a2" vertical={false}/>
                <XAxis dataKey="name"/>
                <YAxis yAxisId="1"
                       domain={[0, 450]}
                       label={{value: 'Кол-во звонков', angle: -90, position: 'insideLeft'}}
                       tickCount={10}
                />
                <YAxis
                    yAxisId="2"
                    orientation="right"
                    type="number"
                    tickCount={10}
                    tickSize={10}
                    ticks={[-2.5, 0 , 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20]}
                    allowDataOverflow
                    domain={[-2.5, 20]}
                    axisLine={false}
                    tickLine={false}
                    minTickGap={1}
                    tickMargin={0}
                    padding={{
                        top: 0,
                        bottom: 0,
                    }}
                />
                <YAxis
                    yAxisId="3"
                    orientation="right"
                    type="number"
                    allowDataOverflow
                    domain={[-5, 40]}
                    axisLine={false}
                    tickLine={false}
                    minTickGap={1}
                    tickMargin={0}
                    padding={{
                        top: 0,
                        bottom: 0,
                    }}
                />
                <Tooltip/>
                <Legend onClick={(e:any)=> onOpActivityLegendHandle(e)}/>
                <Bar dataKey="notAccept"
                     barSize={20}
                     fill="#cb4559"
                     name="Не принято"
                     yAxisId="1"
                     label={{position: 'top'}}
                />

                <Bar dataKey="accept"
                     label={{position: 'top'}}
                     barSize={20}
                     fill="#4c9e48"
                     name="Принято"
                     yAxisId="1"
                />
                <Line type="monotone"
                      dataKey="avgCall"
                      stroke="#381274"
                      fill="#381274"
                      strokeWidth={2}
                      name="Среднее время разговора"
                      yAxisId="2"
                      label={{position: 'top'}}
                />
                <Line type="monotone"
                      dataKey="maxSimultaneousCall"
                      stroke="#f0f119"
                      fill="#f0f119"
                      strokeWidth={2}
                      name="Максимальное количество одновременных звонков"
                      yAxisId="2"
                      label={{position: 'top'}}
                      display={""}
                />
                <Line type="monotone"
                      dataKey="opInSys"
                      stroke="#289a9c"
                      fill="#289a9c"
                      strokeWidth={2}
                      name="Операторов в системе"
                      yAxisId="2"
                      label={{position: 'top'}}
                />
                <Line type="monotone"
                      dataKey={opLineVisible ? "opActivity" : "_opActivity"}
                      stroke={ opLineVisible ? "#e78e5d" :  "#504e4e"}
                      fill={ opLineVisible ? "#e78e5d" :  "#504e4e"}
                      style={ opLineVisible ?{color: "#e78e5d"} : {color: "#504e4e"}}
                      strokeWidth={2}
                      name="Активность операторов"
                      yAxisId="3"
                      label={{position: 'top'}}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default QueueReportHistogram;