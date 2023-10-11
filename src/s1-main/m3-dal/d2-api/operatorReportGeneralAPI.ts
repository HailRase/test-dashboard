import {instance} from "../d1-instance/instance";

export const operatorReportGeneralAPI = {
    getOperatorReportGeneralData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string, department: string) {
        return instance.get(`/api/GeneralReportByOperators?dStart=${dateStart}T${timeStart}:00.000&dEnd=${dateEnd}T${timeEnd}:00.000&dpId=${department}`)
    },
    getOperatorReportGeneralDepartment() {
        return instance.get(`/api/departments`)
    }
}

/*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/