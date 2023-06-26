import {instance} from "../d1-instance/instance";

export const queueReportAPI = {
    getQueueReportData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(``/*`dashboard5_table?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000`*/)
    },
    getQueueReportHistogramData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get('dashboard5_schema')
    },
    getQueueReportOuterPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get('dashboard5_day_code')
    },
    getQueueReportInnerPieData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string){
        return instance.get('dashboard5_day_all')
    },
}

/*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/