export const findMaxAcceptAndNotAcceptSum = (arr) => {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i].accept + arr[i].notAccept;
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}