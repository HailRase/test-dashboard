import React, {useEffect, useState} from 'react';
import s from './MonitoringCCPast.module.scss'
import Histogram from "../../../common/components/Histogram/Histogram";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../../common/components/Sidebar/Sidebar";
import {PATH} from "../../../common/routes/routes";
import CustomTabs from "../../../common/components/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../../common/components/OptionIcon/OptionIcon";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import {monitoringPastData} from "../../../data/histogram-data/monitoringPastData";
import CallPastPie from "./p1-call-past-pie/CallPastPie";
import Table from "../../../common/components/Table/Table";
import {operatorsRatingData} from "../../../data/operatorsData";
import useIsAuth from "../../../common/hooks/useIsAuth";
import {useDispatch} from "react-redux";
import {useScale} from "../../../common/hooks/useScale";


const MonitoringCCPast = () => {

    const scale = useScale()
    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuth) navigate('/')
    },[])
    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }

    const columns = [
        {
            Header: '№',
            accessor: 'ratingRecordId',
            width: 70 /scale
        },
        {
            Header: 'Оператор',
            accessor: 'operatorName',
            width: 350 / scale
        },
        {
            Header: 'Принял',
            accessor: 'accept',
            width: 80 / scale
        },
        {
            Header: 'Пропустил',
            accessor: 'skip',
            width: 90 / scale
        },
        {
            Header: 'Уровень обслуживания',
            accessor: 'serviceLevel',
            width: 120 / scale
        },
        {
            Header: 'Среднее время разговора',
            accessor: 'avgServiceTime',
            width: 110/ scale
        },
        {
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120 / scale
        }
    ]

    return (
        <div className={s.monitoringCCWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <CustomTabs/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Мониторинг Контакт-центра (Past)</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.callPastPieContainer}>
                        <span>Звонков</span>
                        <CallPastPie/>
                    </div>
                    <div className={s.ratingContainer}>
                        <span>Рейтинг операторов</span>
                        <div className={s.table}><Table data={operatorsRatingData} columns={columns} height={"40vh"}/></div>
                    </div>
                </div>
                <div className={s.histogram}>
                    <Histogram data={monitoringPastData} callYAxisDomain={1000}/>
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCPast;