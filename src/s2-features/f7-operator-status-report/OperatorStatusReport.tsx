import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import s from "../f6-top-operator-report/TopOperatorReport.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Accordion from "../../common/components/Accordion/Accordion";
import TabButton from "../../common/components/TabButton/TabButton";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import TopOperatorReportPie from "../f6-top-operator-report/TopOperatorReportPie/TopOperatorReportPie";
import TopOperatorReportHistogram
    from "../f6-top-operator-report/TopOperatorReportHistogram/TopOperatorReportHistogram";
import Table from "../../common/components/Table/Table";
import {topOperatorReportData} from "../../data/topOperatorReportData";
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {loginTC} from "../../s1-main/m2-bll/auth-reducer";
import useIsAuth from "../../common/hooks/useIsAuth";

const columns = [
    {
        Header: 'Оператор',
        accessor: 'operator',
    },
    {
        Header: 'Дата',
        accessor: 'date',
    },
    {
        Header: 'Статус',
        accessor: 'status',
        width: 300
    },
    {
        Header: 'Коммент',
        accessor: 'comment',
    },
]

const OperatorStatusReport = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
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
    return (
        <div className={s.queueReportWrapper}>
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
                                <Form.Control type="datetime-local" defaultValue={dateNow} style={{width: "250px"}}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", padding: "5px", marginLeft: "20px"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="datetime-local" defaultValue={dateNow} style={{width: "250px"}}/>
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
            <div className={s.queueReportContainer}>
                <div className={s.queueReportHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по статусам оператора</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.pieContainer}>
                        <span>Нахождение во всех статусах</span>
                        <TopOperatorReportPie/>
                    </div>
                    <div className={s.histogramContainer}>
                        <span>Нахождение в статусе "Не готов"</span>
                        <TopOperatorReportHistogram/>
                    </div>
                </div>
                <div className={s.histogram}>
                    <Table data={topOperatorReportData} columns={columns} pagination={true} width={"99vw"}/>
                </div>
            </div>
        </div>
    );
};

export default OperatorStatusReport;