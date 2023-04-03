import React, {PureComponent} from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts';

const data01 = [
    {name: 'Пропущено', value: 11, fill: '#fdfdfe'},
    {name: 'Принято', value: 1513, fill: '#fd3101'},

];
const data02 = [
    {name: 'A1', value: 329, fill: '#fd3101'},
    {name: 'Life', value: 45, fill: '#4bb253'},
    {name: 'MTC', value: 417, fill: '#05bad0'},
    {name: 'Repeat call', value: 65, fill: '#fd8c7e'},
    {name: 'Белтел Брестская', value: 75, fill: '#696d85'},
    {name: 'Белтел Витебская', value: 69, fill: '#fdea77'},
    {name: 'Белтел Гомельская', value: 69, fill: '#7cbfcc'},
    {name: 'Белтел Гродненская', value: 46, fill: '#77ba8f'},
    {name: 'Белтел Минская', value: 267, fill: '#79ea6f'},
    {name: 'Белтел Могилёвская', value: 58, fill: '#cf7e10'},
    {name: 'НОД-1', value: 33, fill: '#1631c0'},
    {name: 'НОД-4', value: 15, fill: '#2db2c3'},
    {name: 'НОД-5', value: 14, fill: '#ef958a'},
];

export default class PieDoughnut extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

    render() {
        return (

            <PieChart width={265}
                      height={265}
                      margin={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0
                      }}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"
                     label/>
            </PieChart>

        );
    }
}
