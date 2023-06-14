export function sortServiceLevelRatings(a, b) {
    if (a.serviceLevel !== b.serviceLevel) {
        return b.serviceLevel - a.serviceLevel; // сортировка по убыванию serviceLevel
    } else {
        return b.accept - a.accept; // если serviceLevel равны, сортировка по убыванию accept
    }
}