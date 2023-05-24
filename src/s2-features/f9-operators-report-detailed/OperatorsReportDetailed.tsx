import React, {useEffect, useState} from 'react';
import {operatorsReportGeneralData, OperatorsReportGeneralDataType} from "../../data/operatorsReportGeneralData";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import s from "./OperatorsReportDetailed.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Accordion from "../../common/components/Accordion/Accordion";
import TabButton from "../../common/components/TabButton/TabButton";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import Table from "../../common/components/Table/Table";
import {operatorsReportDetailedData, OperatorsReportDetailedDataType} from "../../data/operatorsReportDetailedData";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {loginTC} from "../../s1-main/m2-bll/auth-reducer";
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
        Header: 'Общая информация',
        columns: [
            {
                Header: 'Оператор',
                accessor: 'operator',
                width: 130
            },
            {
                Header: 'Номер',
                accessor: 'number',
                width: 130
            },
            {
                Header: 'Отдел',
                accessor: 'department',
                width: 130
            },
        ]
    },
    {
        Header: 'Показатели',
        columns: [
            {
                Header: '% не отвеченных',
                accessor: 'percentUnanswered',
                width: 100
            },
            {
                Header: '% отвеченных',
                accessor: 'percentAnswered',
                width: 100
            },
            {
                Header: 'Уровень обслуживания до 5 сек',
                accessor: 'serviceLevelUpTo5Sec',
                width: 100
            },
            {
                Header: 'Уровень обслуживания до 10 сек',
                accessor: 'serviceLevelUpTo10Sec',
                width: 100
            },
        ]
    },
    {
        Header: 'Обработка входящих вызовов',
        columns: [
            {
                Header: 'Принято',
                accessor: 'accept',
                width: 90
            },
            {
                Header: 'Принято <5',
                accessor: 'acceptLess5',
                width: 90
            },
            {
                Header: 'Принято <10',
                accessor: 'acceptLess10',
                width: 90
            },
            {
                Header: 'Принято <15',
                accessor: 'acceptLess15',
                width: 90
            },
            {
                Header: 'Принято >15',
                accessor: 'acceptMore15',
                width: 90
            },
            {
                Header: 'Отменено',
                accessor: 'canceled',
                width: 90
            },
            {
                Header: 'Пропущено',
                accessor: 'skipped',
                width: 90
            },
            {
                Header: 'Поступило',
                accessor: 'received',
                width: 90
            },
        ]
    },
    {
        Header: 'Обработка исходящих вызовов',
        columns: [
            {
                Header: 'Всего',
                accessor: 'outgoingCallHandlingTotal',
                width: 90
            },
            {
                Header: 'Отвечено',
                accessor: 'outgoingCallHandlingAnswered',
                width: 90
            },
            {
                Header: 'Неотвечен',
                accessor: 'outgoingCallHandlingNotAnswered',
                width: 90
            },
            {
                Header: 'Отменен',
                accessor: 'outgoingCallHandlingCanceled',
                width: 90
            },
            {
                Header: 'Занято',
                accessor: 'outgoingCallHandlingBusy',
                width: 90
            },
            {
                Header: 'Недоступно',
                accessor: 'outgoingCallHandlingNotAvailable',
                width: 90
            },
        ]
    },
    {
        Header: 'Обработка внутренних звонков',
        columns: [
            {
                Header: 'Всего',
                accessor: 'handlingInternalCallsTotal',
                width: 90
            },
            {
                Header: 'Отвечено',
                accessor: 'handlingInternalCallsAnswered',
                width: 90
            },
            {
                Header: 'Неотвечен',
                accessor: 'handlingInternalCallsNotAnswered',
                width: 90
            },
            {
                Header: 'Отменен',
                accessor: 'handlingInternalCallsCanceled',
                width: 90
            },
            {
                Header: 'Занято',
                accessor: 'handlingInternalCallsBusy',
                width: 90
            },
            {
                Header: 'Недоступно',
                accessor: 'handlingInternalCallsNotAvailable',
                width: 90
            },
        ]
    },
    {
        Header: 'Входящие звонки',
        columns: [
            {
                Header: 'Сред Разговор',
                accessor: 'incomingCallsAvgTalkTime',
                width: 90
            },
            {
                Header: 'Сред Удержание',
                accessor: 'incomingCallsAvgHoldTime',
                width: 90
            },
            {
                Header: 'Сред Дозвон',
                accessor: 'incomingCallsAvgCallingTime',
                width: 90
            },
        ]
    },
    {
        Header: 'Исходящие звонки',
        columns: [
            {
                Header: 'Сред Разговор',
                accessor: 'outgoingCallsAvgTalkTime',
                width: 90
            },
            {
                Header: 'Сред Удержание',
                accessor: 'outgoingCallsAvgHoldTime',
                width: 90
            },
            {
                Header: 'Сред Дозвон',
                accessor: 'outgoingCallsAvgCallingTime',
                width: 90
            },
        ]
    },
    {
        Header: 'Внутренние звонки',
        columns: [
            {
                Header: 'Сред Разговор',
                accessor: 'internalCallsAvgTalkTime',
                width: 90
            },
            {
                Header: 'Сред Удержание',
                accessor: 'internalCallsAvgHoldTime',
                width: 90
            },
            {
                Header: 'Сред Дозвон',
                accessor: 'internalCallsAvgCallingTime',
                width: 90
            },
        ]
    },
]
const OperatorsReportDetailed = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [data, setData] = useState<OperatorsReportDetailedDataType[]>(operatorsReportDetailedData)
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
    const handleRefreshClick = () => {
        const filteredData = operatorsReportDetailedData.filter(item => item.department === selectedDepartment);
        if (selectedDepartment === '') {
            setData(operatorsReportDetailedData);
        }else {
            setData(filteredData)
        }
    };


    return (
        <div className={s.operatorsReportDetailedWrapper}>
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
            <div className={s.operatorsReportDetailedContainer}>
                <div className={s.operatorsReportDetailedHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по операторам (Детальный)</span>
                </div>
                <Table data={operatorsReportDetailedData} columns={columns} pagination={true} width={"100vw"}/>
            </div>
        </div>
    );
};

export default OperatorsReportDetailed;