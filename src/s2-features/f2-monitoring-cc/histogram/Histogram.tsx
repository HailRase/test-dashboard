import React, {PureComponent, useState} from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, Label, LineChart, LabelList, Dot,
} from 'recharts';
import './Histogram.scss'



const data = [
    {
        name: '00:00',
        notAccept: 3,
        accept: 30,
        avgCall: 1.3,
        maxSimultaneousCall: 8,
        opInSys: 4,
        opActivity: 1

    },
    {
        name: '01:00',
        notAccept: 0,
        accept: 13,
        avgCall: 1.2,
        maxSimultaneousCall: 3,
        opInSys: 4,
        opActivity: 3
    },
    {
        name: '02:00',
        notAccept: 0,
        accept: 14,
        avgCall: 1,
        maxSimultaneousCall: 3,
        opInSys: 3,
        opActivity: 1
    },
    {
        name: '03:00',
        notAccept: 0,
        accept: 5,
        avgCall: 0.9,
        maxSimultaneousCall: 2,
        opInSys: 3,
        opActivity: 2
    },
    {
        name: '04:00',
        notAccept: 0,
        accept: 12,
        avgCall: 1.2,
        maxSimultaneousCall: 4,
        opInSys: 3,
        opActivity: 3
    },
    {
        name: '05:00',
        notAccept: 0,
        accept: 21,
        avgCall: 1.4,
        maxSimultaneousCall: 4,
        opInSys: 4,
        opActivity: 5
    },
    {
        name: '06:00',
        notAccept: 2,
        accept: 36,
        avgCall: 1.0,
        maxSimultaneousCall: 6,
        opInSys: 6,
        opActivity: 11
    },
    {
        name: '07:00',
        notAccept: 1,
        accept: 82,
        avgCall: 0.8,
        maxSimultaneousCall: 6,
        opInSys: 9,
        opActivity: 11
    },
    {
        name: '08:00',
        notAccept: 1,
        accept: 137,
        avgCall: 1.1,
        maxSimultaneousCall: 13,
        opInSys: 11,
        opActivity: 15
    },
    {
        name: '09:00',
        notAccept: 1,
        accept: 220,
        avgCall: 1.5,
        maxSimultaneousCall: 19,
        opInSys: 14,
        opActivity: 16
    },
    {
        name: '10:00',
        notAccept: 0,
        accept: 233,
        avgCall: 1.2,
        maxSimultaneousCall: 12,
        opInSys: 15,
        opActivity: 20
    },
    {
        name: '11:00',
        notAccept: 1,
        accept: 246,
        avgCall: 1.4,
        maxSimultaneousCall: 15,
        opInSys: 15,
        opActivity: 17
    },
    {
        name: '12:00',
        notAccept: 0,
        accept: 199,
        avgCall: 1.3,
        maxSimultaneousCall: 14,
        opInSys: 15,
        opActivity: 16

    },
    {
        name: '13:00',
        notAccept: 0,
        accept: 181,
        avgCall: 1.5,
        maxSimultaneousCall: 12,
        opInSys: 15,
        opActivity: 16
    },
    {
        name: '14:00',
        notAccept: 0,
        accept: 84,
        avgCall: 1.4,
        maxSimultaneousCall: 15,
        opInSys: 13,
        opActivity: 14
    },
    {
        name: '15:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '16:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '17:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '18:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '19:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '20:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '21:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '22:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    },
    {
        name: '23:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0,
        opActivity: 0
    }
];

const Histogram = () => {

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
                    data={data}
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

}
export default Histogram