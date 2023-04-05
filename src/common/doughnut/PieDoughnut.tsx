import React, {PureComponent} from 'react';
import {Pie, PieChart, Sector} from 'recharts';

const data01 = [
    {name: 'Пропущено', value: 11, fill: '#e70707'},
    {name: 'Принято', value: 1513, fill: '#4bb253'},

];
const data02 = [
    {name: 'A1', value: 329, fill: '#fd3101'},
    {name: 'Life', value: 45, fill: '#4bb253'},
    {name: 'MTC', value: 417, fill: '#05bad0'},
    {name: 'Repeat call', value: 65, fill: '#fd8c7e'},
    {name: 'Белтел Гродненская', value: 46, fill: '#77ba8f'},
    {name: 'Белтел Брестская', value: 75, fill: '#696d85'},
    {name: 'Белтел Витебская', value: 69, fill: '#fdea77'},
    {name: 'Белтел Гомельская', value: 69, fill: '#7cbfcc'},
    {name: 'Белтел Минская', value: 267, fill: '#79ea6f'},
    {name: 'Белтел Могилёвская', value: 58, fill: '#cf7e10'},
    {name: 'НОД-1', value: 33, fill: '#1631c0'},
    {name: 'НОД-4', value: 15, fill: '#2db2c3'},
    {name: 'НОД-5', value: 14, fill: '#ef958a'},
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
             <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text style={{fontSize:"12px"}} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
            {`${name} ${(percent*100) <= 3
                ? Math.ceil(Number((percent * 100).toFixed(2)))
                : Math.floor(Number((percent * 100).toFixed(2)))}% `}

            {` (${value})`}
                </text>
        </g>
    );
};


export default class PieDoughnut extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

    state = {
        activeIndex: 0,
    };

    onPieEnter = (_: any, index: any) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
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
                     outerRadius={60}
                     fill="#8884d8"
                     label={renderActiveShape}
                />
                <Pie data={data02}
                     /*activeShape={renderActiveShape}
                     activeIndex={this.state.activeIndex}
                     onMouseEnter={this.onPieEnter}*/
                     dataKey={"value"}
                     cx="50%"
                     cy="50%"
                     innerRadius={70}
                     outerRadius={90}
                     fill="#82ca9d"
                     label={renderActiveShape}
                />
            </PieChart>

        );
    }
}
