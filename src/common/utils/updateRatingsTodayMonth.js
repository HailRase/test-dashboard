import {sortServiceLevelRatings} from "./sortServiceLevelRatings";
import {sortServiceLevelMonthRatings} from "./sortServiceLevelMonthRatings";

export function updateRatingsTodayMonth (arr) {
    return arr.sort(sortServiceLevelMonthRatings).map((item, index) => {
        return {
            ...item,
            ratingMonth: index+1
        }
    })
        .sort(sortServiceLevelRatings).map((item, index) => {
        return {
            ...item,
            ratingToday: index+1
        }
    })

}