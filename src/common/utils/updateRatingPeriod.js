import {sortServiceLevelRatings} from "./sortServiceLevelRatings";

export function updateRatingPeriod (arr) {
    return arr
        .sort(sortServiceLevelRatings).map((item, index) => {
            return {
                ...item,
                ratingToday: index+1
            }
        })
}