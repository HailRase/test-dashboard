import React, {useState} from 'react';
import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import './Histogram.scss'


type HistogramPropsType = {
    data: any
}

const Histogram: React.FC<HistogramPropsType> = ({data}) => {

        const [notAcceptVisible, setNotAcceptVisible] = useState<boolean>(true)
        const [acceptVisible, setAcceptVisible] = useState<boolean>(true)
        const [avgCallVisible, setAvgCallVisible] = useState<boolean>(true)
        const [maxSimultaneousCallVisible, setMaxSimultaneousCallVisible] = useState<boolean>(true)
        const [opInSysVisible, setOpInSysVisible] = useState<boolean>(true)
        const [opActivity, setOpActivity] = useState<boolean>(false)

        const onVisibleLegendHandle = (e: any) => {
            if(e.dataKey === "opActivity"){
                setOpActivity(false)
            }else if(e.dataKey === "_opActivity"){
                setOpActivity(true)
            }else if(e.dataKey === "notAccept"){
                setNotAcceptVisible(false)
            }else if(e.dataKey === "_notAccept"){
                setNotAcceptVisible(true)
            }else if(e.dataKey === "accept"){
                setAcceptVisible(false)
            }else if(e.dataKey === "_accept"){
                setAcceptVisible(true)
            }else if(e.dataKey === "avgCall"){
                setAvgCallVisible(false)
            }else if(e.dataKey === "_avgCall"){
                setAvgCallVisible(true)
            }else if(e.dataKey === "maxSimultaneousCall"){
                setMaxSimultaneousCallVisible(false)
            }else if(e.dataKey === "_maxSimultaneousCall"){
                setMaxSimultaneousCallVisible(true)
            }else if(e.dataKey === "opInSys"){
                setOpInSysVisible(false)
            }else if(e.dataKey === "_opInSys"){
                setOpInSysVisible(true)
            }
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
                    {opActivity && <YAxis
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
                    />}
                    <Tooltip/>
                    <Legend onClick={(e:any)=> onVisibleLegendHandle(e)}/>
                    <Bar dataKey={notAcceptVisible ? "notAccept" : "_notAccept"}
                         barSize={20}
                         fill={notAcceptVisible ? "#cb4559" : "#504e4e"}
                         name="Не принято"
                         yAxisId="1"
                         label={{position: 'top'}}
                    />

                    <Bar dataKey={acceptVisible ? "accept" : "_accept"}
                         label={{position: 'top'}}
                         barSize={20}
                         fill={acceptVisible ? "#4c9e48" : "#504e4e"}
                         name="Принято"
                         yAxisId="1"
                    />
                    <Line type="monotone"
                          dataKey={avgCallVisible ? "avgCall" : "_avgCall"}
                          stroke={avgCallVisible ? "#381274" : "#504e4e"}
                          fill={avgCallVisible ? "#381274" : "#504e4e"}
                          strokeWidth={2}
                          name="Среднее время разговора"
                          yAxisId="2"
                          label={{position: 'top'}}
                    />
                    <Line type="monotone"
                          dataKey={maxSimultaneousCallVisible ? "maxSimultaneousCall" : "_maxSimultaneousCall"}
                          stroke={maxSimultaneousCallVisible ? "#f0f119" : "#504e4e"}
                          fill={maxSimultaneousCallVisible ? "#f0f119" : "#504e4e"}
                          strokeWidth={2}
                          name="Максимальное количество одновременных звонков"
                          yAxisId="2"
                          label={{position: 'top'}}
                          display={""}
                    />
                     <Line type="monotone"
                           dataKey={opInSysVisible ? "opInSys" : "_opInSys"}
                           stroke={opInSysVisible ? "#289a9c" : "#504e4e"}
                           fill={opInSysVisible ? "#289a9c" : "#504e4e"}
                           strokeWidth={2}
                           name="Операторов в системе"
                           yAxisId="2"
                           label={{position: 'top'}}
                    />
                    <Line type="monotone"
                          dataKey={opActivity ? "opActivity" : "_opActivity"}
                          stroke={ opActivity ? "#e78e5d" :  "#504e4e"}
                          fill={ opActivity ? "#e78e5d" :  "#504e4e"}
                          style={ opActivity ?{color: "#e78e5d"} : {color: "#504e4e"}}
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