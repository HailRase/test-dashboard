export function calcMonthRating (record) {
    let serviceLevelMonth = 0
    if (record.acceptMonth === 0){
        serviceLevelMonth = 0
    } else if (record.acceptMonth === 0 && record.skippedMonth === 0) {
        serviceLevelMonth = 0
    }
    else if (record.acceptMonth > 0 && record.skippedMonth === 0) {
        serviceLevelMonth = 100
    } else if (record.acceptMonth > 0 && record.skippedMonth > 0){
        serviceLevelMonth = (100 - ((record.skippedMonth / record.acceptMonth) * 100)).toFixed(1)
    }

    return `${record.acceptMonth} (${serviceLevelMonth})`
}