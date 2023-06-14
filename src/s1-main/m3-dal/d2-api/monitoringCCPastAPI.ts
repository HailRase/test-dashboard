import {instance} from "../d1-instance/instance";

export const monitoringCCPastAPI = {
    getRealTimeHistogramData() {
        return instance.get('dashboard1_schema')
    },
    getTodayRealTimeOuterPieData(){
        return instance.get('dashboard1_day_code')
    },
    getTodayRealTimeInnerPieData(){
        return instance.get('dashboard1_day_all')
    },
    getMonthRealTimeOuterPieData(){
        return instance.get('dashboard1_month_code')
    },
    getMontRealTimeInnerPieData(){
        return instance.get('dashboard1_month_all')
    },
    getRealTimeTableData(){
        return instance.get('dashboard1_table')
    }
}