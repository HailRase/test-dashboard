/*import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Histogram extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-double-y-axes-4j73x';

    render() {
        return (

                <LineChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
        );
    }
}*/


import React, {PureComponent} from 'react';
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
    ResponsiveContainer, Label, LineChart, LabelList,
} from 'recharts';

const data = [
    {
        name: '00:00',
        notAccept: 3,
        accept: 30,
        avgCall: 1.3,
        maxSimultaneousCall: 8,
        opInSys: 4
    },
    {
        name: '01:00',
        notAccept: 0,
        accept: 13,
        avgCall: 1.2,
        maxSimultaneousCall: 3,
        opInSys: 4
    },
    {
        name: '02:00',
        notAccept: 0,
        accept: 14,
        avgCall: 1,
        maxSimultaneousCall: 3,
        opInSys: 3
    },
    {
        name: '03:00',
        notAccept: 0,
        accept: 5,
        avgCall: 0.9,
        maxSimultaneousCall: 2,
        opInSys: 3
    },
    {
        name: '04:00',
        notAccept: 0,
        accept: 12,
        avgCall: 1.2,
        maxSimultaneousCall: 4,
        opInSys: 3
    },
    {
        name: '05:00',
        notAccept: 0,
        accept: 21,
        avgCall: 1.4,
        maxSimultaneousCall: 4,
        opInSys: 4
    },
    {
        name: '06:00',
        notAccept: 2,
        accept: 36,
        avgCall: 1.0,
        maxSimultaneousCall: 6,
        opInSys: 6
    },
    {
        name: '07:00',
        notAccept: 1,
        accept: 82,
        avgCall: 0.8,
        maxSimultaneousCall: 6,
        opInSys: 9
    },
    {
        name: '08:00',
        notAccept: 1,
        accept: 137,
        avgCall: 1.1,
        maxSimultaneousCall: 13,
        opInSys: 11
    },
    {
        name: '09:00',
        notAccept: 1,
        accept: 220,
        avgCall: 1.5,
        maxSimultaneousCall: 19,
        opInSys: 14
    },
    {
        name: '10:00',
        notAccept: 0,
        accept: 233,
        avgCall: 1.2,
        maxSimultaneousCall: 12,
        opInSys: 15
    },
    {
        name: '11:00',
        notAccept: 1,
        accept: 246,
        avgCall: 1.4,
        maxSimultaneousCall: 15,
        opInSys: 15
    },
    {
        name: '12:00',
        notAccept: 0,
        accept: 199,
        avgCall: 1.3,
        maxSimultaneousCall: 14,
        opInSys: 15
    },
    {
        name: '13:00',
        notAccept: 0,
        accept: 181,
        avgCall: 1.5,
        maxSimultaneousCall: 12,
        opInSys: 15
    },
    {
        name: '14:00',
        notAccept: 0,
        accept: 84,
        avgCall: 1.4,
        maxSimultaneousCall: 15,
        opInSys: 13
    },
    {
        name: '15:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '16:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '17:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '18:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '19:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '20:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '21:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '22:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    },
    {
        name: '23:00',
        notAccept: 0,
        accept: 0,
        avgCall: 0,
        maxSimultaneousCall: 0,
        opInSys: 0
    }
];

export default class Histogram extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 10,
                    bottom:0,
                }}
            >
                <CartesianGrid  stroke="#a6a2a2"  vertical={false}/>
                <XAxis dataKey="name"/>
                <YAxis yAxisId="1"
                       domain={[0,450]}
                       label={{ value: 'Кол-во звонков', angle: -90, position: 'insideLeft' }}
                />
                <YAxis
                    yAxisId="2"
                    orientation="right"
                    type="number"
                    allowDataOverflow
                    domain={[-2.5,20]}
                />
                <Tooltip/>
                <Legend/>
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
            </ComposedChart>
                </ResponsiveContainer>
        );
    }
}
