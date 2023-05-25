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
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {loginTC} from "../../s1-main/m2-bll/auth-reducer";
import useIsAuth from "../../common/hooks/useIsAuth";

const columns = [
    {
        Header: 'Общая информация',
        columns: [
            {
                Header: 'Оператор',
                accessor: 'operator',
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
        Header: 'Смена',
        columns: [
            {
                Header: 'Время залогинивания',
                accessor: 'loginTime',
                width: 150
            },
            {
                Header: 'Время разлогинивания',
                accessor: 'logoutTime',
                width: 130
            },
        ]
    },
    {
        Header: 'Общие показатели',
        columns: [
            {
                Header: 'Суммарное время в логине',
                accessor: 'totalLoginTime',
                width: 100
            },
            {
                Header: 'Количество принятых входящих звонков',
                accessor: 'incomingCallsCount',
                width: 100,
                Footer: (info: any) => {
                    const total = React.useMemo(
                        () =>
                            info.rows.reduce((sum: number, row: any) => row.values.incomingCallsCount + sum, 0),
                        [info.rows]
                    )

                    return <>Total: {total}</>
                },
            },
            {
                Header: 'Количество сделанных исходящих',
                accessor: 'outgoingCallsCount',
                width: 100
            },
            {
                Header: 'Средняя длительность входящих',
                accessor: 'avgDurationIncoming',
                width: 100
            },
            {
                Header: 'Средняя длительность исходящих',
                accessor: 'avgDurationOutgoing',
                width: 100
            },
        ]
    },
    {
        Header: 'Время нахождения в статусах',
        columns: [
            {
                Header: 'Разговор',
                accessor: 'totalTalkTime',
                width: 90
            },
            {
                Header: 'Свободен',
                accessor: 'totalFreeTime',
                width: 90
            },
            {
                Header: 'Не готов',
                accessor: 'totalNotReadyTime',
                width: 90
            },
            {
                Header: 'Занят',
                accessor: 'totalBusyTime',
                width: 90
            },
            {
                Header: 'Входящий дозвон',
                accessor: 'totalIncomingCall',
                width: 90
            },
            {
                Header: 'Исходящий дозвон',
                accessor: 'totalOutgoingCall',
                width: 90
            },
            {
                Header: 'Разлогинен',
                accessor: 'totalLogoutTime',
                width: 90
            }
        ]
    },
]
const OperatorsReportGeneral = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [data, setData] = useState<OperatorsReportGeneralDataType[]>(operatorsReportGeneralData)
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
        const filteredData = operatorsReportGeneralData.filter(item => item.department === selectedDepartment);
        if (selectedDepartment === '') {
            setData(operatorsReportGeneralData);
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
                <Table data={data} columns={columns} pagination={true} width={"100vw"}/>
            </div>
        </div>
    );
};

export default OperatorsReportGeneral;