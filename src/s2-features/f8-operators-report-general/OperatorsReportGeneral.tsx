import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import s from "./OperatorsReportGeneral.module.scss";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Accordion from "../../common/components/Accordion/Accordion";
import TabButton from "../../common/components/TabButton/TabButton";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import Table from "../../common/components/Table/Table";
import {operatorsReportGeneralData, OperatorsReportGeneralDataType} from "../../data/operatorsReportGeneralData";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";
import {useCalcNumTotal} from "../../common/hooks/useCalcNumTotal";
import {useScale} from "../../common/hooks/useScale";
import {useAppSelector} from "../../s1-main/m2-bll/store";


const OperatorsReportGeneral = () => {
    const scale = useScale()
    const operatorReportGeneralData = useAppSelector(state => state.operatorReportGeneralData.data)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [data, setData] = useState<OperatorsReportGeneralDataType[]>(operatorReportGeneralData)
    const navigate = useNavigate()
    const isAuth = useIsAuth()

    const columns = [
        {
            Header: 'Общая информация',
            Footer: <></>,
            columns: [
                {
                    Header: 'Оператор',
                    accessor: 'operator',
                    Footer: <>Total:</>,
                    width: 162.5 / scale
                },
                {
                    Header: 'Отдел',
                    accessor: 'department',
                    Footer: <></>,
                    width: 162.5 / scale
                },
            ]
        },
        {
            Header: 'Смена',
            Footer: <></>,
            columns: [
                {
                    Header: 'Время залогинивания',
                    accessor: 'loginTime',
                    Footer: <></>,
                    width: 187.5 / scale
                },
                {
                    Header: 'Время разлогинивания',
                    accessor: 'logoutTime',
                    Footer: <></>,
                    width: 162.5 / scale
                },
            ]
        },
        {
            Header: 'Общие показатели',
            Footer: <></>,
            columns: [
                {
                    Header: 'Суммарное время в логине',
                    accessor: 'totalLoginTime',
                    width: 125 / scale,
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalLoginTime')
                },
                {
                    Header: 'Количество принятых входящих звонков',
                    accessor: 'incomingCallsCount',
                    width: 125 / scale,
                    Footer: (info: any) => useCalcNumTotal(info, 'incomingCallsCount')
                },
                {
                    Header: 'Количество сделанных исходящих',
                    accessor: 'outgoingCallsCount',
                    width: 125 / scale,
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallsCount')

                },
                {
                    Header: 'Средняя длительность входящих',
                    accessor: 'avgDurationIncoming',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgDurationIncoming'),
                    width: 125 / scale
                },
                {
                    Header: 'Средняя длительность исходящих',
                    accessor: 'avgDurationOutgoing',
                    Footer: (info: any) => useCalcTimeTotal(info, 'avgDurationOutgoing'),
                    width: 125 / scale
                },
            ]
        },
        {
            Header: 'Время нахождения в статусах',
            Footer: <></>,
            columns: [
                {
                    Header: 'Разговор',
                    accessor: 'totalTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalTalkTime'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Свободен',
                    accessor: 'totalFreeTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalFreeTime'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Не готов',
                    accessor: 'totalNotReadyTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalNotReadyTime'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Занят',
                    accessor: 'totalBusyTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalBusyTime'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Входящий дозвон',
                    accessor: 'totalIncomingCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalIncomingCall'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Исходящий дозвон',
                    accessor: 'totalOutgoingCall',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalOutgoingCall'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Разлогинен',
                    accessor: 'totalLogoutTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'totalLogoutTime'),
                    width: 112.5 / scale
                }
            ]
        },
    ]
    const defaultColumnsSize = {
        size: 200,
        minSize: 400,
        maxSize: 4000,
    }

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
        const filteredData = operatorReportGeneralData.filter(item => item.department === selectedDepartment);
        if (selectedDepartment === '') {
            setData(operatorReportGeneralData);
        }else {
            setData(filteredData)
        }
    };


    return (
        <div className={s.operatorsReportGeneralWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection:"column"}}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"00:00"} style={{width: "95%"}}/>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection:"column"}}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"23:59"} style={{width: "95%"}}/>
                        </Form.Group>
                        <Accordion title={"Параметры"}>
                            <Form.Group
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    flexDirection: "column",
                                    marginBottom: "10px"
                                }}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Отдел:</Form.Label>
                                <Form.Select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} style={{width: "95%", borderRadius: "0px"}}>
                                    <option value="">Все отделы</option>
                                    <option value="Начальник ЛКЦ">Начальник ЛКЦ</option>
                                    <option value="Зам. Начальника ЛКЦ">Зам. Начальника ЛКЦ</option>
                                    <option value="Инженеры по подготовке кадров">Инженеры по подготовке кадров</option>
                                    <option value="Инженеры по ТО">Инженеры по ТО</option>
                                    <option value="Специалисты">Специалисты</option>
                                    <option value="Дежурные по выдаче справок (старшие)">Дежурные по выдаче справок (старшие)</option>
                                    <option value="Дежурные по выдаче справок">Дежурные по выдаче справок</option>
                                    <option value="Ведущий специалист">Ведущий специалист</option>
                                </Form.Select>
                            </Form.Group>
                        </Accordion>
                        <TabButton  style={{marginTop: "0px"}} name={'Обновить'} onClick={handleRefreshClick}/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.operatorsReportGeneralContainer}>
                <div className={s.operatorsReportGeneralHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по операторам (Общий)</span>
                </div>
                <Table data={data} defaultColumn={defaultColumnsSize} columns={columns} pagination={true} width={"100vw"} footer/>
            </div>
        </div>
    );
};

export default OperatorsReportGeneral;