import {instance} from "../d1-instance/instance";

export const operatorReportGeneralAPI = {
    getOperatorReportGeneralData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string, department: string) {
        return instance.get(`dashboard3?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000&departament=${department}`)
    },
    getOperatorReportGeneralDepartment() {
        return instance.get(`filter_department`)
    }
}

/*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/