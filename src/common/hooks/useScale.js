import {useEffect, useMemo, useState} from "react";

export const useScale = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useMemo(()=> {
        setInnerWidth(window.innerWidth)
    }, [window.innerWidth])

    let initialScale = 1
    if (innerWidth === 1536){
        initialScale = 1.25
    } else if (innerWidth === 980){
        initialScale = 2
    } else if (innerWidth === 1920){
        initialScale = 1
    }
    console.log(Number(localStorage.getItem("scale")))
    const [scale, setScale] = useState(initialScale);

    useEffect(() => {
        function handleResize() {
            const newScale = window.devicePixelRatio || 1;
            setScale(newScale);
            localStorage.setItem("scale", JSON.stringify(newScale))
            console.log(newScale)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [window.devicePixelRatio]);
    return scale
}