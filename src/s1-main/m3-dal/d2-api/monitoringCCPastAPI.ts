import {instance} from "../d1-instance/instance";

export const monitoringCCPastAPI = {
    getPastHistogramData() {
        return instance.get('dashboard2_schema')
    },
    getPastOuterPieData(){
        return instance.get('dashboard2_day_code')
    },
    getPastInnerPieData(){
        return instance.get('dashboard2_day_all')
    },
    getPastTableData(){
        return instance.get('dashboard2_table')
    }
}