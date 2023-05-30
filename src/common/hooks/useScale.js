import {useEffect, useState} from "react";

export const useScale = () => {
    const [scale, setScale] = useState(1.25);

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