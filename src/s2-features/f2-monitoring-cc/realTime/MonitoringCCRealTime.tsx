import React, {ReactComponentElement, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes/routes";
import s from "./MonitoringCCRealTime.module.scss";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import MonitoringCCPie from "./r1-monitoring-cc-pie/MonitoringCCPie";
import Table from '../../../common/components/Table/Table'
import Histogram from "../../../common/components/Histogram/Histogram";
import useIsAuth from "../../../common/hooks/useIsAuth";
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {
    fetchRealTimeHistogramData
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeHistogram-reducer";
import {
    fetchRealTimeTodayPieData,
    StatusType
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../../common/components/Loader/Loader";
import {
    fetchRealMonthTodayPieData
} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeMonthPie-reducer";
import ErrorWindow from "../../../common/components/ErrorWindow/ErrorWindow";
import {findMaxAcceptAndNotAcceptSum} from "../../../common/utils/findMaxAcceptAndNotAcceptSum";
import {fetchRealTimeTableData} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTable-reducer";
import InfoWindow from "../../../common/components/InfoWindow/InfoWindow";
import {useScale} from "../../../common/hooks/useScale";


const MonitoringCCRealTime = () => {
    const scale = useScale()
    const realTimeHistogramData = useAppSelector(state => state.realTimeHistogramData.data)
    const realTimeTableData = useAppSelector(state => state.realTimeTableData.data)
    const realTimeTodayOuterPieData = useAppSelector(state => state.realTimeTodayPieData.data)
    const realTimeTodayInnerPieData = useAppSelector(state => state.realTimeTodayPieData.totalData)
    const realTimeMonthOuterPieData = useAppSelector(state => state.realTimeMonthPieData.data)
    const realTimeMonthInnerPieData = useAppSelector(state => state.realTimeMonthPieData.totalData)
    const histogramStatus = useAppSelector(state => state.realTimeHistogramData.status)
    const tableStatus = useAppSelector(state => state.realTimeTableData.status)
    const todayPieStatus = useAppSelector(state => state.realTimeTodayPieData.status)
    const monthPieStatus = useAppSelector(state => state.realTimeMonthPieData.status)
    const histogramError = useAppSelector(state => state.realTimeHistogramData.errorMessage)
    const tableError = useAppSelector(state => state.realTimeTableData.errorMessage)
    const todayPieError = useAppSelector(state => state.realTimeTodayPieData.errorMessage)
    const monthPieError = useAppSelector(state => state.realTimeMonthPieData.errorMessage)
    const [realTimeHistogramStateData, setRealTimeHistogramStateData] = useState(realTimeHistogramData)
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const dispatch = useDispatch<any>()

    console.log("Scale: " + scale)
    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchRealTimeHistogramData())
        dispatch(fetchRealTimeTodayPieData())
        dispatch(fetchRealMonthTodayPieData())
        dispatch(fetchRealTimeTableData())
        console.log("Fethcing")
        const intervalId = setInterval(() => {
            dispatch(fetchRealTimeHistogramData())
            dispatch(fetchRealTimeTodayPieData())
            dispatch(fetchRealMonthTodayPieData())
            dispatch(fetchRealTimeTableData())
        }, 20 * 60 * 1000);

        return () => clearInterval(intervalId);

    }, []);
    useEffect(() => {
        setRealTimeHistogramStateData(realTimeHistogramData)
    }, [realTimeHistogramData])
    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }

    const columns = [
        {
            Header: '№ за сегодня',
            accessor: 'ratingToday',
            width: 60
        },
        {
            Header: '№ за месяц',
            accessor: 'ratingMonth',
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
            title: '',
            width: 120
        },
        {
            Header: 'Среднее время разговора',
            accessor: 'avgServiseTime',
            width: 85
        },
        {
            Header: 'Среднее время разговора за месяц',
            accessor: 'avgServiceTimeMonth',
            width: 85
        },
        {
            Header: 'Рейтинг за месяц',
            accessor: 'monthRating',
            width: 85
        },
        {
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120
        },
        {
            Header: 'Загруженность за месяц',
            accessor: 'workloadMonth',
            width: 120
        }
    ]
    const renderComponent = (component: ReactComponentElement<any>, status: StatusType, error: string) => {
        if (status === "loaded") {
            return component
        } else if (status === "loading") {
            return <div className={s.centringLoader}>
                <Loader width={280} height={18}/>
            </div>
        } else if (status === "error") {
            return <div className={s.centringLoader}>
                <ErrorWindow errorMessage={error}/>
            </div>
        }
    }
    const domainYAxisCalls = findMaxAcceptAndNotAcceptSum(realTimeHistogramData)
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
                        {realTimeTodayOuterPieData.every(obj => obj.value === 0) &&
                        realTimeTodayInnerPieData.every(obj => obj.value === 0)
                            ? <div className={s.centringLoader}><InfoWindow message={'По вашему запросу ничего не найдено'}/></div>
                            : renderComponent(
                                <MonitoringCCPie pieLabelName={"day"} data1={realTimeTodayInnerPieData} data2={realTimeTodayOuterPieData}/>,
                                todayPieStatus,
                                todayPieError
                            )}
                    </div>
                    <div className={s.tableContainer}>
                        <span>Рейтинг операторов</span>
                        <div className={s.table}>
                            {renderComponent(
                                <Table columns={columns} data={realTimeTableData} height={"36vh"}/>,
                                tableStatus,
                                tableError
                            )}
                        </div>
                    </div>
                    <div className={s.callMonthPie}>
                        <span>Звонков за текущий месяц</span>
                        {realTimeMonthOuterPieData.every(obj => obj.value === 0) &&
                        realTimeMonthInnerPieData.every(obj => obj.value === 0)
                            ? <div className={s.centringLoader}><InfoWindow message={'По вашему запросу ничего не найдено'}/></div>
                            :renderComponent(
                            <MonitoringCCPie pieLabelName={"month"} data1={realTimeMonthInnerPieData} data2={realTimeMonthOuterPieData}/>,
                            monthPieStatus,
                            monthPieError
                        )}
                    </div>
                </div>
                <div className={s.histogramContainer}>
                    {renderComponent(
                        <Histogram data={realTimeHistogramStateData} callYAxisDomain={domainYAxisCalls}/>,
                        histogramStatus,
                        histogramError
                    )}
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCRealTime;