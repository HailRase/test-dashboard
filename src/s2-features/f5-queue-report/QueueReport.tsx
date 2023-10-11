import React, {ReactComponentElement, useEffect, useState} from 'react';
import s from './QueueReport.module.scss'
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import Table from "../../common/components/Table/Table";
import QueueReportHistogram from "./QueueReportHistogram/QueueReportHistogram";
import Form from "react-bootstrap/Form";
import TabButton from "../../common/components/TabButton/TabButton";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcNumTotal} from "../../common/hooks/useCalcNumTotal";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import moment from "moment";
import {fetchQueueReportTableData} from "../../s1-main/m2-bll/b5-queue-report-reducer/queueReportTable-reducer";
import {useDispatch} from "react-redux";
import Loader from "../../common/components/Loader/Loader";
import ErrorWindow from "../../common/components/ErrorWindow/ErrorWindow";
import {StatusType} from "../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import {fetchQueueReportPieData} from "../../s1-main/m2-bll/b5-queue-report-reducer/queueReportPie-reducer";
import {fetchQueueReportHistogramData} from "../../s1-main/m2-bll/b5-queue-report-reducer/queueReportHistogram-reducer";
import TestDoublePie from "../f2-monitoring-cc/realTime/TestDoublePie";
import {fetchQueueReportData} from "../../s1-main/m2-bll/b5-queue-report-reducer/queueReport-reducer";


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
                    Footer: (info: any) => useCalcNumTotal(info, 'totalCall'),
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
                    Footer: <></>
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
                    Footer: (info: any) => useCalcNumTotal(info, 'totalSkipped')
                },
                {
                    Header: 'Пропущено <5с',
                    accessor: 'skippedLess5s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess5s')
                },
                {
                    Header: 'Пропущено <10с',
                    accessor: 'skippedLess10s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess10s')
                },
                {
                    Header: 'Пропущено <20с',
                    accessor: 'skippedLess20s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess20s')
                },
                {
                    Header: 'Пропущено <30с',
                    accessor: 'skippedLess30s',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess30s')
                },
                {
                    Header: 'Пропущено <1м',
                    accessor: 'skippedLess1m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess1m')
                },
                {
                    Header: 'Пропущено <2м',
                    accessor: 'skippedLess2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedLess2m')
                },
                {
                    Header: 'Пропущено >2м',
                    accessor: 'skippedMore2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'skippedMore2m')
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
                    Footer: (info: any) => useCalcNumTotal(info, 'totalAccept')
                },
                {
                    Header: 'Принято <5с',
                    accessor: 'acceptLess5s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess5s')
                },
                {
                    Header: 'Принято <10с',
                    accessor: 'acceptLess10s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess10s')
                }
                ,
                {
                    Header: 'Принято <20с',
                    accessor: 'acceptLess20s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess20s')
                }
                ,
                {
                    Header: 'Принято <30с',
                    accessor: 'acceptLess30s',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess30s')
                }
                ,
                {
                    Header: 'Принято <1m',
                    accessor: 'acceptLess1m',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess1m')
                }
                ,
                {
                    Header: 'Принято <2m',
                    accessor: 'acceptLess2m',
                    width: 90,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess2m')
                },
                {
                    Header: 'Принято >2м',
                    accessor: 'acceptMore2m',
                    width: 100,
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptMore2m')
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
    const queueReportTableData = useAppSelector(state => state.queueReportData.data.table)
    const queueReportHistogramData = useAppSelector(state => state.queueReportData.data.schema)
    const queueReportPieData = useAppSelector(state => state.queueReportData.data.providers)
    const queueReportPieTotalData = useAppSelector(state => state.queueReportData.data.total)
    const queueReportStatus = useAppSelector( state => state.queueReportData.status)
    const queueReportError = useAppSelector( state => state.queueReportData.errorMessage)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"))
    const [timeStart, setTimeStart] = useState("00:00")
    const [dateEnd, setDateEnd] = useState(moment().add(1, "day").format("YYYY-MM-DD"))
    const [timeEnd, setTimeEnd] = useState("00:00")
    const navigate = useNavigate()
    const dispatch = useDispatch<any>()
    const isAuth = useIsAuth()
    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchQueueReportData(dateStart, timeStart, dateEnd, timeEnd))
    }, [])

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }
    const onDateStartChangeHandler = (e: any) => {
        setDateStart(e.currentTarget.value)
    }
    const onTimeStartChangeHandler = (e: any) => {
        setTimeStart(e.currentTarget.value)
    }
    const onDateEndChangeHandler = (e: any) => {
        setDateEnd(e.currentTarget.value)
    }
    const onTimeEndChangeHandler = (e: any) => {
        setTimeEnd(e.currentTarget.value)
    }
    const onLoadDataHandler = () => {
        dispatch(fetchQueueReportData(dateStart, timeStart, dateEnd, timeEnd))
    }

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
                                <Form.Control type="date" defaultValue={dateStart} style={{width: "95%"}}
                                              onChange={onDateStartChangeHandler}/>
                                <Form.Control type="time" defaultValue={timeStart} style={{width: "95%"}}
                                              onChange={onTimeStartChangeHandler}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                                marginBottom: "15px"
                            }}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateEnd} style={{width: "95%"}}
                                              onChange={onDateEndChangeHandler}/>
                                <Form.Control type="time" defaultValue={timeEnd} style={{width: "95%"}}
                                              onChange={onTimeEndChangeHandler}/>
                            </div>
                        </Form.Group>
                        <TabButton style={{marginTop: "0px"}} name={'Обновить'} onClick={onLoadDataHandler}/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.queueReportContainer}>
                <div className={s.queueReportHeader}>

                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по очередям</span>
                </div>
                {renderComponent(
                    <div>
                        <div className={s.callAndOperatorRating}>
                            <div className={s.pieContainer}>

                                <span>Кол-во принятых звонков по очередям</span>
                                <TestDoublePie chartData={queueReportPieData} chartData1={queueReportPieTotalData}
                                               height={"45%"}/>,
                            </div>
                            <div className={s.histogramContainer}>
                                <span>Все очереди</span>
                                <QueueReportHistogram data={queueReportHistogramData}/>
                            </div>
                        </div>
                        <div className={s.histogram}>
                            <Table data={queueReportTableData} columns={columns} pagination={true} width={"99vw"}
                                   footer/>
                        </div>
                    </div>,
                    queueReportStatus,
                    queueReportError
                )}
            </div>
        </div>
    );
};

export default QueueReport;