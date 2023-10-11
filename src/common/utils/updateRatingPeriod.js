import {sortServiceLevelRatings} from "./sortServiceLevelRatings";

export function updateRatingPeriod (obj) {
    return {
        ...obj,
        tableTotal: obj.tableTotal.sort((a,b) => {
            return b.accept - a.accept
        }).map((item, index) => {
            return {
                ...item,
                ratingToday: index + 1
            }
        })

    }
}