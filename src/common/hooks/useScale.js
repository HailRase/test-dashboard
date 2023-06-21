import {useEffect, useMemo, useState} from "react";

export const useScale = () => {
    let innerWidth = window.innerWidth
    useMemo(()=> {
    }, [innerWidth])
    let initialScale = 1
    if (innerWidth === 1536){
        initialScale = 1.25
    } else if (innerWidth === 980){
        initialScale = 2
    } else if (innerWidth === 1920){
        initialScale = 1
    }
    const [scale, setScale] = useState(initialScale);
    useEffect(() => {
        function handleResize() {
            const newScale = window.devicePixelRatio || 1;
            setScale(newScale);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return scale
}