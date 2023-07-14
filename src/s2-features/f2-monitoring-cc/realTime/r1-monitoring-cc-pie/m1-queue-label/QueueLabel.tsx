import React from 'react';
import {useScale} from "../../../../../common/hooks/useScale";

const QueueLabel: React.FC<any> = (props) => {
    const scale = useScale()
    /*const RADIAN = Math.PI / 180;
    const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index, endAngle} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const x1 = cx + outerRadius * cos;
    const y1 = cy + outerRadius * sin;
    const x2 = cx + (outerRadius + 10) * cos;
    const y2 = cy + (outerRadius + 10) * sin;
    const textAnchor = index >= 13 ? 'start' : 'end';
    const my = cy + (outerRadius + 15) * sin;
    const ex = x2 + (cos >= 0 ? 1 : -1) * 10;
    const ey = my;*/





    const RADIAN = Math.PI / 180;
    const {cx, cy, midAngle, outerRadius, fill, percent, value, name, index} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const x1 = cx + outerRadius * cos;
    const y1 = cy + outerRadius * sin;
    const x2 = cx + (outerRadius + 10) * cos;
    const y2 = cy + (outerRadius + 10) * sin;
    const textAnchor = index >= 13 ? 'start' : 'end';
     const endPoint = [
         {x3: 250 / scale, y3: 70 / scale} /*1.НОД-6*/,
         {x3: 220 / scale, y3: 85 / scale} /*2.НОД-5*/,
         {x3: 195 / scale, y3: 100 / scale} /*3.НОД-4*/,
         {x3: 175 / scale, y3: 115 / scale} /*4.НОД-3*/,
         {x3: 170 / scale, y3: 130 / scale} /*5.НОД-2*/,
         {x3: 160 / scale, y3: 145 / scale} /*6.НОД-1*/,
         {x3: 180 / scale, y3: 200 / scale} /*7.Белтел Могилёвская*/,
         {x3: 180 / scale, y3: 215 / scale} /*8.Белтел Минская*/,
         {x3: 190 / scale, y3: 230 / scale} /*9.Белтел Гродненская*/,
         {x3: 200 / scale, y3: 245 / scale} /*10.Белтел Гомельская*/,
         {x3: 215 / scale, y3: 260 / scale} /*11.Белтел Витебская*/,
         {x3: 225 / scale, y3: 275 / scale} /*12.Белтел Брестская*/,
         {x3: 360 / scale, y3: 295 / scale} /*13.Repeat call*/,
         {x3: 400 / scale, y3: 205 / scale} /*14.MTC*/,
         {x3: 400 / scale, y3: 190 / scale} /*15.Life*/,
         {x3: 400 / scale, y3: 175 / scale} /*16.International*/,
         {x3: 380 / scale, y3: 90 / scale} /*17.A1*/
     ]
    /*const paths = [
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${ex} ${ey}`,
    ];*/
    const paths = [
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[0].x3} ${endPoint[0].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[1].x3} ${endPoint[1].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[2].x3} ${endPoint[2].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[3].x3} ${endPoint[3].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[4].x3} ${endPoint[4].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[5].x3} ${endPoint[5].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[6].x3} ${endPoint[6].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[7].x3} ${endPoint[7].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[8].x3} ${endPoint[8].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[9].x3} ${endPoint[9].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[10].x3} ${endPoint[10].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[11].x3} ${endPoint[11].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[12].x3} ${endPoint[12].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[13].x3} ${endPoint[13].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[14].x3} ${endPoint[14].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[15].x3} ${endPoint[15].y3}`,
        `M ${x1} ${y1} Q ${x2} ${y2}, ${endPoint[16].x3} ${endPoint[16].y3}`,
    ];

    /*const eyArray = [ey]
    const calEyCord = (prevEy: number, ey: number) => {
        console.log("prevEy: " + prevEy + ", ey: " + ey)
        if (ey - prevEy >= 15) {
            eyArray.push(ey + 15)
            return ey + 15
        } else if (ey - prevEy < 15) {
            eyArray.push(ey)
            return ey
        }
    }*/




    return (<g>
            {value === 0 ? <></> : <>
                {/*<path style={{zIndex: 1}} d={`M ${x1} ${y1} Q ${x2} ${y2}, ${newEx} ${ey}`}
                      stroke={fill} fill="none"/>*/}
                <path d={paths[index]} stroke={fill} fill="none"/>
                {/*<text style={{fontSize: "12px", fontWeight: "500"}}
                      x={textAnchor === 'start' ? ex + 5 : ex - 5}
                      y={ey + 5}
                      textAnchor={textAnchor}
                      fill="#333">*/}
                    <text style={{fontSize: "12px", fontWeight: "500"}}
                          x={textAnchor === 'start' ? endPoint[index].x3 + 5 : endPoint[index].x3 - 5}
                          y={endPoint[index].y3 + 5}
                          textAnchor={textAnchor}
                          fill="#333">
                    {`${name}`} {`${(percent * 100) <= 3
                    ? Math.ceil(Number((percent * 100).toFixed(2)))
                    : Math.floor(Number((percent * 100).toFixed(2)))}% `}
                    {` (${value})`}
                </text>
            </>}
        </g>
    );
};

export default React.memo(QueueLabel);