import React, {useState} from 'react';
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
    YAxis,
} from 'recharts';
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
        if (e.dataKey === "opActivity") {
            setOpActivity(!opActivity)
        } else if (e.dataKey === "notAccept") {
            setNotAcceptVisible(!notAcceptVisible)
        } else if (e.dataKey === "accept") {
            setAcceptVisible(!acceptVisible)
        } else if (e.dataKey === "avgCall") {
            setAvgCallVisible(!avgCallVisible)
        } else if (e.dataKey === "maxSimultaneousCall") {
            setMaxSimultaneousCallVisible(!maxSimultaneousCallVisible)
        } else if (e.dataKey === "opInSys") {
            setOpInSysVisible(!opInSysVisible)
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
                       domain={[0, 1000]}
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
                <YAxis
                    hide={!opActivity}
                    yAxisId="3"
                    orientation="right"
                    type="number"
                    allowDataOverflow
                    domain={[-5, 40]}
                    axisLine={false}
                    tickLine={false}
                    minTickGap={0}
                    tickMargin={0}
                    padding={{
                        top: 0,
                        bottom: 0,
                    }}
                />
                <Tooltip/>
                <Legend onClick={(e: any) => onVisibleLegendHandle(e)} color={"#000000"}/>
                <Bar dataKey="accept"
                     hide={!acceptVisible}
                     barSize={25}
                     stackId="a"
                     fill="#4c9e48"
                     name="Принято"
                     yAxisId="1"
                     onClick={onVisibleLegendHandle}
                     animationEasing={"ease"}
                     label={{position: 'center', fill: "#ffffff", fontSize: "10px"}}
                />
                <Bar dataKey="notAccept"
                     hide={!notAcceptVisible}
                     barSize={25}
                     stackId="a"
                     fill="#cb4559"
                     name="Не принято"
                     yAxisId="1"
                     label={{position: 'insideTop', fill: "#737171", fontSize: "12px", dy: -20,}}
                     onClick={onVisibleLegendHandle}
                     animationEasing={"ease"}
                >
                    <LabelList dataKey="notAccept" position="center" fill="#ffffff" style={{fontSize: "10px"}}/>
                </Bar>
                <Line type="monotone"
                      dataKey="avgCall"
                      hide={!avgCallVisible}
                      stroke="#381274"
                      fill="#000000"
                      strokeWidth={1}
                      name="Среднее время разговора"
                      yAxisId="2"
                      label={{position: 'top', fontSize: "10px"}}
                      onClick={onVisibleLegendHandle}
                      animationEasing={"ease"}
                />
                <Line type="monotone"
                      dataKey="maxSimultaneousCall"
                      hide={!maxSimultaneousCallVisible}
                      stroke="#f0f119"
                      fill="#f0f119"
                      strokeWidth={1}
                      name="Максимальное количество одновременных звонков"
                      yAxisId="2"
                      label={{position: 'top', fontSize: "10px"}}
                      display={""}
                      onClick={onVisibleLegendHandle}
                      animationEasing={"ease"}
                />
                <Line type="monotone"
                      dataKey="opInSys"
                      hide={!opInSysVisible}
                      stroke="#289a9c"
                      fill="#289a9c"
                      strokeWidth={1}
                      name="Операторов в системе"
                      yAxisId="2"
                      label={{position: 'top', fontSize: "10px"}}
                      onClick={onVisibleLegendHandle}
                      animationEasing={"ease"}
                />
                <Line type="monotone"
                      dataKey="opActivity"
                      hide={!opActivity}
                      stroke="#e78e5d"
                      fill="#e78e5d"
                      style={{color: "#e78e5d"}}
                      strokeWidth={1}
                      name="Активность операторов"
                      yAxisId="3"
                      label={{position: 'top', fontSize: "10px"}}
                      onClick={onVisibleLegendHandle}
                      animationEasing={"ease"}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );

}
export default Histogram