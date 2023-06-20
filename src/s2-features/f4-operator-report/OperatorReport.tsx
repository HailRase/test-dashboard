import React, {ReactComponentElement, useEffect, useState} from 'react';
import s from "./OperatorReport.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import Table from "../../common/components/Table/Table";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import CustomTabs from "../../common/components/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import {Form} from "react-bootstrap";
import TabButton from "../../common/components/TabButton/TabButton";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useScale} from "../../common/hooks/useScale";
import {fetchOperatorReportData} from "../../s1-main/m2-bll/b7-operator-report-reducer/operatorReport-reducer";
import moment from "moment";
import {StatusType} from "../../s1-main/m2-bll/b2-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../common/components/Loader/Loader";
import ErrorWindow from "../../common/components/ErrorWindow/ErrorWindow";


const OperatorReport = () => {
    const operatorReportData = useAppSelector(state => state.operatorReportData.data)
    const status = useAppSelector(state => state.operatorReportData.status)
    const error = useAppSelector(state => state.operatorReportData.errorMessage)
    const scale = useScale()
    const columns = [
        {
            Header: 'Дата',
            accessor: 'date',
            Footer: <>Total:</>,
            width: 200 / scale
        },
        {
            Header: 'Оператор',
            accessor: 'operator',
            Footer: <></>,
            width: 350 / scale
        },
        {
            Header: 'Статус',
            accessor: 'status',
            Footer: <></>,
            width: 300 / scale
        },
        {
            Header: 'Длительность',
            accessor: 'duration',
            Footer: (info: any) => useCalcTimeTotal(info, 'duration'),
            width: 200 / scale
        },
        {
            Header: 'Причина',
            accessor: 'reason',
            Footer: <></>,
            width: 350 / scale
        },
        {
            Header: 'Комментарий',
            accessor: 'comment',
            Footer: <></>,
            width: 500 / scale
        }
    ]

    const dispatch = useDispatch<any>()
    const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"))
    const [timeStart, setTimeStart] = useState("00:00")
    const [dateEnd, setDateEnd] = useState(moment(moment()).add(1, 'day').format('YYYY-MM-DD'))
    const [timeEnd, setTimeEnd] = useState("00:00")
    const [statusFilter, setStatusFilter] = useState('all');
    const [durationFilter, setDurationFilter] = useState(0);
    const [operatorFilter, setOperatorFilter] = useState('all');
    const [reasonFilter, setReasonFilter] = useState('all');
    const [commentFilter, setCommentFilter] = useState('all');

    const [isActiveSideBar, setIsActiveSideBar] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()


    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchOperatorReportData(
            dateStart,
            timeStart,
            dateEnd,
            timeEnd,
            statusFilter,
            durationFilter,
            operatorFilter,
            reasonFilter,
            commentFilter
        ))
    }, []);

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActiveSideBar(true)
    }
    const onCloseSidebar = () => {
        setIsActiveSideBar(false)
    }

    const onFetchDataHandler = () => {
        dispatch(fetchOperatorReportData(
            dateStart,
            timeStart,
            dateEnd,
            timeEnd,
            statusFilter,
            durationFilter,
            operatorFilter,
            reasonFilter,
            commentFilter
        ))
    }

    const renderComponent = (component: ReactComponentElement <any>, status: StatusType, error: string) => {
        if (status === "loaded"){
            return component
        } else if (status === "loading"){
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
        <div className={s.operatorReportWrapper}>
            <Sidebar isActive={isActiveSideBar}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <CustomTabs param={true} disabledPeriod>
                            <Form.Group
                                style={{display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                                <Form.Control value={dateStart} onChange={(e: any) => setDateStart(e.target.value)} type="date"/>
                                <Form.Control value={timeStart} onChange={(e: any) => setTimeStart(e.target.value)} type="time"/>

                            </Form.Group>
                            <Form.Group
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    flexDirection: "column",
                                    marginBottom: "20px"
                                }}
                            >
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                                <Form.Control value={dateEnd} onChange={(e: any) => setDateEnd(e.target.value)} type="date"/>
                                <Form.Control value={timeStart} onChange={(e: any) => setTimeEnd(e.target.value)} type="time"/>
                            </Form.Group>
                            <Form.Group
                                style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                                <Form.Select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    style={{width: "75%"}}>

                                    <option value="all">&lt;Все&gt;</option>
                                    <option value="Предварительная обработка">Предварительная обработка</option>
                                    <option value="Ожидание ответа абонента">Ожидание ответа абонента</option>
                                    <option value="Обратный вызов">Обратный вызов</option>
                                    <option value="Разговор с абонентом">Разговор с абонентом</option>
                                    <option value="Разговор между операторами">Разговор между операторами</option>
                                    <option value="Разговор по задаче">Разговор по задаче</option>
                                    <option value="Поствызывная обработка">Поствызывная обработка</option>
                                    <option value="Прочие разговоры">Прочие разговоры</option>
                                    <option value="Перерыв">Перерыв</option>
                                    <option value="Готов">Готов</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                                <Form.Label style={{width: "20px", color: "white"}}>Длитель
                                    ность:      &gt;=</Form.Label>
                                <Form.Control value={durationFilter} onChange={(e: any) => setDurationFilter(e.target.value)}
                                              style={{width: "75%   ", height: "40px"}} type="text" placeholder="0"/>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={operatorFilter === "all" ? "" : operatorFilter}
                                              onChange={(e: any) => setOperatorFilter(e.target.value)}
                                              type="text"
                                              placeholder="Введите оператора"/>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={reasonFilter  === "all" ? "" :reasonFilter}
                                              onChange={(e: any) => setReasonFilter(e.target.value)}
                                              type="text"
                                              placeholder="Введите причину"/>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={commentFilter  === "all" ? "" :commentFilter}
                                              onChange={(e: any) => setCommentFilter(e.target.value)}
                                              type="text"
                                              placeholder="Введите комментарий"/>
                            </Form.Group>

                            <TabButton name={"Обновить"} onClick={onFetchDataHandler} disabled={status === "loading"}/>
                        </CustomTabs>
                    </div>
                </div>
            </Sidebar>
            <div className={s.operatorReportContainer}>
                <div className={s.operatorReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Статистика по операторам</span>
                </div>
                {renderComponent(
                    <Table data={operatorReportData} columns={columns} pagination={true} width={"100vw"} footer/>,
                    status,
                    error
                )}
            </div>
        </div>
    );
};

export default OperatorReport;