import React, {ChangeEvent, ReactComponentElement, useEffect, useState} from 'react';
import s from './CallReport.module.scss'
import Table from "../../common/components/Table/Table";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import {PATH} from "../../common/routes/routes";
import CustomTabs from "../../common/components/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import {Form} from "react-bootstrap";
import TabButton from "../../common/components/TabButton/TabButton";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import moment from "moment/moment";
import {useDispatch} from "react-redux";
import {StatusType} from "../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../common/components/Loader/Loader";
import ErrorWindow from "../../common/components/ErrorWindow/ErrorWindow";
import {fetchCallReportTableData} from "../../s1-main/m2-bll/b6-call-report-reducer/callReport-reducer";


const columns = [
    {
        Header: 'Даты',
        Footer: <></>,
        columns: [
            {
                Header: 'Начало',
                accessor: 'dateStart',
                Footer: <>Total:</>,
            },
            {
                Header: 'Завершение',
                accessor: 'dateEnd',
                Footer: <></>,
            },
        ]
    },
    {
        Header: 'Контактные номера',
        Footer: <></>,
        columns: [
            {
                Header: 'Инициатор',
                accessor: 'initiator',
                Footer: <></>,
            },
            {
                Header: 'Получатель',
                accessor: 'recipient',
                Footer: <></>,
            },
        ]
    },
    {
        Header: 'Основная информация',
        Footer: <></>,
        columns: [
            {
                Header: 'Направление',
                accessor: 'direction',
                Footer: <></>,
            },
            {
                Header: 'Статус',
                accessor: 'status',
                Footer: <></>,
            },
            {
                Header: 'Тип',
                accessor: 'type',
                Footer: <></>,
            },
            {
                Header: 'Очередь',
                accessor: 'queue',
                Footer: <></>,
            }
        ]
    },
    {
        Header: 'Время',
        Footer: <></>,
        columns: [
            {
                Header: 'Общее время',
                accessor: 'totalTime',
                Footer: (info: any) => useCalcTimeTotal(info, 'totalTime'),
            },
            {
                Header: 'Время разговора',
                accessor: 'talkTime',
                Footer: (info: any) => useCalcTimeTotal(info, 'talkTime'),
            },
            {
                Header: 'Время соединения',
                accessor: 'connectionTime',
                Footer: (info: any) => useCalcTimeTotal(info, 'connectionTime'),
            },
            {
                Header: 'Время на удержании',
                accessor: 'holdTime',
                Footer: (info: any) => useCalcTimeTotal(info, 'holdTime'),
            },
            {
                Header: 'Время в очереди',
                accessor: 'queueTime',
                Footer: (info: any) => useCalcTimeTotal(info, 'queueTime'),
            },
        ]
    },
    {
        Header: 'Контакты в CallWay',
        Footer: <></>,
        columns: [
            {
                Header: 'Контакт инициатора',
                accessor: 'initiatorContact',
                Footer: <></>,
            },
            {
                Header: 'контакт получателя',
                accessor: 'recipientContact',
                Footer: <></>,
            },
            {
                Header: 'Оператор',
                accessor: 'operator',
                Footer: <></>,
            }
        ]
    },
    {
        Header: 'Распределение одного звонка',
        Footer: <></>,
        columns: [
            {
                Header: 'Был на очередях',
                accessor: 'wasOnQueue',
                Footer: <></>,
            },
            {
                Header: 'Был на операторах',
                accessor: 'wasOnOperators',
                Footer: <></>,
            }
        ]
    },
]

const CallReport = () => {

    const callReportData = useAppSelector(state => state.callReportData.data)
    const callReportStatus = useAppSelector(state => state.callReportData.status)
    const callReportError = useAppSelector(state => state.callReportData.errorMessage)
    const [state, seState] = useState(callReportData)

    const [statusFilter, setStatusFilter] = useState('');
    const [directionFilter, setDirectionFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [queueFilter, setQueueFilter] = useState('');
    const [initiatorFilter, setInitiatorFilter] = useState('');
    const [operatorFilter, setOperatorFilter] = useState('');
    const [contactFilter, setContactFilter] = useState('');


    const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"))
    const [timeStart, setTimeStart] = useState("00:00")
    const [dateEnd, setDateEnd] = useState(moment().format("YYYY-MM-DD"))
    const [timeEnd, setTimeEnd] = useState("23:59")
    const [fromDate, setFromDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toDate, setToDate] = useState('')
    const [toTime, setToTime] = useState('')

    const [isActiveSideBar, setIsActiveSideBar] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (!isAuth) navigate('/')
    },[])
    useEffect(()=> {
        dispatch(fetchCallReportTableData(dateStart, timeStart, dateEnd, timeEnd))
    }, [])
    const onChangeSelectType = (value: ChangeEvent<HTMLSelectElement>) => {
        if (value) {
            setTypeFilter(value.target.value)
        }
    }
    const onChangeSelectDirection = (value: ChangeEvent<HTMLSelectElement>) => {
        if (value) {
            setDirectionFilter(value.target.value)
        }
    }
    const onChangeSelectStatus = (value: ChangeEvent<HTMLSelectElement>) => {
        if (value) {
            setStatusFilter(value.target.value)
        }
    }
    const onChangeSelectQueue = (value: ChangeEvent<HTMLSelectElement>) => {
        if (value) {
            setQueueFilter(value.target.value)
        }
    }
    const onChangeInputContact = (value: ChangeEvent<HTMLInputElement>) => {
        if (value) {
            setContactFilter(value.target.value)
        }
    }
    const onChangeInputOperator = (value: ChangeEvent<HTMLInputElement>) => {
        if (value) {
            setOperatorFilter(value.target.value)
        }
    }
    const onChangeInputInitiator = (value: ChangeEvent<HTMLInputElement>) => {
        if (value) {
            setInitiatorFilter(value.target.value)
        }
    }

    const onChangeFromDate = (date: ChangeEvent<HTMLInputElement>) => {
        setFromDate(date.target.value)
    }
    const onChangeFromTime = (time: ChangeEvent<HTMLInputElement>) => {
        setFromTime(time.target.value)
    }
    const onChangeToDate = (date: ChangeEvent<HTMLInputElement>) => {
        setToDate(date.target.value)
    }
    const onChangeToTime = (time: ChangeEvent<HTMLInputElement>) => {
        setToTime(time.target.value)
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

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActiveSideBar(true)
    }
    const onCloseSidebar = () => {
        setIsActiveSideBar(false)
    }
    const onLoadData = () => {
        dispatch(fetchCallReportTableData(dateStart, timeStart, dateEnd, timeEnd))
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
        <div className={s.callReportWrapper}>
            <Sidebar isActive={isActiveSideBar}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <CustomTabs param={true}
                                disabledPeriod
                                fromDate={fromDate}
                                fromTime={fromTime}
                                toDate={toDate}
                                toTime={toTime}
                                onFromDateChange={onChangeFromDate}
                                onFromTimeChange={onChangeFromTime}
                                onToDateChange={onChangeToDate}
                                onToTimeChange={onChangeToTime}
                    >

                            <Form.Group
                                style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                                <div>
                                    <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                                </div>
                                <div>
                                    <Form.Control type="date" defaultValue={dateStart} style={{width: "100%"}}
                                                  onChange={onDateStartChangeHandler}/>
                                    <Form.Control type="time" defaultValue={timeStart} style={{width: "100%"}}
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
                                    <Form.Control type="date" defaultValue={dateEnd} style={{width: "100%"}}
                                                  onChange={onDateEndChangeHandler}/>
                                    <Form.Control type="time" defaultValue={timeEnd} style={{width: "100%"}}
                                                  onChange={onTimeEndChangeHandler}/>
                                </div>
                            </Form.Group>

                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control
                                onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputInitiator(value)}
                                value={initiatorFilter}
                                type="text"
                                placeholder="Введите номер"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control
                                onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputOperator(value)}
                                value={operatorFilter}
                                type="text"
                                placeholder="Введите оператора"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control
                                onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputContact(value)}
                                value={contactFilter}
                                type="text"
                                placeholder="Введите контакт"/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}} column={true}>Очередь: </Form.Label>
                            <Form.Select value={queueFilter} onChange={(value) => onChangeSelectQueue(value)}
                                         style={{width: "75%"}}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="105 GSM">105 GSM</option>
                                <option value="105 Beltelecom">105 Beltelecom</option>
                                <option value="151 Beltelecom">151 Beltelecom</option>
                                <option value="Видеотерминалы">Видеотерминалы</option>
                                <option value="39-25-47">39-25-47</option>
                                <option value="Проблемные и VIP">Проблемные и VIP</option>
                                <option value="GSM">GSM</option>
                                <option value="39-48-75">39-48-75</option>
                                <option value="39-20-30">39-20-30</option>
                                <option value="151 GSM">151 GSM</option>
                                <option value="151 Other">151 Other</option>
                                <option value="105 Other">105 Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                            <Form.Label style={{width: "20px", color: "white"}}>Время:      &gt;</Form.Label>
                            <Form.Control style={{width: "75%", height: "40px"}} type="text" placeholder="0"/>
                        </Form.Group>
                        <Form.Group style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}}>Тип: </Form.Label>
                            <Form.Select
                                style={{width: "80%"}}
                                value={typeFilter}
                                onChange={(value) => onChangeSelectType(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Обычный">Обычный</option>
                                <option value="Липкость">Липкость</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                            <Form.Label style={{width: "20px", color: "white"}}>Напра вление: </Form.Label>
                            <Form.Select
                                value={directionFilter}
                                style={{width: "75%", height: "40px"}}
                                onChange={(value) => onChangeSelectDirection(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Входящий">Входящий</option>
                                <option value="Исходящий">Исходящий</option>
                                <option value="Внутренний">Внутренний</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                            <Form.Select
                                value={statusFilter}
                                style={{width: "75%"}}
                                onChange={(value) => onChangeSelectStatus(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Отвечен">Отвечен</option>
                                <option value="Занят">Занят</option>
                                <option value="Отменен">Отменен</option>
                                <option value="Недоступно">Недоступно</option>
                                <option value="Не отвечен">Не отвечен</option>
                            </Form.Select>
                        </Form.Group>
                        <TabButton name={"Обновить"} onClick={onLoadData}/>
                    </CustomTabs>

                </div>
            </Sidebar>
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Статистика по звонкам</span>
                </div>
                {renderComponent(
                    <Table data={callReportData} columns={columns} pagination={true} footer/>,
                    callReportStatus,
                    callReportError,
                )}
            </div>
        </div>
    );
};

export default CallReport;