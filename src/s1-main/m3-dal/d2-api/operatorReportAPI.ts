import {instance} from "../d1-instance/instance";

export const operatorReportAPI = {
    getOperatorReportData(
        dateStart: string,
        timeStart: string,
        dateEnd: string,
        timeEnd: string,
        status: string,
        duration: number,
        operatorName: string,
        reason: string,
        comment: string
    ) {
        let params = {
            "dt1": `${dateStart}T${timeStart}:00.001`,
            "dt2": `${dateEnd}T${timeEnd}:59.999`,
            "status": `${status}`,
            "duration": `${duration}`,
            "operator": `${operatorName}`,
            "reason": `${reason}`,
            "comment": `${comment}`
        };
        let url = `dashboard7?startparam1=${JSON.stringify(params)}`
        return instance.get(url)
    }
}