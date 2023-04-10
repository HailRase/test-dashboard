import React, {useState} from 'react';
import s from "./OperatorReport.module.scss";
import {Sidebar} from "../../common/Sidebar/Sidebar";
import {ReactComponent as ArrowLeft} from "../../assets/arrow-left.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import {ReactComponent as Home} from "../../assets/home-icon.svg";
import {ReactComponent as OptionIcon} from "../../assets/option-icon.svg";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import {operatorReportData} from "../../data/operatorReportData";


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
                        <ArrowLeft className={s.arrowLeft} onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <Tabs>
                            <Tab className={s.tab}
                                 eventKey="period"
                                 title="Период"
                                 color="black"
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "flex-end",
                                     color: "black"
                                 }}>
                                <Form.Group style={{marginTop: "10px", marginRight: "10px", width: "70%"}}>
                                    <Form.Label style={{color: "white"}}>С:</Form.Label>
                                    <Form.Control type="date"/>
                                    <Form.Control type="time"/>
                                </Form.Group>
                                <Form.Group style={{marginTop: "10px", marginRight: "10px", width: "70%"}}>
                                    <Form.Label style={{color: "white"}}>По:</Form.Label>
                                    <Form.Control type="date"/>
                                    <Form.Control type="time"/>
                                </Form.Group>
                            </Tab>
                            <Tab eventKey="param" title="Параметры">

                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </Sidebar>
            <div className={s.operatorReportContainer}>
                <div className={s.operatorReportHeader}>
                    <Home className={s.homeLogo} onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar} className={s.optionIcon}/>
                    <span>Статистика по операторам</span>
                </div>
                <Table data={operatorReportData} columns={columns} pagination={true} width={"100vw"}/>
            </div>
        </div>
    );
};

export default OperatorReport;