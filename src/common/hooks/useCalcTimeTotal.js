import React from "react";
import moment from "moment";
import 'moment-duration-format';

export const useCalcTimeTotal = (info, accessor) => {
    // Преобразуем каждую строку в объект moment
    const total = React.useMemo(() => {
        const durations  = info.rows.map((row) => moment.duration(row.values[accessor]))
        // Сложим все объекты moment
        const totalDuration = durations.reduce((acc, cur) => acc.add(cur), moment.duration());
        return totalDuration.format('h:mm:ss', { trim: false });
    }, [info.rows])
    return <>{total}</>
}


