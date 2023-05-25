import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./OperatorReport.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import Table from "../../common/components/Table/Table";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import {operatorReportData} from "../../data/operatorReportData";
import CustomTabs from "../../common/components/CustomTabs/CustomTabs";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import {Form} from "react-bootstrap";
import TabButton from "../../common/components/TabButton/TabButton";
import useIsAuth from "../../common/hooks/useIsAuth";


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

const OperatorReport = () => {


    const [state, setState] = useState(operatorReportData)

    const [statusFilter, setStatusFilter] = useState('');
    const [durationFilter, setDurationFilter] = useState('');
    const [operatorFilter, setOperatorFilter] = useState('');
    const [reasonFilter, setReasonFilter] = useState('');
    const [commentFilter, setCommentFilter] = useState('');

    const [isActiveSideBar, setIsActiveSideBar] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()

    useEffect(() => {
        if (!isAuth) navigate('/')
    },[])


    const onChangeSelectStatus = (value: ChangeEvent<HTMLSelectElement>) => {
            setStatusFilter(value.target.value)
    }
    const onChangeInputOperator = (value: ChangeEvent<HTMLInputElement>) => {
            setOperatorFilter(value.target.value)
    }
    const onChangeInputReason = (value: ChangeEvent<HTMLInputElement>) => {
            setReasonFilter(value.target.value)
    }
    const onChangeInputComment = (value: ChangeEvent<HTMLInputElement>) => {
            setCommentFilter(value.target.value)
    }

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActiveSideBar(true)
    }
    const onCloseSidebar = () => {
        setIsActiveSideBar(false)
    }

    const filteredData = state.filter((item) =>
        item.status.includes(statusFilter) &&
        item.operator.includes(operatorFilter) &&
        item.reason.includes(reasonFilter) &&
        item.comment.includes(commentFilter)
    );

    return (
        <div className={s.operatorReportWrapper}>
            <Sidebar isActive={isActiveSideBar}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <CustomTabs param={true}>
                            <Form.Group
                                style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                <Form.Label style={{color: "white"}}>Статус: </Form.Label>
                                <Form.Select
                                    value={statusFilter}
                                    onChange={onChangeSelectStatus}
                                    style={{width: "75%"}}>
                                    <option value="">&lt;Все&gt;</option>
                                    <option value="Готов">Готов</option>
                                    <option value="Говорит">Говорит</option>
                                    <option value="Входящий дозвон">Входящий дозвон</option>
                                    <option value="Не готов">Не готов</option>
                                    <option value="Занят">Занят</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                                <Form.Label style={{width: "20px", color: "white"}}>Длитель
                                    ность:      &gt;=</Form.Label>
                                <Form.Control style={{width: "75%   ", height: "40px"}} type="text" placeholder="0"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={operatorFilter}
                                              onChange={onChangeInputOperator}
                                              type="text"
                                              placeholder="Введите оператора"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={reasonFilter}
                                              onChange={onChangeInputReason}
                                              type="text"
                                              placeholder="Введите причину"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom: "10px"}}>
                                <Form.Control value={commentFilter}
                                              onChange={onChangeInputComment}
                                              type="text"
                                              placeholder="Введите комментарий"/>
                            </Form.Group>
                            <TabButton name={"Обновить"} onClick={() => {
                            }}/>
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
                <Table data={filteredData} columns={columns} pagination={true} width={"100vw"}/>
            </div>
        </div>
    );
};

export default OperatorReport;