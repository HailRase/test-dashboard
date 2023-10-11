import {sortServiceLevelRatings} from "./sortServiceLevelRatings";
import {sortServiceLevelMonthRatings} from "./sortServiceLevelMonthRatings";

export function updateRatingsTodayMonth (obj) {
    return {
        ...obj,
        tableTotal: obj.tableTotal.sort(sortServiceLevelMonthRatings).map((item, index) => {
            return {
                ...item,
                ratingMonth: index + 1
            }
        })
            .sort(sortServiceLevelRatings).map((item, index) => {
                return {
                    ...item,
                    ratingToday: index + 1
                }
            })
    }

}