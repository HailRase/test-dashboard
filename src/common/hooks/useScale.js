import {useEffect, useState} from "react";

export const useScale = () => {
    let initialScale = window.innerWidth
    if (initialScale < 1600){
        initialScale = 1.25
    } else {
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
    console.log(scale)
    return scale
}