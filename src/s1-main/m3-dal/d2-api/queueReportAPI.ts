import {instance} from "../d1-instance/instance";

export const queueReportAPI = {
    getQueueReportTableData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(`dashboard5_table?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getQueueReportHistogramData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(`dashboard5_schema?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getQueueReportOuterPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get(`dashboard5_round_outside?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
    getQueueReportInnerPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get(`dashboard5_round_inside?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`)
    },
}

/*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/