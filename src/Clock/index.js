import { useEffect, useState } from "react";
import "./style.css"

const weekDays = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

const Clock = () => {

    const [day, setDay] = useState(0);
    const [currentDate, setCurrentDate] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timeUpdate = setInterval(() => {
            const nowDate = new Date();

            setDay(nowDate.getDay());
            setCurrentDate(nowDate);
            setHour(nowDate.getHours());
            setMinutes(nowDate.getMinutes());
            setSeconds(nowDate.getSeconds());
        }, 1000);

        return () => clearInterval(timeUpdate);
    
    }, [])

    const timeFormat = (number) => {
        return number.toLocaleString([], { minimumIntegerDigits: 2 });
    };

    const currentDay = () => {
        return weekDays.filter(weekDay => (weekDays.indexOf(weekDay) + 1) === day);
    };

    return (
        <p className="exchangeForm__clock">
            Dziś jest{" "}
            <span className="exchangeForm__clock--day">{currentDay()}</span>{", "}
            {currentDate.toLocaleString([], {day: "numeric", month: "long"})}{", "}
            {timeFormat(hour)}{" : "}
            {timeFormat(minutes)}{" : "}
            {timeFormat(seconds)}
        </p>
    );
};

export default Clock;
