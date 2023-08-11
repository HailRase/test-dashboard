export function calcMonthRating (record) {
    let serviceLevelMonth = 0
    if (record.acceptMonth === 0){
        serviceLevelMonth = 0
    } else if (record.acceptMonth === 0 && record.skippedMonth === 0) {
        serviceLevelMonth = 0
    }
    else if (record.acceptMonth < record.skippedMonth) {
        serviceLevelMonth = 0
    }
    else if (record.acceptMonth > 0 && record.skippedMonth === 0) {
        serviceLevelMonth = 100
    } else if (record.acceptMonth > 0 && record.skippedMonth > 0){
        serviceLevelMonth = (100*record.acceptMonth/(record.acceptMonth + record.skippedMonth)).toFixed(1)
    }

    return `${record.acceptMonth} (${serviceLevelMonth})`
}