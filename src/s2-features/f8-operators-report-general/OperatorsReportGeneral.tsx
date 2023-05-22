import React, {useState} from 'react';
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
                Header: 'Отедл',
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
                width: 130
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
                Header: 'Количество принятых входящих зконков',
                accessor: 'incomingCallsCount',
                width: 100
            },
            {
                Header: 'Количество сделаннх исходящих',
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
    debugger
    const navigate = useNavigate()

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
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Отдел</Form.Label>
                                <Form.Select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} style={{width: "250px", borderRadius: "0px"}}>
                                    <option value="">Все отделы</option>
                                    <option value="Начальник ЛКЦ">Начальник ЛКЦ</option>
                                    <option value="Зам. Начальника ЛКЦ">Зам. Начальника ЛКЦ</option>
                                    <option value="Инженеры по подготовке кадров">Инженеры по подготовке кадров</option>
                                    <option value="Инженеры по ТО">Инженеры по ТО</option>
                                    <option value="Специалисты по контролю качества">Специалисты по контролю качества</option>
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