import React, {ChangeEvent, useState} from 'react';
import s from './CallReport.module.scss'
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../common/Sidebar/Sidebar";
import {callReportData} from "../../data/callReportData";
import {PATH} from "../../common/routes/routes";
import CustomTabs from "../../common/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/OptionIcon/OptionIcon";
import HomeIcon from "../../common/HomeIcon/HomeIcon";
import {Form} from "react-bootstrap";
import TabButton from "../../common/TabButton/TabButton";


const columns = [
    {
        Header: 'Даты',
        columns: [
            {
                Header: 'Начало',
                accessor: 'dateStart'
            },
            {
                Header: 'Завершение',
                accessor: 'dateEnd',
            },
        ]
    },
    {
        Header: 'Контактные номера',
        columns: [
            {
                Header: 'Инициатор',
                accessor: 'initiator',
            },
            {
                Header: 'Получатель',
                accessor: 'recipient',
            },
        ]
    },
    {
        Header: 'Основная информация',
        columns: [
            {
                Header: 'Направление',
                accessor: 'direction',
            },
            {
                Header: 'Статус',
                accessor: 'status',
            },
            {
                Header: 'Тип',
                accessor: 'type',
            },
            {
                Header: 'Очередь',
                accessor: 'queue',
            }
        ]
    },
    {
        Header: 'Время',
        columns: [
            {
                Header: 'Общее время',
                accessor: 'totalTime',
            },
            {
                Header: 'Время разговора',
                accessor: 'talkTime',
            },
            {
                Header: 'Время соединения',
                accessor: 'connectionTime',
            },
            {
                Header: 'Время на удержании',
                accessor: 'holdTime',
            },
            {
                Header: 'Время в очереди',
                accessor: 'queueTime',
            },
        ]
    },
    {
        Header: 'Контакты в CallWay',
        columns: [
            {
                Header: 'Контакт инициатора',
                accessor: 'initiatorContact',
            },
            {
                Header: 'контакт получателя',
                accessor: 'recipientContact',
            },
            {
                Header: 'Оператор',
                accessor: 'operator',
            }
        ]
    },
    {
        Header: 'Распределение одного звонка',
        columns: [
            {
                Header: 'Был на очередях',
                accessor: 'wasOnQueue',
            },
            {
                Header: 'Был на операторах',
                accessor: 'wasOnOperators',
            }
        ]
    },
]
const defaultColumn = {
    minWidth: 20,
    width: 120,
    maxWidth: 300,
}

const CallReport = () => {


    const [state, seState] = useState(callReportData)
    const [statusFilter, setStatusFilter] = useState('');
    const [directionFilter, setDirectionFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [queueFilter, setQueueFilter] = useState('');
    const [initiatorFilter, setInitiatorFilter] = useState('');
    const [operatorFilter, setOperatorFilter] = useState('');
    const [contactFilter, setContactFilter] = useState('');
    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()


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


    const filteredData = state.filter((item) =>
        item.status.includes(statusFilter) &&
        item.direction.includes(directionFilter) &&
        item.type.includes(typeFilter) &&
        item.queue.includes(queueFilter) &&
        item.initiator.toString().includes(initiatorFilter) &&
        item.operator.includes(operatorFilter) &&
        (item.initiatorContact.includes(contactFilter) || item.recipientContact.includes(contactFilter))
    );


    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }



    /*const filterData = () => {
        const filtered = callReportData.filter((item) => {
            if (selectedStatus && item.status !== selectedStatus) return false;
            if (selectedDirection && item.direction !== selectedDirection) return false;
            if (selectedType && item.type !== selectedType) return false;
            return true;
        });
        seState(filtered);
    };*/

    return (
        <div className={s.callReportWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <CustomTabs param={true}>
                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputInitiator(value)}
                                          type="text"
                                          placeholder="Введите номер"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputOperator(value)}
                                          type="text"
                                          placeholder="Введите оператора"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: "10px"}}>
                            <Form.Control onChange={(value: ChangeEvent<HTMLInputElement>) => onChangeInputContact(value)}
                                          type="text"
                                          placeholder="Введите контакт"/>
                        </Form.Group>
                        <Form.Group style={{display:"flex", justifyContent:"space-between",marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}} column={true}>Очередь: </Form.Label>
                            <Form.Select onChange={(value) =>onChangeSelectQueue(value)} style={{width:"250px"}}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="105 GSM">105 GSM</option>
                                <option value="105 Beltelecom">105 Beltelecom</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{display:"flex", justifyContent:"space-between"}}>
                            <Form.Label style={{width: "20px",color: "white"}}>Время:      &gt;</Form.Label>
                            <Form.Control style={{width:"250px", height: "40px"}} type="text" placeholder="0"/>
                        </Form.Group>
                        <Form.Group style={{display:"flex", justifyContent:"space-between", marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}}>Тип: </Form.Label>
                            <Form.Select
                                style={{width:"250px"}}
                                onChange={(value) => onChangeSelectType(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Обычный">Обычный</option>
                                <option value="Липкость">Липкость</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group  style={{display:"flex", justifyContent:"space-between"}}>
                            <Form.Label style={{width: "20px", color: "white"}}>Напра вление: </Form.Label>
                            <Form.Select
                                style={{width:"250px", height: "40px"}}
                                onChange={(value) => onChangeSelectDirection(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Входящий">Входящий</option>
                                <option value="Исходящий">Исходящий</option>
                            </Form.Select>
                        </Form.Group >
                        <Form.Group style={{display:"flex", justifyContent:"space-between", marginBottom: "10px"}}>
                            <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                            <Form.Select
                                style={{width:"250px"}}
                                onChange={(value) => onChangeSelectStatus(value)}>
                                <option value=''>&lt;Все&gt;</option>
                                <option value="Отвечен">Отвечен</option>
                                <option value="Не отвечен">Не отвечен</option>
                            </Form.Select>
                        </Form.Group>
                        <TabButton name={"Обновить"} onClick={()=>{}}/>
                    </CustomTabs>

                </div>
            </Sidebar>
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Статистика по звонкам</span>
                </div>
                <Table data={filteredData} columns={columns} defaultColumn={defaultColumn} pagination={true}/>
            </div>
        </div>
    );
};

export default CallReport;