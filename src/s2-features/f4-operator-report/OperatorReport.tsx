import React, {ChangeEvent, ReactComponentElement, useEffect, useState} from 'react';
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
import {StatusType} from "../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../common/components/Loader/Loader";
import ErrorWindow from "../../common/components/ErrorWindow/ErrorWindow";
import {
    fetchOperatorReportReferencesData
} from "../../s1-main/m2-bll/b7-operator-report-reducer/operatorReportReferences-reducer";


const OperatorReport = () => {
    const operatorReportData = useAppSelector(state => state.operatorReportData.data)
    const operatorsReferencesData = useAppSelector(state => state.operatorReportReferencesData.data.operators)
    const reasonsReferencesData = useAppSelector(state => state.operatorReportReferencesData.data.reasons)
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
    const [statusFilter, setStatusFilter] = useState<string>('');
    const [durationFilter, setDurationFilter] = useState<string>('');
    const [operatorFilter, setOperatorFilter] = useState<string>('');
    const [reasonFilter, setReasonFilter] = useState<string>('');
    const [reasonFilterKey, setReasonFilterKey] = useState<string>('');
    const [commentFilter, setCommentFilter] = useState<string>('');

    const [searchOperatorsResults, setSearchOperatorsResults] = useState<string[]>([])
    const [searchOperatorsResultsVisible, setSearchOperatorsResultsVisible] = useState<string>("")

    const [searchReasonsResults, setSearchReasonsResults] = useState<{ key: number, value: string }[]>([])
    const [searchReasonsResultsVisible, setSearchReasonsResultsVisible] = useState<string>("")


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
            reasonFilterKey,
            commentFilter
        ))
        dispatch(fetchOperatorReportReferencesData())
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
            reasonFilterKey,
            commentFilter
        ))
        dispatch(fetchOperatorReportReferencesData())
    }

    const handleOperatorsInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setOperatorFilter(value);
        setSearchOperatorsResultsVisible(value)


        // Фильтрация массива похожих ФИО
        if (operatorFilter.length > 1) {
            const filteredResults = operatorsReferencesData.filter((name) =>
                name.toLowerCase().includes(value.toLowerCase())
            );
            setSearchOperatorsResults(filteredResults);
        }
    };
    const handleReasonsInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setReasonFilter(value);
        setSearchReasonsResultsVisible(value)

        if (reasonFilter.length > 1) {
            const filteredResults = reasonsReferencesData.filter((reason) =>
                reason.value.toLowerCase().includes(value.toLowerCase())
            );
            setSearchReasonsResults(filteredResults);
        } else {
            setReasonFilterKey('')
        }
    };

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
                                <Form.Control value={dateStart} onChange={(e: any) => setDateStart(e.target.value)}
                                              type="date"/>
                                <Form.Control value={timeStart} onChange={(e: any) => setTimeStart(e.target.value)}
                                              type="time"/>

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
                                <Form.Control value={dateEnd} onChange={(e: any) => setDateEnd(e.target.value)}
                                              type="date"/>
                                <Form.Control value={timeStart} onChange={(e: any) => setTimeEnd(e.target.value)}
                                              type="time"/>
                            </Form.Group>
                            <Form.Group
                                style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                                <Form.Select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    style={{width: "75%"}}>
                                    <option value="">&lt;Все&gt;</option>
                                    <option value="0">Не авторизован</option>
                                    <option value="1">Свободен</option>
                                    <option value="2">Перерыв</option>
                                    <option value="3">Ушел</option>
                                    <option value="5">Занят</option>
                                    <option value="7">Без телефона</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                                <Form.Label style={{width: "20px", color: "white"}}>Длитель
                                    ность:      &gt;=</Form.Label>
                                <Form.Control value={durationFilter}
                                              onChange={(e: any) => setDurationFilter(e.target.value)}
                                              style={{width: "75%   ", height: "40px"}} type="number" placeholder="0"/>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={operatorFilter === "all" ? "" : operatorFilter}
                                              onChange={handleOperatorsInputChange}
                                              type="text"
                                              placeholder="Введите оператора"/>
                            </Form.Group>
                            {searchOperatorsResults?.length > 0 && searchOperatorsResultsVisible !== ""
                                ? <div className={s.operatorsSearchContainer}>

                                    {searchOperatorsResults?.map(i => <div onClick={() => {
                                        setOperatorFilter(i)
                                        setSearchOperatorsResultsVisible("")
                                    }}>{i}</div>)}

                                </div>
                                : <></>}

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={reasonFilter === "all" ? "" : reasonFilter}
                                              onChange={handleReasonsInputChange}
                                              type="text"
                                              placeholder="Введите причину"/>
                            </Form.Group>
                            {searchReasonsResults?.length > 0 && searchReasonsResultsVisible !== ""
                                ? <div className={s.operatorsSearchContainer}>

                                    {searchReasonsResults?.map(i => i.value === "Авто" || i.value === "Вход по умолчанию"
                                    || i.value === "Восстановлен перерыв после рестарта клиентского приложения" || i.value === "Авторизовался"
                                    || i.value === "Авторизация" || i.value === "Вход в СС" || i.value === ""
                                        ? <></>
                                        : <div onClick={() => {
                                            setSearchReasonsResultsVisible("");
                                            setReasonFilter(i.value)
                                            setReasonFilterKey(i.key.toString())
                                        }}>{i.value}</div>)}

                                </div>
                                : <></>}

                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={commentFilter === "all" ? "" : commentFilter}
                                              onChange={(e: any) => setCommentFilter(e.target.value)}
                                              type="text"
                                              placeholder="Введите комментарий"/>
                            </Form.Group>

                            <TabButton name={"Обновить"} onClick={onFetchDataHandler}/>
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
                {/*{renderComponent(
                    ,
                    status,
                    error
                )}*/}
                <Table data={operatorReportData} columns={columns} pagination={true} width={"100vw"} footer/>
            </div>
        </div>
    );
};

export default OperatorReport;