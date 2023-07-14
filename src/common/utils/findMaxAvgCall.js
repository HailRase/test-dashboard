export const findMaxAvgCall = (data) => {
    const maxValues = data.reduce((acc, { avgCalls, maxSimultaneousCall, oplnSys }) => {
        return {
            avgCalls: Math.max(acc.avgCalls, avgCalls),
            maxSimultaneousCall: Math.max(acc.maxSimultaneousCall, maxSimultaneousCall),
            oplnSys: Math.max(acc.oplnSys, oplnSys),
        };
    }, { avgCalls: Number.NEGATIVE_INFINITY, maxSimultaneousCall: Number.NEGATIVE_INFINITY, oplnSys: Number.NEGATIVE_INFINITY });

    return Math.max(maxValues.avgCalls, maxValues.maxSimultaneousCall, maxValues.oplnSys);
}