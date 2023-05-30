import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes/routes";
import s from "./MonitoringCCRealTime.module.scss";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import MonitoringCCPie, {QueueDataType, TotalAcceptAndSkippedCallType} from "./r1-monitoring-cc-pie/MonitoringCCPie";
import Table from '../../../common/components/Table/Table'
import {operatorsRatingData} from "../../../data/operatorsMonthData";
import Histogram from "../../../common/components/Histogram/Histogram";
import {monitoringRealTimeData} from "../../../data/histogram-data/monitoringRealTimeData";
import useIsAuth from "../../../common/hooks/useIsAuth";


const MonitoringCCRealTime = () => {

    const navigate = useNavigate()
    const isAuth = useIsAuth()


    useEffect(() => {
        if (!isAuth) navigate('/')
    },[])

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }

    const columns = [
        {
            Header: '№ за сегодня',
            accessor: 'ratingRecordId',
            width: 60
        },
        {
            Header: '№ за месяц',
            accessor: 'ratingRecordIdMonth',
            width: 60
        },
        {
            Header: 'Оператор',
            accessor: 'operatorName',
            width: 200
        },
        {
            Header: 'Принял',
            accessor: 'accept',
            width: 70,
        },
        {
            Header: 'Пропустил',
            accessor: 'skip',
            width: 90
        },
        {
            Header: 'Уровень обслуживания',
            accessor: 'serviceLevel',
            width: 120
        },
        {
            Header: 'Среднее время разговора',
            accessor: 'avgServiceTime',
            width: 85
        },
        {
            Header: 'Среднее время разговора за месяц',
            accessor: 'avgServiceTimeMonth',
            width: 85
        },
        {
            Header: 'Рейтинг за месяц',
            accessor: 'ratingMonth',
            width: 85
        },
        {
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120
        },
        {
            Header: 'Загруженность',
            accessor: 'workloadMonth',
            width: 120
        }
    ]

    const todayPieData1: TotalAcceptAndSkippedCallType[] = [
        {name: 'Пропущено', value: 11, fill: '#e70707'},
        {name: 'Принято', value: 1534, fill: '#4bb253'},
    ];
    const todayPieData2: QueueDataType[] = [
        {name: 'НОД-6', value: 14/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-6', value: 24/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-4', value: 32/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-3', value: 87/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-2', value: 46/*totalCallReducer('Видеотерминалы')*/, fill: '#d9dc46'},
        {name: 'НОД-1', value: 53/*totalCallReducer('Видеотерминалы')*/, fill: '#2d585d'},
        {name: 'Белтел Могилёвская', value: 58 /*totalCallReducer('GSM')*/, fill: '#4bb253'},
        {name: 'Белтел Минская', value: 65 /*totalCallReducer('39-48-75')*/, fill: '#008dfe'},
        {name: 'Белтел Гродненская', value: 48 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: 'Белтел Гомельская', value: 70 /*totalCallReducer('151 Other')*/, fill: '#a2bab1'},
        {name: 'Белтел Витебская', value: 271/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: 'Белтел Брестская', value: 75/*totalCallReducer('151 Beltelecom')*/, fill: '#392c70'},
        {name: 'Repeat call', value: 65/*totalCallReducer('151 Beltelecom')*/, fill: '#4f457e'},
        {name: 'MTC', value: 123/*totalCallReducer('105 Other')*/, fill: '#ece296'},
        {name: 'Life', value: 47 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: 'International', value: 153/*totalCallReducer('105 Beltelecom')*/, fill: '#7eb9f6'},
        {name: 'A1', value: 333/*totalCallReducer('105 Beltelecom')*/, fill: '#d34758'},
    ];
    const monthPieData1: TotalAcceptAndSkippedCallType[] = [
        {name: 'Пропущено', value: 511, fill: '#e70707'},
        {name: 'Принято', value: 3534, fill: '#4bb253'},
    ];
    const monthPieData2: QueueDataType[] = [
        {name: 'НОД-6', value: 114/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-6', value: 124/*totalCallReducer('Видеотерминалы')*/, fill: '#fdc6c8'},
        {name: 'НОД-4', value: 132/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-3', value: 187/*totalCallReducer('Видеотерминалы')*/, fill: '#b26467'},
        {name: 'НОД-2', value: 146/*totalCallReducer('Видеотерминалы')*/, fill: '#d9dc46'},
        {name: 'НОД-1', value: 153/*totalCallReducer('Видеотерминалы')*/, fill: '#2d585d'},
        {name: 'Белтел Могилёвская', value: 158 /*totalCallReducer('GSM')*/, fill: '#4bb253'},
        {name: 'Белтел Минская', value: 165 /*totalCallReducer('39-48-75')*/, fill: '#008dfe'},
        {name: 'Белтел Гродненская', value: 148 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: 'Белтел Гомельская', value: 170 /*totalCallReducer('151 Other')*/, fill: '#a2bab1'},
        {name: 'Белтел Витебская', value: 1271/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: 'Белтел Брестская', value: 175/*totalCallReducer('151 Beltelecom')*/, fill: '#392c70'},
        {name: 'Repeat call', value: 165/*totalCallReducer('151 Beltelecom')*/, fill: '#4f457e'},
        {name: 'MTC', value: 1123/*totalCallReducer('105 Other')*/, fill: '#ece296'},
        {name: 'Life', value: 147 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: 'International', value: 1153/*totalCallReducer('105 Beltelecom')*/, fill: '#7eb9f6'},
        {name: 'A1', value: 1333/*totalCallReducer('105 Beltelecom')*/, fill: '#d34758'},
    ];

    return (
        <div className={s.monitoringCCWrapper}>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <span>Мониторинг Контакт-центра</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.callTodayPie}>
                        <span>Звонков сегодня</span>
                        <MonitoringCCPie data1={todayPieData1} data2={todayPieData2}/>
                    </div>
                    <div className={s.tableContainer}>
                        <span>Рейтинг операторов</span>
                        <div className={s.table}>
                            <Table columns={columns} data={operatorsRatingData} height={"36vh"}/>
                        </div>
                    </div>
                    <div className={s.callMonthPie}>
                        <span>Звонков за текущий месяц</span>
                        <MonitoringCCPie data1={monthPieData1} data2={monthPieData2}/>
                    </div>
                </div>
                <div className={s.histogramContainer}>
                    <Histogram data={monitoringRealTimeData}/>
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCRealTime;