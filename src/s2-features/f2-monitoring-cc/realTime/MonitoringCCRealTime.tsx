import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes/routes";
import s from "./MonitoringCCRealTime.module.scss";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import MonitoringCCPie, {QueueDataType, TotalAcceptAndSkippedCallType} from "./r1-monitoring-cc-pie/MonitoringCCPie";
import Table from '../../../common/components/Table/Table'
import {operatorsRatingData} from "../../../data/operatorsMonthData";
import Histogram from "../../../common/components/Histogram/Histogram";
import useIsAuth from "../../../common/hooks/useIsAuth";
import {StoreType, useAppSelector} from "../../../s1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchRealTimeHistogramData, RealTimeHistogramDataType
} from "../../../s1-main/m2-bll/b2-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {
    fetchRealTimeTodayPieData
} from "../../../s1-main/m2-bll/b2-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../../common/components/Loader/Loader";


const MonitoringCCRealTime = () => {
    //const realTimeHistogramData = useAppSelector(state => state.realTimeHistogramData.data)
    const realTimeHistogramData = useSelector<StoreType, RealTimeHistogramDataType[]>(state => state.realTimeHistogramData.data)
    const realTimeTodayOuterPieData = useAppSelector(state => state.realTimeTodayPieData.data)
    const realTimeTodayInnerPieData = useAppSelector(state => state.realTimeTodayPieData.totalData)
    const histogramStatus = useAppSelector(state => state.realTimeHistogramData.status)
    const todayPieStatus = useAppSelector(state => state.realTimeHistogramData.status)
    const [realTimeHistogramStateData, setRealTimeHistogramStateData] = useState(realTimeHistogramData)
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const dispatch = useDispatch<any>()
    console.log(realTimeHistogramData)


    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchRealTimeHistogramData())
        dispatch(fetchRealTimeTodayPieData())
        const intervalId = setInterval(() => {
            dispatch(fetchRealTimeHistogramData())
            dispatch(fetchRealTimeTodayPieData())
        }, 20 * 60 * 1000);

        return () => clearInterval(intervalId);

    }, []);
    useEffect(()=> {
        setRealTimeHistogramStateData(realTimeHistogramData)
    }, [realTimeHistogramData])
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

    const monthPieData1: TotalAcceptAndSkippedCallType[] = [
        {name: 'Пропущено', value: 511, fill: '#e70707'},
        {name: 'Принято', value: 3534, fill: '#4bb253'},
    ];
    const monthPieData2: QueueDataType[] = [
        {name: 'НОД-6', value: 114/*totalCallReducer('Видеотерминалы')*/, fill: '#b3b3d9'},
        {name: 'НОД-5', value: 124/*totalCallReducer('Видеотерминалы')*/, fill: '#ef9288'},
        {name: 'НОД-4', value: 132/*totalCallReducer('Видеотерминалы')*/, fill: '#c94322'},
        {name: 'НОД-3', value: 187/*totalCallReducer('Видеотерминалы')*/, fill: '#6171c5'},
        {name: 'НОД-2', value: 146/*totalCallReducer('Видеотерминалы')*/, fill: '#d4830e'},
        {name: 'НОД-1', value: 153/*totalCallReducer('Видеотерминалы')*/, fill: '#50878d'},
        {name: 'Белтел Могилёвская', value: 158 /*totalCallReducer('GSM')*/, fill: '#64b280'},
        {name: 'Белтел Минская', value: 165 /*totalCallReducer('39-48-75')*/, fill: '#7dbecf'},
        {name: 'Белтел Гродненская', value: 148 /*totalCallReducer('39-25-47')*/, fill: '#ec977d'},
        {name: 'Белтел Гомельская', value: 170 /*totalCallReducer('151 Other')*/, fill: '#fcea87'},
        {name: 'Белтел Витебская', value: 1271/*totalCallReducer('151 GSM')*/, fill: '#76c5e7'},
        {name: 'Белтел Брестская', value: 175/*totalCallReducer('151 Beltelecom')*/, fill: '#7c84b8'},
        {name: 'Repeat call', value: 165/*totalCallReducer('151 Beltelecom')*/, fill: '#f1a492'},
        {name: 'MTC', value: 1123/*totalCallReducer('105 Other')*/, fill: '#02bbd0'},
        {name: 'Life', value: 147 /*totalCallReducer('105 GSM')*/, fill: '#489f48'},
        {name: 'International', value: 1153/*totalCallReducer('105 Beltelecom')*/, fill: '#7eb9f6'},
        {name: 'A1', value: 1333/*totalCallReducer('105 Beltelecom')*/, fill: '#fd3101'},
    ];

    /*const renderContent = () => {
        if (status === "loaded" || status === "init") {
            return <Table data={data} defaultColumn={defaultColumnsSize} columns={columns} pagination={true}
                          width={"100vw"} footer/>
        } else if (status === "loading") {
            return <div className={s.loaderContainer}>
                <Loader width={280} height={18}/>
            </div>
        } else if (status === "error") {
            return <div></div>
        }
    }*/

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
                        {todayPieStatus !== "loaded" ? <Loader width={280} height={18}/> :<MonitoringCCPie data1={realTimeTodayInnerPieData} data2={realTimeTodayOuterPieData}/>}
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
                    {histogramStatus !== "loaded" ? <Loader width={280} height={18}/> : <Histogram data={realTimeHistogramStateData}/>}
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCRealTime;