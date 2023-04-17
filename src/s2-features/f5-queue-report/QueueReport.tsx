import React, {useState} from 'react';
import s from './QueueReport.module.scss'
import {Sidebar} from "../../common/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/ArrowLeftIcon/ArrowLeftIcon";
import HomeIcon from "../../common/HomeIcon/HomeIcon";
import OptionIcon from "../../common/OptionIcon/OptionIcon";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import Table from "../../common/Table/Table";
import {queueReportData} from "../../data/queueReportData";
import QueueReportPie from "./QueueReportPie/QueueReportPie";
import QueueReportHistogram from "./QueueReportHistogram/QueueReportHistogram";

const columns = [
    {
        Header: 'Период',
        columns: [
            {
                Header: 'Начало периода',
                accessor: 'startPeriod',
                width: 120
            },
            {
                Header: 'Конец периода',
                accessor: 'endPeriod',
                width: 113
            },
        ]
    },
    {
        Header: 'Показатели',
        columns: [
            {
                Header: 'Очередь',
                accessor: 'queue',
            },
            {
                Header: 'Всего звонков',
                accessor: 'totalCall',
                width: 80
            },
            {
                Header: '% принятых',
                accessor: 'percentageReceivedCalls',
                width: 80
            },
            {
                Header: 'Уровень обслуживания <20',
                accessor: 'serviceLevel',
                width: 120
            },
        ]
    },
    {
        Header: 'Пропущено входящих вызовов',
        columns: [
            {
                Header: 'Пропущено',
                accessor: 'totalSkipped',
                width: 100
            },
            {
                Header: 'Пропущено <5с',
                accessor: 'skippedLess5s',
                width: 100
            },
            {
                Header: 'Пропущено <10с',
                accessor: 'skippedLess10s',
                width: 100
            },
            {
                Header: 'Пропущено <20с',
                accessor: 'skippedLess20s',
                width: 100
            },
            {
                Header: 'Пропущено <30с',
                accessor: 'skippedLess30s',
                width: 100
            },
            {
                Header: 'Пропущено <1м',
                accessor: 'skippedLess1m',
                width: 100
            },
            {
                Header: 'Пропущено <2м',
                accessor: 'skippedLess2m',
                width: 100
            },
            {
                Header: 'Пропущено >2м',
                accessor: 'skippedMore2m',
                width: 100
            }
        ]
    },
    {
        Header: 'Принято входящих вызовов',
        columns: [
            {
                Header: 'Принято',
                accessor: 'totalAccept',
                width: 90
            },
            {
                Header: 'Принято <5с',
                accessor: 'acceptLess5s',
                width: 90
            },
            {
                Header: 'Принято <10с',
                accessor: 'acceptLess10s',
                width: 90
            }
        ]
    },
]

const QueueReport = () => {
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

    return (
        <div className={s.queueReportWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>

                    </div>
                </div>
            </Sidebar>
            <div className={s.queueReportContainer}>
                <div className={s.queueReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по очередям</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <QueueReportPie/>
                    <QueueReportHistogram/>
                </div>
                <div className={s.histogram}>
                    <Table data={queueReportData} columns={columns} pagination={true} width={"99vw"}/>
                </div>
            </div>
        </div>
    );
};

export default QueueReport;