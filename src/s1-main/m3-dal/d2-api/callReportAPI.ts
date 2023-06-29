import {instance} from "../d1-instance/instance";

export const callReportAPI = {
    getCallReportData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(`dashboard6?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    }
}