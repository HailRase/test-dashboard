import React, {useEffect, useRef} from 'react'
import {useBlockLayout, usePagination, useResizeColumns, useSortBy, useTable} from "react-table";
import s from './Table.module.scss'
import {ReactComponent as InfoIcon} from "../../../assets/info-icon.svg";
import {ReactComponent as Like} from "../../../assets/like.svg";
import {truncateString} from "../../utils/truncateString";
import ExcelExporter from "../../../ExcelExporter/ExcelExporter";
import {ReactComponent as ExcelIcon} from "../../../assets/excel-icon.svg";
import {DownloadTableExcel} from 'react-export-table-to-excel';


const Table = ({...props}) => {

    const tableRef = useRef(null);

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
        [props.columns]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        prepareRow,
        setPageSize,
        rows,
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
        }, useSortBy, usePagination, useBlockLayout, useResizeColumns )
    const firstPageRows = rows.slice(0, 20)
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
    const fillCellQueue = (objKey, value) => {
        const newObjKey = truncateString(objKey)
        if (value === 0) {
            switch (newObjKey) {
                case 'totalCall':
                case 'totalSkipped':
                case 'skippedLess5s':
                case 'skippedLess20s':
                case 'skippedLess30s':
                case 'skippedLess1m':
                case 'skippedLess2m':
                case'skippedMore2m':
                case 'totalAccept':
                case 'acceptLess5s':
                case 'acceptLess10s':
                case 'acceptLess20s':
                case 'acceptLess30s':
                case 'acceptLess1m':
                case 'acceptLess2m':
                case 'acceptMore2m':
                case 'percentUnanswered':
                case 'percentAnswered':
                case 'serviceLevelUpTo5Sec':
                case 'serviceLevelUpTo10Sec':
                case 'accept':
                case 'acceptLess5':
                case 'acceptLess10':
                case 'acceptLess15':
                case 'acceptMore15':
                case 'canceled':
                case 'skipped':
                case 'received':
                case 'outgoingCallHandlingTotal':
                case 'outgoingCallHandlingAnswered':
                case 'outgoingCallHandlingNotAnswered':
                case 'outgoingCallHandlingCanceled':
                case 'outgoingCallHandlingBusy':
                case 'outgoingCallHandlingNotAvailable':
                case 'handlingInternalCallsTotal':
                case 'handlingInternalCallsAnswered':
                case 'handlingInternalCallsNotAnswered':
                case 'handlingInternalCallsCanceled':
                case 'handlingInternalCallsBusy':
                case 'handlingInternalCallsNotAvailable':
                    return s.grayColor
                default:
                    return s.black
            }
        }
    }
    const fillCellOperatorsGeneral = (objKey, value) => {
        const newObjKey = truncateString(objKey)
        if (value === "0:00:00") {
            switch (newObjKey) {
                case 'totalTalkTime':
                case 'totalFreeTime':
                case 'totalNotReadyTime':
                case 'totalBusyTime':
                case 'totalIncomingCall':
                case 'totalOutgoingCall':
                case 'totalLogoutTime':
                case 'incomingCallsAvgTalkTime':
                case 'incomingCallsAvgHoldTime':
                case 'incomingCallsAvgCallingTime':
                case 'outgoingCallsAvgTalkTime':
                case 'outgoingCallsAvgHoldTime':
                case 'outgoingCallsAvgCallingTime':
                case 'internalCallsAvgTalkTime':
                case 'internalCallsAvgHoldTime':
                case 'internalCallsAvgCallingTime':
                case 'avgCallDuration':
                case 'maxCallDuration':
                case 'avgWaitingTimeLostCall':
                case 'maxWaitingTimeLostCall':
                case 'avgWaitingTimeReceivedCall':
                case 'maxWaitingTimeReceivedCall':
                case 'avgTalkTime':
                case 'maxTalkTime':
                    return s.grayColor
                default:
                    return s.black
            }
        }
    }


    const {pageIndex, pageSize = 20} = state

    return (
        <div className={s.callReportTableWrapper}>
            <div className={s.callReportTableContainer}
                 style={{color: "#368536", height: props.height}}>
                <table ref={tableRef} {...getTableProps()} className={s.tableContainer} style={{width: props.width}}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={s.columnTr}>
                            {headerGroup.headers.map(column => (
                                <th className={s.columnTh}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                >
                                    <span>{column.render('Header')}</span>
                                    <div className={s.overlayContainer}>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? <div className={s.overlayItem}><span>&darr;</span></div>
                                            : <div className={s.overlayItem}><span>&uarr;</span></div>
                                        : ''}
                                     </div>
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
                    <tbody {...getTableBodyProps()} className={s.rowsContainer} style={{overflow: "scroll", width: "100%"}}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr className={s.rowContainer} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td  className={`${s.cellContainer} ${fillCellCall(cell.value)} ${fillCellQueue({...cell.getCellProps()}.key, cell.value)} ${fillCellOperatorsGeneral({...cell.getCellProps()}.key, cell.value)}`}
                                            {...cell.getCellProps()}>
                                            {({...cell.getCellProps()}.key).indexOf("ratingRecordId") > 0
                                                ? cell.value <= 10 ? <Like className={s.likeIcon}/> :
                                                    <InfoIcon className={s.infoIcon}/>
                                                : ""}
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                    {props.footer &&<tfoot>
                    {footerGroups.map(group => (
                        <tr {...group.getFooterGroupProps()}>
                            {group.headers.map(column => (
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                    </tfoot>}
                </table>
            </div>
            {props.pagination && <div className={s.pagination}>
                <div>
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
                </div>
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >
                    <ExcelIcon style={{cursor: "pointer", marginRight: "20px"}}
                               width={30}
                               height={30}/>
                </DownloadTableExcel>
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