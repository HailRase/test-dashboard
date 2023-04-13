import React from 'react';
import {Pie, PieChart, Sector} from "recharts";
import {queueReportData} from "../../../data/queueReportData";
import {totalCallReducer} from "../../../common/utils/totalCallReducer";

const QueueReportPie = () => {

    const data01 = [
        {name: 'Пропущено', value: 37, fill: '#e70707'},
        {name: 'Принято', value: 1491, fill: '#4bb253'},
    ];
    const reportData = [...queueReportData.map( r => ({ name: r.queue, value: r.totalCall}))]
    console.log(reportData)
    const data02 = [
        {name: 'Видеотерминалы', value: totalCallReducer('Видеотерминалы'), fill: '#fdc6c8'},
        {name: 'GSM', value: totalCallReducer('GSM'), fill: '#4bb253'},
        {name: '39-48-75', value: totalCallReducer('39-48-75'), fill: '#008dfe'},
        {name: '39-25-47', value: totalCallReducer('39-25-47'), fill: '#ec977d'},
        {name: '151 Other', value: totalCallReducer('151 Other'), fill: '#a2bab1'},
        {name: '151 GSM', value: totalCallReducer('151 GSM'), fill: '#76c5e7'},
        {name: '151 Beltelecom', value: totalCallReducer('151 Beltelecom'), fill: '#392c70'},
        {name: '105 Other', value: totalCallReducer('105 Other'), fill: '#ece296'},
        {name: '105 GSM', value: totalCallReducer('105 GSM'), fill: '#489f48'},
        {name: '105 Beltelecom', value: totalCallReducer('105 Beltelecom'), fill: '#d34758'},
    ];

    const renderActiveShape = (props: any) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, name } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
                <text style={{fontSize:"12px"}} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
                    {`${name} ${(percent*100) <= 3
                        ? Math.ceil(Number((percent * 100).toFixed(2)))
                        : Math.floor(Number((percent * 100).toFixed(2)))}% `}
                    {` (${value})`}
                </text>
            </g>
        );
    };

    return (
        <PieChart width={630}
                  height={265}

                  margin={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                  }}>
            <Pie data={data01}
                /*activeShape={renderActiveShape}
                activeIndex={this.state.activeIndex}
                onMouseEnter={this.onPieEnter}*/
                 dataKey="value"
                 cx="50%"
                 cy="50%"
                 outerRadius={50}
                 fill="#8884d8"
                 label={renderActiveShape}
                 paddingAngle={3}
            />
            <Pie data={data02}

                /*activeShape={renderActiveShape}
                activeIndex={this.state.activeIndex}
                onMouseEnter={this.onPieEnter}*/
                 dataKey={"value"}
                 cx="50%"
                 cy="50%"
                 innerRadius={70}
                 outerRadius={100}
                 fill="#82ca9d"
                 label={renderActiveShape}
                 paddingAngle={2}
            />
        </PieChart>
    );
};

export default QueueReportPie;