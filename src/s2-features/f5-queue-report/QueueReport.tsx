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

const columns = [
    {
        Header: 'Период',
        columns: [
            {
                Header: 'Начало периода',
                accessor: 'startPeriod',
                width: 130
            },
            {
                Header: 'Конец периода',
                accessor: 'endPeriod',
                width: 130
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
            ,
            {
                Header: 'Принято <20с',
                accessor: 'acceptLess20s',
                width: 90
            }
            ,
            {
                Header: 'Принято <30с',
                accessor: 'acceptLess30s',
                width: 90
            }
            ,
            {
                Header: 'Принято <1m',
                accessor: 'acceptLess1m',
                width: 90
            }
            ,
            {
                Header: 'Принято <2m',
                accessor: 'acceptLess2m',
                width: 90
            },
            {
                Header: 'Принято >2м',
                accessor: 'acceptMore2m',
                width: 100
            }
        ]
    },
    {
        Header: 'Временные показатели входящих вызовов',
        columns: [
            {
                Header: 'Средняя длительность звонка',
                accessor: 'avgCallDuration',
            },
            {
                Header: 'Максимальная длительность звонка',
                accessor: 'maxCallDuration',
            },
            {
                Header: 'Среднее время ожидания утерянного звонка',
                accessor: 'avgWaitingTimeLostCall',
            },
            {
                Header: 'Максимальное время ожидания утерянного звонка',
                accessor: 'maxWaitingTimeLostCall',
            },
            {
                Header: 'Среднее время ожидания принятого звонка',
                accessor: 'avgWaitingTimeReceivedCall',
            }
            ,
            {
                Header: 'Максимальное время ожидания принятого звонка',
                accessor: 'maxWaitingTimeReceivedCall',
            }
            ,
            {
                Header: 'Среднее время разговора',
                accessor: 'avgTalkTime',
            },
            {
                Header: 'Максимальное время разговора',
                accessor: 'maxTalkTime',
            }
        ]
    },
]

const QueueReport = () => {
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
                            style={{display: "flex", justifyContent: "flex-end", padding: "5px", marginLeft: "20px"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "250px"}}/>
                                <Form.Control type="time" defaultValue={"00:00"} style={{width: "250px"}}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", padding: "5px", marginLeft: "20px"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "250px"}}/>
                                <Form.Control type="time" defaultValue={"23:59"} style={{width: "250px"}}/>
                            </div>
                        </Form.Group>
                        <Accordion title={"Параметры"}>
                            <Form.Group
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    marginBottom: "10px"
                                }}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Тип</Form.Label>
                                <Form.Select defaultValue={"День"} style={{width: "250px", borderRadius: "0px"}}>
                                    <option value="Минута">Минута</option>
                                    <option value="Час">Час</option>
                                    <option value="День">День</option>
                                    <option value="Неделя">Неделя</option>
                                    <option value="Весь период">Весь период</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Шаг</Form.Label>
                                <Form.Control type="text" defaultValue={"1"}
                                              style={{width: "250px", borderRadius: "0px"}}/>

                            </Form.Group>
                        </Accordion>
                        <TabButton style={{marginTop: "0px"}} name={'Обновить'} onClick={() => {
                        }}/>
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
                    <Table data={queueReportData} columns={columns} pagination={true} width={"99vw"}/>
                </div>
            </div>
        </div>
    );
};

export default QueueReport;