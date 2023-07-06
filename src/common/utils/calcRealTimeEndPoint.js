export const calcRealTimeEndPoint = (scale) => {
    return [
        {x3: 270 / scale, y3: 60 / scale} /*1.НОД-6*/,
        {x3: 240 / scale, y3: 75 / scale} /*2.НОД-5*/,
        {x3: 215 / scale, y3: 90 / scale} /*3.НОД-4*/,
        {x3: 195 / scale, y3: 105 / scale} /*4.НОД-3*/,
        {x3: 190 / scale, y3: 120 / scale} /*5.НОД-2*/,
        {x3: 180 / scale, y3: 135 / scale} /*6.НОД-1*/,
        {x3: 180 / scale, y3: 160 / scale} /*7.Белтел Могилёвская*/,
        {x3: 180 / scale, y3: 175 / scale} /*8.Белтел Минская*/,
        {x3: 185 / scale, y3: 190 / scale} /*9.Белтел Гродненская*/,
        {x3: 190 / scale, y3: 205 / scale} /*10.Белтел Гомельская*/,
        {x3: 195 / scale, y3: 220 / scale} /*11.Белтел Витебская*/,
        {x3: 205 / scale, y3: 235 / scale} /*12.Белтел Брестская*/,
        {x3: 215 / scale, y3: 265 / scale} /*13.Repeat call*/,
        {x3: 400 / scale, y3: 205 / scale} /*14.MTC*/,
        {x3: 400 / scale, y3: 190 / scale} /*15.Life*/,
        {x3: 400 / scale, y3: 175 / scale} /*16.International*/,
        {x3: 380 / scale, y3: 90 / scale} /*17.A1*/
    ]
}