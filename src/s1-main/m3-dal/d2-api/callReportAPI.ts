import {instance} from "../d1-instance/instance";

export const callReportAPI = {
    getCallReportData(
        dateStart: string,
        timeStart: string,
        dateEnd: string,
        timeEnd: string,
        number: string,
        operator: string,
        contact: string,
        queue: string,
        time: number,
        type: string,
        direction: string,
        status: string,
    ) {
        let params = {
            "number": `${number}`,
            "operator": `${operator}`,
            "contact": `${contact}`,
            "queue": `${queue}`,
            "time": `${time}`,
            "type": `${type}`,
            "direction": `${direction}`,
            "status": `${status}`,
        };
        return instance.get(`dashboard6?dtStart=${dateStart}T${timeStart}:59.000&dtStop=${dateEnd}T${timeEnd}:59.000&filter=${JSON.stringify(params)}`)
    }
}