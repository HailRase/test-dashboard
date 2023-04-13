import {queueReportData} from "../../data/queueReportData";

export const totalCallReducer = (queue) => {
    return queueReportData.filter((item) => item.queue === queue)
        .reduce((acc, curr) => acc + curr.totalCall, 0)
}