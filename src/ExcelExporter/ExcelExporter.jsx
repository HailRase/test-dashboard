import React from 'react';
import * as XLSX from 'xlsx'
import {ReactComponent as ExcelIcon} from "../../src/assets/excel-icon.svg";

const ExcelExporter = ({excelData}) => {

    const exportToExcel = (tableData) => {
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'table-data.xlsx');
    }

    return <ExcelIcon onClick={() => exportToExcel(excelData)}
                      style={{cursor: "pointer", marginRight: "20px"}}
                      width={30}
                      height={30}/>
};

export default ExcelExporter;