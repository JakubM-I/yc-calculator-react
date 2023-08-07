import { useCurrentTime } from "./useCurrentTime";
import "./style.css"

const Clock = () => {

    const [time, timeFormat] = useCurrentTime()
    return (
        <p className="exchangeForm__clock">
            Dziś jest{" "}{timeFormat(time)}
        </p>
    );
};

export default Clock;
