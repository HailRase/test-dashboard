import {instance} from "../d1-instance/instance";

export const monitoringCCPastAPI = {
    getPastHistogramData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(`dashboard2_schema?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getPastOuterPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get(`dashboard2_day_code?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getPastInnerPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get(`dashboard2_day_all?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getPastTableData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get(`dashboard2_table?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    }
}