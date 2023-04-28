import React from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../common/routes/routes";
import s from "./MonitoringCCRealTime.module.scss";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import CallTodayPie from "./r1-calls-today-pie/CallTodayPie";
import CallsMonthPie from "./r2-calls-month-pie/CallsMonthPie";
import Table from '../../../common/components/Table/Table'
import {operatorsRatingData} from "../../../data/operatorsMonthData";
import Histogram from "../../../common/components/Histogram/Histogram";
import {monitoringRealTimeData} from "../../../data/histogram-data/monitoringRealTimeData";


const MonitoringCCRealTime = () => {

    const navigate = useNavigate()

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
                        <CallTodayPie/>
                    </div>
                    <div className={s.tableContainer}>
                        <span>Рейтинг операторов</span>
                        <div className={s.table}>
                            <Table columns={columns} data={operatorsRatingData} height={"36vh"}/>
                        </div>
                    </div>
                    <div className={s.callMonthPie}>
                        <span>Звонков за текущий месяц</span>
                        <CallsMonthPie/>
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