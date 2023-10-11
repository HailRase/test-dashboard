export type StatusType = "init" | "loading" | "loaded" | "error"
export type RealTimeHistogramDataType = {
    name: string
    notAccept: number
    accept: number
    avgCalls: number
    maxSimultaneousCall: number
    oplnSys: number
    opActivity: number
}
export type RealTimeMonthPieDataType = {
    name: string
    value: number
}
export type RealTimeMonthPieTotalDataType = {
    name: string
    value: number
}
export type RealTimeTableDataType = {
    id: string
    ratingToday: number
    ratingMonth: number
    operatorName: string
    accept: number
    acceptMonth: number
    skip: number
    serviceLevel: string
    avgServiceTime: string
    avgServiceTimeMonth: string
    monthRating: string
    workload: string
    workloadMonth: string
}
export type PastTableDataType = {
    id: string
    ratingToday: number
    operatorName: string
    accept: number
    skip: number
    serviceLevel: string
    avgServiceTime: string
    workload: string
}