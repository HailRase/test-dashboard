import {instance} from "../d1-instance/instance";

export const operatorReportReferencesAPI = {
    getOperatorReportDataReferencesData() {
        return instance.get(`api/OperatorStateStatistics/GetReferences`)
    },
}