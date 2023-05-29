import React from "react";

export const useCalcNumTotal = (info, accessor) => {
    const total = React.useMemo(
        () =>
            info.rows.reduce((sum, row) => row.values[accessor] + sum, 0),
        [info.rows]
    )

    return <>{total}</>
}