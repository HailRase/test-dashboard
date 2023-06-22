import React, {useEffect, useState} from 'react';
import s from './QueueReport.module.scss'
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import Table from "../../common/components/Table/Table";
import {queueReportData} from "../../data/queueReportData";
import QueueReportPie from "./QueueReportPie/QueueReportPie";
import QueueReportHistogram from "./QueueReportHistogram/QueueReportHistogram";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import TabButton from "../../common/components/TabButton/TabButton";
import Accordion from "../../common/components/Accordion/Accordion";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcNumTotal} from "../../common/hooks/useCalcNumTotal";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";


const QueueReport = () => {
    const columns = [
        {
            Header: 'Период',
            Footer: <></>,
            columns: [
                {
                    Header: 'Начало периода',
                    accessor: 'startPeriod',
                    width: 130,
                    Footer: <>Total:</>
                },
                {
                    Header: 'Конец периода',
                    accessor: 'endPeriod',
                    width: 130,
                    Footer: <></>
                },
            ]
        },
        {
            Header: 'Показатели',
            Footer: <></>,
            columns: [
                {
                    Header: 'Очередь',
                    accessor: 'queue',
                    Footer: <></>

                },
                {
                    Header: 'Всего звонков',
                    accessor: 'totalCall',
                    width: 80,
                    Footer: (info: any) => useCalcNumTotal(info,'totalCall'),
                },
                {
                    Header: '% принятых',
                    accessor: 'percentageReceivedCalls',
                    width: 80,
                    Footer: <></>
                },
                {
                    Header: 'Уровень обслуживания <20',
                    accessor: 'serviceLevel',
                    width: 120,
                    Footer: (info: any) => useCalcNumTotal(info,'serviceLevel')
                },
            ]
        },
        {
            Header: 'Пропущено входящих вызовов',
            Footer: <></>,
            columns: [
                {
                    Header: 'Пропущено',
                    accessor: 'totalSkipped',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'totalSkipped')
                },
                {
                    Header: 'Пропущено <5с',
                    accessor: 'skippedLess5s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess5s')
                },
                {
                    Header: 'Пропущено <10с',
                    accessor: 'skippedLess10s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess10s')
                },
                {
                    Header: 'Пропущено <20с',
                    accessor: 'skippedLess20s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess20s')
                },
                {
                    Header: 'Пропущено <30с',
                    accessor: 'skippedLess30s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess30s')
                },
                {
                    Header: 'Пропущено <1м',
                    accessor: 'skippedLess1m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess1m')
                },
                {
                    Header: 'Пропущено <2м',
                    accessor: 'skippedLess2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedLess2m')
                },
                {
                    Header: 'Пропущено >2м',
                    accessor: 'skippedMore2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'skippedMore2m')
                }
            ]
        },
        {
            Header: 'Принято входящих вызовов',
            Footer: <></>,
            columns: [
                {
                    Header: 'Принято',
                    accessor: 'totalAccept',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'totalAccept')
                },
                {
                    Header: 'Принято <5с',
                    accessor: 'acceptLess5s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess5s')
                },
                {
                    Header: 'Принято <10с',
                    accessor: 'acceptLess10s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess10s')
                }
                ,
                {
                    Header: 'Принято <20с',
                    accessor: 'acceptLess20s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess20s')
                }
                ,
                {
                    Header: 'Принято <30с',
                    accessor: 'acceptLess30s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess30s')
                }
                ,
                {
                    Header: 'Принято <1m',
                    accessor: 'acceptLess1m',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess1m')
                }
                ,
                {
                    Header: 'Принято <2m',
                    accessor: 'acceptLess2m',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptLess2m')
                },
                {
                    Header: 'Принято >2м',
                    accessor: 'acceptMore2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info,'acceptMore2m')
                }
            ]
        },
        {
            Header: 'Временные показатели входящих вызовов',
            Footer: <></>,
            columns: [
                {
                    Header: 'Средняя длительность звонка',
                    accessor: 'avgCallDuration',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgCallDuration')
                },
                {
                    Header: 'Максимальная длительность звонка',
                    accessor: 'maxCallDuration',
                    Footer: (info: any) => useCalcTimeTotal(info, 'maxCallDuration')
                },
                {
                    Header: 'Среднее время ожидания утерянного звонка',
                    accessor: 'avgWaitingTimeLostCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgWaitingTimeLostCall')
                },
                {
                    Header: 'Максимальное время ожидания утерянного звонка',
                    accessor: 'maxWaitingTimeLostCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'maxWaitingTimeLostCall')
                },
                {
                    Header: 'Среднее время ожидания принятого звонка',
                    accessor: 'avgWaitingTimeReceivedCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgWaitingTimeReceivedCall')
                }
                ,
                {
                    Header: 'Максимальное время ожидания принятого звонка',
                    accessor: 'maxWaitingTimeReceivedCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'maxWaitingTimeReceivedCall')
                }
                ,
                {
                    Header: 'Среднее время разговора',
                    accessor: 'avgTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgTalkTime')
                },
                {
                    Header: 'Максимальное время разговора',
                    accessor: 'maxTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'maxTalkTime')
                }
            ]
        },
    ]
    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()

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

    return (
        <div className={s.queueReportWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"00:00"} style={{width: "95%"}}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection: "column", marginBottom: "15px"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"23:59"} style={{width: "95%"}}/>
                            </div>
                        </Form.Group>
                        <TabButton style={{marginTop: "0px"}} name={'Обновить'} onClick={() => {}}/>
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
                    <div className={s.pieContainer}>
                        <span>Кол-во принятых звонков по очередям</span>
                        <QueueReportPie/>
                    </div>
                    <div className={s.histogramContainer}>
                        <span>Все очереди</span>
                        <QueueReportHistogram/>
                    </div>
                </div>
                <div className={s.histogram}>
                    <Table data={queueReportData} columns={columns} pagination={true} width={"99vw"} footer/>
                </div>
            </div>
        </div>
    );
};

export default QueueReport;