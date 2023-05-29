import React from "react";
import moment from "moment";

export const useCalcTimeTotal = (info, accessor) => {
    // Преобразуем каждую строку в объект moment
    const total = React.useMemo(() => {
        const moments = info.rows.map((row) => moment(row.values[accessor], 'HH:mm:ss'));
        // Сложим все объекты moment
        const sum = moment.duration();
        moments.forEach((moment) => {
            sum.add(moment.hours(), 'hours');
            sum.add(moment.minutes(), 'minutes');
            sum.add(moment.seconds(), 'seconds');
        });
        // Получим общее количество часов, минут исекунд
        const hours = Math.floor(sum.asHours());
        const minutes = sum.minutes();
        const seconds = sum.seconds();
        return hours + ":" + minutes + ":" + seconds
    }, [info.rows])
    return <>{total}</>
}


