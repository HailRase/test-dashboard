import React, {useState} from 'react';
import s from './CallReport.module.scss'
import CallReportTable from "./CallReportTable/CallReportTable";
import {ReactComponent as Home} from "../../assets/home-icon.svg";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../common/Sidebar/Sidebar";
import {ReactComponent as OptionIcon} from "../../assets/option-icon.svg";
import {ReactComponent as ArrowLeft} from "../../assets/arrow-left.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';


const CallReport = () => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const onHomeHandler = () => {
        navigate('/')
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
                        <ArrowLeft className={s.arrowLeft} onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <Tabs>
                            <Tab className={s.tab}
                                 eventKey="period"
                                 title="Период"
                                 color="black"
                                 style={{display: "flex", flexDirection: "column", alignItems: "flex-end",color: "black"}}>
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
            <div className={s.callReportContainer}>
                <div className={s.callReportHeader}>
                    <Home className={s.homeLogo} onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar} className={s.optionIcon}/>
                    <span>Статистика по звонкам</span>
                </div>
                <CallReportTable/>
            </div>
        </div>
    );
};

export default CallReport;