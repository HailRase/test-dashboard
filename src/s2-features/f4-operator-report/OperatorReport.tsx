import React, {useState} from 'react';
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
                        <CustomTabs/>
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