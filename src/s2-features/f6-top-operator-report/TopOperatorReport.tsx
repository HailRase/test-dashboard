import React, {useEffect, useState} from 'react';
import s from "./TopOperatorReport.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Accordion from "../../common/components/Accordion/Accordion";
import TabButton from "../../common/components/TabButton/TabButton";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import Table from "../../common/components/Table/Table";
import TopOperatorReportPie from "./TopOperatorReportPie/TopOperatorReportPie";
import TopOperatorReportHistogram from "./TopOperatorReportHistogram/TopOperatorReportHistogram";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import {topOperatorReportData} from "../../data/topOperatorReportData";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {loginTC} from "../../s1-main/m2-bll/auth-reducer";
import useIsAuth from "../../common/hooks/useIsAuth";

const columns = [
    {
        Header: 'Начало периода',
        accessor: 'startPeriod',
    },
    {
        Header: 'Конец периода',
        accessor: 'endPeriod',
    },
    {
        Header: 'Оператор',
        accessor: 'operator',
        width: 300
    },
    {
        Header: 'Отдел',
        accessor: 'department',
    },
    {
        Header: 'Суммарное время в логине',
        accessor: 'totalTimeInLogin',
        Footer: (info: any) => {
            const total = React.useMemo(
                () =>
                    info.rows.reduce((sum: any, row: any) =>
                    {
                        const utcSeconds = new Date(`1970-01-01T0${row.values.totalTimeInLogin}Z`).getTime()
                        const newSum = utcSeconds + sum
                       return newSum
                    },
                        new Date(`1970-01-01T00:00:00Z`).getTime()

                    )
                ,
                [info.rows]
            )

            return <>Total: {new Date (total).toLocaleTimeString()}</>
        },
    },
    {
        Header: 'Количество принятых входящих звонков',
        accessor: 'receivedIncomingCallsCount',
        Footer: (info: any) => {
            // Only calculate total visits if rows change
            const total = React.useMemo(
                () =>
                    info.rows.reduce((sum: any, row: any) => row.values.receivedIncomingCallsCount + sum, 0),
                [info.rows]
            )

            return <>Total: {total}</>
        },
    },
    {
        Header: 'Количество пропущенных звонков',
        accessor: 'missedCallsCount',
        Footer: (info: any) => {
            // Only calculate total visits if rows change
            const total = React.useMemo(
                () =>
                    info.rows.reduce((sum: any, row: any) => row.values.missedCallsCount + sum, 0),
                [info.rows]
            )

            return <>Total: {total}</>
        },
    },
    {
        Header: 'Количество сделанных исходящих',
        accessor: 'outgoingCallsCount',
        Footer: (info: any) => {
            // Only calculate total visits if rows change
            const total = React.useMemo(
                () =>
                    info.rows.reduce((sum: any, row: any) => row.values.outgoingCallsCount + sum, 0),
                [info.rows]
            )

            return <>Total: {total}</>
        },
    }
]

const TopOperatorReport = () => {

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
                                <Form.Control type="datetime-local" defaultValue={dateNow} style={{width: "250px"}}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", padding: "5px", marginLeft: "20px"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="datetime-local" defaultValue={dateNow} style={{width: "250px"}}/>
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
                    <span>Отчёт по операторам</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.pieContainer}>
                        <span>ТОP 20 операторов по принятым звонкам</span>
                        <TopOperatorReportPie/>
                    </div>
                    <div className={s.histogramContainer}>
                        <span>Все операторы</span>
                        <TopOperatorReportHistogram/>
                    </div>
                </div>
                <div className={s.histogram}>
                    <Table data={topOperatorReportData} columns={columns} pagination={true} width={"99vw"}/>
                </div>
            </div>
        </div>
    );
};

export default TopOperatorReport;