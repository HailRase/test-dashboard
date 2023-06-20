import React, {useRef} from 'react'
import {useBlockLayout, usePagination, useResizeColumns, useSortBy, useTable} from "react-table";
import s from './Table.module.scss'
import {ReactComponent as InfoIcon} from "../../../assets/info-icon.svg";
import {ReactComponent as Like} from "../../../assets/like.svg";
import {truncateString} from "../../utils/truncateString";
import {ReactComponent as ExcelIcon} from "../../../assets/excel-icon.svg";
import {DownloadTableExcel} from 'react-export-table-to-excel';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {FormGroup} from "react-bootstrap";


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
            initialState: {pageIndex: 0, pageSize: 30},
        }, useSortBy, usePagination, useBlockLayout, useResizeColumns)
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
        if (value === "00:00:00") {
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

    function getHeaderTitle(objKey, header) {
        switch (objKey) {
            case 'serviceLevel': {
                return 'Принял/Пропустил'
            }
            case 'monthRating': {
                return 'Принял за месяц/Пропустил за месяц'
            }
            case 'workload': {
                return 'Время в разговоре / (Время в разговоре + Время в статусе свободен)'
            }
            case 'workloadMonth': {
                return 'Время в разговоре за месяц / (Время в разговоре за месяц + Время в статусе свободен за месяц)'
            }
            default: {
                return `Сортитровать по полю ${header}`
            }
        }
    }

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
                                    title={getHeaderTitle(column.id, column.Header)}
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
                    <tbody {...getTableBodyProps()} className={s.rowsContainer}
                           style={{overflow: "scroll", width: "100%"}}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr className={s.rowContainer} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td className={`${s.cellContainer} ${fillCellCall(cell.value)} ${fillCellQueue({...cell.getCellProps()}.key, cell.value)} ${fillCellOperatorsGeneral({...cell.getCellProps()}.key, cell.value)}`}
                                            {...cell.getCellProps()}>
                                            {({...cell.getCellProps()}.key).indexOf("ratingToday") > 0
                                                ? cell.value <= 10 ? <Like className={s.likeIcon}/> :
                                                    <InfoIcon className={s.infoIcon}/>
                                                : ""}
                                            {({...cell.getCellProps()}.key).indexOf("ratingMonth") > 0
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
                    {props.footer && <tfoot>
                    {footerGroups.map(group => (
                        <tr {...group.getFooterGroupProps()} className={s.footerTr}>
                            {group.headers.map(column => column !== null
                                ? <td className={s.footerTd} {...column.getFooterProps()}>{column.render('Footer')}</td>
                                : "")}
                        </tr>
                    ))}
                    </tfoot>}
                </table>
            </div>
            {props.pagination && <div className={s.pagination}>
                <Pagination size={"sm"} style={{height: "30px",marginTop: "5px"}}>
                    <Pagination.First onClick={() => gotoPage(0)}
                                      disabled={!canPreviousPage}/>
                    <Pagination.Prev onClick={() => previousPage()}
                                     disabled={!canPreviousPage}/>
                    <InputGroup className="mb-3" size={"sm"} style={{width: "190px"}}>
                        <InputGroup.Text id="basic-addon1">Страница:</InputGroup.Text>
                        <Form.Control
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            value={pageIndex + 1}
                            type={"number"}
                            placeholder="№"
                            aria-label="№"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">{'из ' + pageOptions.length}</InputGroup.Text>
                    </InputGroup>
                    <Pagination.Next onClick={() => nextPage()}
                                     disabled={!canNextPage}/>
                    <Pagination.Last onClick={() => gotoPage(pageCount - 1)}
                                     disabled={!canNextPage}/>
                </Pagination>
                <FormGroup className={s.recordCount} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Form.Label   style={{marginRight: "10px", display: "block", fontSize: "18px", marginTop: "5px"}}>Кол-во записей на странице: </Form.Label>
                    <Form.Select onChange={(e) => setPageSize(e.currentTarget.value)} defaultValue={30} size="sm"
                                 style={{width: "100px"}}>
                        <option value={props.data.length}>MAX</option>
                        <option value={1000}>1000</option>
                        <option value={500}>500</option>
                        <option value={300}>300</option>
                        <option value={100}>100</option>
                        <option value={50}>50</option>
                        <option value={30}>30</option>
                    </Form.Select>
                </FormGroup>
                <DownloadTableExcel
                    filename="report"
                    sheet="report"
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


