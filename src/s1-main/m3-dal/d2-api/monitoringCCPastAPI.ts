import {instance} from "../d1-instance/instance";

export const monitoringCCPastAPI = {
    getPastData(dateStart: string, timeStart: string, dateEnd: string, timeEnd: string) {
        return instance.get(`api/ccmonitoring/get-all/${dateStart}T${timeStart}:00.000/${dateEnd}T${timeEnd}:00.000`)
    },
}