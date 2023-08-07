import { useEffect, useState } from "react";

export const useCurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeUpdate = setInterval(() => {
            const nowDate = new Date();
            setTime(nowDate)
        }, 1000);

        return () => clearInterval(timeUpdate);
    
    }, [])

    const timeFormat = (time) => 
    time.toLocaleString([], {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    return [time, timeFormat];
};