export const calcGroupSum = (arr, startIndex, endIndex) => {
    if (startIndex < 0 || endIndex >= arr.length || startIndex > endIndex) {
        return 0;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += arr[i].value;
    }

    return sum;
}