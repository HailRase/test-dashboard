import {instance} from "../d1-instance/instance";

export const operatorReportAPI = {
    getOperatorReportData(
        dateStart: string,
        timeStart: string,
        dateEnd: string,
        timeEnd: string,
        status: string,
        duration: string,
        operatorName: string,
        reason: string,
        comment: string
    ) {
        let url = `api/OperatorStateStatistics?dstart=${dateStart}&dend=${dateEnd}`
        if (status !== ""){
            url = url +`&StateCode=${status}`
        }
        if (duration !== ""){
            url = url +`&Duration=${duration}`
        }
        if (operatorName !== ""){
            url = url +`&OperatorName=${operatorName}`
        }
        if (reason !== ""){
            url = url +`&Reason=${reason}`
        }
        if (comment !== ""){
            url = url +`&Comment=${comment}`
        }


        return instance.get(url)
    }
}
///api/OperatorStateStatistics?dstart=2023-09-01&dend=2023-09-22&OperatorName=Инженер&StateCode=1&StateCode=5