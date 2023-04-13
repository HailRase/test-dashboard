import React, {ChangeEvent, useState} from 'react';
import s from "./OperatorReport.module.scss";
import {Sidebar} from "../../common/Sidebar/Sidebar";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import {operatorReportData} from "../../data/operatorReportData";
import CustomTabs from "../../common/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/OptionIcon/OptionIcon";
import HomeIcon from "../../common/HomeIcon/HomeIcon";
import {Form} from "react-bootstrap";
import TabButton from "../../common/TabButton/TabButton";


const columns = [
    {
        Header: 'Дата',
        accessor: 'date',
        width: 150
    },
    {
        Header: 'Оператор',
        accessor: 'operator',
        width: 300
    },
    {
        Header: 'Статус',
        accessor: 'status',
        width: 250
    },
    {
        Header: 'Длительность',
        accessor: 'duration',
    },
    {
        Header: 'Причина',
        accessor: 'reason',
        width: 300
    },
    {
        Header: 'Комментарий',
        accessor: 'comment',
        width: 369
    }
]

const defaultColumn = {
    minWidth: 20,
    width: 120,
    maxWidth: 300,
}

const OperatorReport = () => {

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
        <div className={s.operatorReportWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <CustomTabs param={true}>
                            <Form.Group style={{display:"flex", justifyContent:"space-between", marginBottom: "10px"}}>
                                <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                                <Form.Select
                                    style={{width:"250px"}}>
                                    <option>&lt;Все&gt;</option>
                                    <option value="Готов">Готов</option>
                                    <option value="Говорит">Говорит</option>
                                    <option value="Входящий дозвон">Входящий дозвон</option>
                                    <option value="Не готов">Не готов</option>
                                    <option value="Занят">Занят</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{display:"flex", justifyContent:"space-between"}}>
                                <Form.Label style={{width: "20px",color: "white"}}>Длитель ность:      &gt;=</Form.Label>
                                <Form.Control style={{width:"250px", height: "40px"}} type="text" placeholder="0"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control type="text" placeholder="Введите оператора"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control type="text" placeholder="Введите причину"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control type="text" placeholder="Введите комментарий"/>
                            </Form.Group>
                            <TabButton name={"Обновить"} onClick={() => {}}/>
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
                <Table data={operatorReportData} columns={columns} pagination={true} width={"100vw"}/>
            </div>
        </div>
    );
};

export default OperatorReport;