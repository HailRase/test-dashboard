export function sortServiceLevelMonthRatings(a, b) {
    if (a.serviceLevelMonth !== b.serviceLevelMonth) {
        return b.serviceLevelMonth - a.serviceLevelMonth; // сортировка по убыванию serviceLevel
    } else {
        return b.acceptMonth - a.acceptMonth; // если serviceLevel равны, сортировка по убыванию accept
    }
}