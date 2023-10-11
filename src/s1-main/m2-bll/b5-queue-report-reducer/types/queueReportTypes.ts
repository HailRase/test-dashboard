export type StatusType = "init" | "loading" | "loaded" | "error"
export type QueueReportHistogramDataType = {
    name: number
    date: string
    serviceLevel: number
    skipped: number
    accept: number
}
export type QueueReportPieDataType = {
    name: string
    value: number
    fill: string
}
export type QueueReportPieTotalDataType = {
    name: string
    value: number
    fill: string
}
export type QueueReportTableDataType = {
    id: number
    startPeriod: string
    endPeriod: string
    queue: string
    totalCall: number
    percentageReceivedCalls: number
    serviceLevel: string
    totalSkipped: number
    skippedLess5s: number
    skippedLess10s: number
    skippedLess20s: number
    skippedLess30s: number
    skippedLess1m: number
    skippedLess2m: number
    skippedMore2m: number
    totalAccept: number
    acceptLess5s: number
    acceptLess10s: number
    acceptLess20s: number
    acceptLess30s: number
    acceptLess1m: number
    acceptLess2m: number
    acceptMore2m: number
    avgCallDuration: string
    maxCallDuration: string
    avgWaitingTimeLostCall: string
    maxWaitingTimeLostCall: string
    avgWaitingTimeReceivedCall: string
    maxWaitingTimeReceivedCall: string
    avgTalkTime: string
    maxTalkTime: string
}
