import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const labels = [ '00:00',  '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
    '22:00', '23:00',];

const options = {
    type: 'bar',
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
    }
}

export const data = {
    labels,
    datasets: [
        {
            type: 'bar' as const,
            label: 'Не принято',
            data: labels.map(() => [-1000, 870, 920, 800, 1000]),
            borderColor: 'rgb(248,8,8)',
            fill: true,
            backgroundColor: 'rgb(248,8,8)',
        },
        {
            type: 'bar' as const,
            label: 'Принято',
            data: labels.map(() => [-1000, 870, 920, 800, 1000]),
            borderColor: 'rgb(20,162,10)',
            fill: true,
            backgroundColor: 'rgb(20,162,10)',
        },
        {
            type: 'line' as const,
            label: 'Среднее время разговора',
            data: labels.map(() => [-1000, 870, 920, 800, 1000]),
            borderColor: 'rgb(83,66,162)',
            backgroundColor: 'rgb(83,66,162)',
        },
        {
            type: 'line' as const,
            label: 'Максимальное кол-во одновременных звонков',
            data: labels.map(() => [-1000, 870, 920, 800, 1000]),
            borderColor: 'rgb(244,253,18)',
            backgroundColor: 'rgb(244,253,18)',
        },
        {
            type: 'line' as const,
            label: 'Операторов в системе',
            data: labels.map(() => [-1000, 560, 830, 810, 990]),
            borderColor: 'rgb(27,182,17)',
            backgroundColor: 'rgb(27,182,17)',
        },
    ],
};

const Histogram = () =>{
    return <Chart type={"bar"} data={data} /*options={options}*//>
};

export default Histogram;