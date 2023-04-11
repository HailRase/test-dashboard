import React, {useState} from 'react';
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
        Header: 'Контакты в',
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
]
const defaultColumn = {
    minWidth: 20,
    width: 120,
    maxWidth: 300,
}

const CallReport = () => {

    const [isActive, setIsActive] = useState<boolean>(false)
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

    return (
        <div className={s.callReportWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <CustomTabs param={true}>
                        <Form.Group>
                            <Form.Label>Номер: </Form.Label>
                            <Form.Control type="text" placeholder="Введите номер"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Оператор: </Form.Label>
                            <Form.Control type="text" placeholder="Введите оператора"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Контакт: </Form.Label>
                            <Form.Control type="text" placeholder="Введите контакт"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Очередь: </Form.Label>
                            <Form.Control type="text" placeholder="Введите очередь"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Время: </Form.Label>
                            <Form.Control type="time" placeholder="Введите время"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Тип: </Form.Label>
                            <Form.Select>
                                <option>Выберите тип</option>
                                <option value="1">Обычный</option>
                                <option value="2">Липкость</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Направление: </Form.Label>
                            <Form.Select>
                                <option>Выберите направление</option>
                                <option value="1">Входящий</option>
                                <option value="2">Исходящий</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Статус: </Form.Label>
                            <Form.Select>
                                <option>Выберите статус</option>
                                <option value="1">Отвечен</option>
                                <option value="2">Нет отвечен</option>
                            </Form.Select>
                        </Form.Group>
                    </CustomTabs>
                </div>
            </Sidebar>
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Статистика по звонкам</span>
                </div>
                <Table data={callReportData} columns={columns} defaultColumn={defaultColumn} pagination={true}/>
            </div>
        </div>
    );
};

export default CallReport;