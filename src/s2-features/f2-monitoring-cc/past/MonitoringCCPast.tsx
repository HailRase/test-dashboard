import React, {useState} from 'react';
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


const MonitoringCCPast = () => {


    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()

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
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120
        }
    ]
    const defaultColumn = {
        minWidth: 20,
        width: 100,
        maxWidth: 400,
    }

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
                        <Table data={operatorsRatingData} columns={columns} defaultColumn={defaultColumn}
                               height={"40vh"}/>
                    </div>
                </div>
                <div className={s.histogram}>
                    <Histogram data={monitoringPastData}/>
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCPast;