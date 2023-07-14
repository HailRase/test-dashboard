export const findMaxOpActivity = (data) => {
    const maxValues = data.reduce((acc, { opActivity }) => {
        return {
            opActivity: Math.max(acc.opActivity, opActivity),
        };
    }, { opActivity: Number.NEGATIVE_INFINITY});
    return Math.max(maxValues.opActivity);
}