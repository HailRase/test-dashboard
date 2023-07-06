export const findMaxHistogramDomains = (arr, property) => {


    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i].accept + arr[i].notAccept;
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}