import {instance} from "../d1-instance/instance";

export const monitoringCCPastAPI = {
    getPastHistogramData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get('dashboard2_schema')
    },
    getPastOuterPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get('dashboard2_day_code')
    },
    getPastInnerPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get('dashboard2_day_all')
    },
    getPastTableData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get('dashboard2_table')
    }
}