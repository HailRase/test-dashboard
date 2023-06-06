import {instance} from "../instance/instance";

export const oktellAPI = {
    getOperatorReportGeneralData(department: string){
        return instance.get(`dashboard1?dtStart=2023-05-01T23:59:59.000&dtStop=2023-05-21T23:59:59.000&departament=${department}`)
    },
    getOperatorActivity(){
        return instance.get(`execsvcscriptplain`)
    }
}

    /*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/