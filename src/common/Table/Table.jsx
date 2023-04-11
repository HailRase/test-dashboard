import React, {useEffect} from 'react'
import {useBlockLayout, usePagination, useResizeColumns, useTable} from "react-table";
import s from './Table.module.scss'
import data from "bootstrap/js/src/dom/data";
import {ReactComponent as InfoIcon} from "../../assets/info-icon.svg";
import {ReactComponent as Like} from "../../assets/like.svg";


const Table = ({...props}) => {
    const defaultColumnTable = React.useMemo(
        () => (props.defaultColumn),
        []
    )
    const tableData = React.useMemo(
        () => props.data,
        [props.data]
    )
    const tableColumns = React.useMemo(
        () => props.columns,
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setPageSize,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state,
    } = useTable(
        {
            columns: tableColumns,
            data: tableData,
            defaultColumn: defaultColumnTable,
            initialState: {pageIndex: 0, pageSize: 20},
        }, usePagination, useBlockLayout, useResizeColumns)

    useEffect(() => {
        setPageSize(30)
    }, [])
    const fillCellCall = (value) => {
        switch (value) {
            case 'Отвечен':
                return s.green
            case 'Готов':
                return s.green
            case 'Входящий дозвон':
                return s.green
            case 'Не отвечен':
                return s.red
            case 'Говорит':
                return s.green
            case 'Занят':
                return s.red
            case 'Входящий':
                return s.green
            case 'Исходящий':
                return s.red
            default:
                return s.black
        }
    }

    const {pageIndex, pageSize = 20} = state

    return (
        <div className={s.callReportTableWrapper}>
            <div className={s.callReportTableContainer}
                 style={{color: "#368536", height: props.height}}>
                <table {...getTableProps()} className={s.tableContainer} style={{width: props.width}}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={s.columnTr}>
                            {headerGroup.headers.map(column => (
                                <th className={s.columnTh}
                                    {...column.getHeaderProps()}
                                >
                                 <span>{column.render('Header')}</span>
                                    <div
                                        {...column.getResizerProps()}
                                        className={`${s.resizer} ${
                                            column.isResizing ? s.isResizing : ''
                                        }`}
                                    />
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className={s.rowsContainer}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr className={s.rowContainer} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td className={`${s.cellContainer} ${fillCellCall(cell.value)}`}
                                            {...cell.getCellProps()}>
                                            {({...cell.getCellProps()}.key).indexOf("ratingRecordId") > 0
                                                ? cell.value <= 10 ? <Like className={s.likeIcon}/> : <InfoIcon className={s.infoIcon}/>
                                                : ""}
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            {props.pagination && <div className={s.pagination}>
                <button style={{background: "none", border: "none", fontSize: "18px", marginRight: "10px"}}
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                {' '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginRight: "10px"}}
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}>
                    {'<'}
                </button>
                {' '}
                <span style={{color: "black"}}>| Страница:{' '}</span>
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    value={pageIndex + 1}
                    style={{width: '100px', marginRight: "10px", marginLeft: "5px", padding: "2px 3px"}}
                />
                <span style={{marginRight: "10px"}}>из</span>
                {pageOptions.length + ' | '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginLeft: "10px"}}
                        onClick={() => nextPage()}
                        disabled={!canNextPage}>
                    {'>'}
                </button>
                {' '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginLeft: "10px"}}
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>}
        </div>
    )
}


export default Table;


/*<div className={s.callReportTableContainer}>
            <div className={s.callReportTableHeaderContainer}>
                <div className={s.date}>
                    Дата
                </div>
                <div className={s.contactNumbers}>
                    Контактные номера
                </div>
                <div className={s.basicInformation}>Основная информация</div>
                <div className={s.time}>Время</div>
                <div className={s.contactTD}>Контакты в тд</div>
                <div className={s.dateItem}>
                    <div className={s.start}>Начало</div>
                    <div className={s.end}>Завершение</div>
                </div>
                <div className={s.contactNumbersItems}>
                    <div className={s.iniciator}>Инициатор</div>
                    <div className={s.resipient}>Получатель</div>
                </div>
                <div className={s.basicInformationItems}>
                    <div className={s.direction}>Направление</div>
                    <div className={s.status}>Статус</div>
                    <div className={s.type}>Тип</div>
                    <div className={s.queue}>Очередь</div>
                </div>
                <div className={s.timeItems}>
                    <div className={s.totalTime}>Общее время</div>
                    <div className={s.talkTime}>Время разговора</div>
                    <div className={s.timeConnection}>Время соединения</div>
                    <div className={s.holdTime}>Время на удержании</div>
                    <div className={s.queueTime}>Время в очереди</div>
                </div>
                <div className={s.contactTDItems}>
                    <div className={s.initiatorContact}>Контакт инициатора</div>
                    <div className={s.recipientContact}>Контакт получателя</div>
                    <div className={s.operator}>Оператор</div>
                </div>
            </div>
            <div className={s.callReportTableContent}>
                {callReportData.map((d: CallReportDataType) => <div className={s.callReportItem}>
                    <div className={s.startItem}>{d.dateStart}</div>
                    <div className={s.endItem}>{d.dateEnd}</div>
                    <div className={s.iniciatorItem}>{d.initiator}</div>
                    <div className={s.resipientItem}>{d.recipient}</div>
                    <div className={s.directionItem}>{d.direction}</div>
                    <div className={s.statusItem}>{d.status}</div>
                    <div className={s.tipeItem}>{d.type}</div>
                    <div className={s.queueItem}>{d.queue}</div>
                    <div className={s.totalTimeItem}>{d.totalTime}</div>
                    <div className={s.talkTimeItem}>{d.talkTime}</div>
                    <div className={s.timeConnectionItem}>{d.connectionTime}</div>
                    <div className={s.holdTimeItem}>{d.holdTime}</div>
                    <div className={s.queueTimeItem}>{d.queueTime}</div>
                    <div className={s.initiatorContactItem}>{d.initiatorContact}</div>
                    <div className={s.recipientContactItem}>{d.recipientContact}</div>
                    <div className={s.operatorItem}>{d.operator}</div>
                </div>)}
            </div>
            <div className={s.callReportTableFooter}>

            </div>
        </div>*/