import {instance} from "../d1-instance/instance";

export const monitoringCCRealTimeAPI = {
    getRealTimeData(){
        return instance.get('api/ccmonitoring/get-all')
    }
}