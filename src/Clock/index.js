import { useCurrentTime } from "./useCurrentTime";
import { StyledClock } from "./styled";

const Clock = () => {

    const [time, timeFormat] = useCurrentTime()
    return (
        <StyledClock className="exchangeForm__clock">
            Dziś jest{" "}{timeFormat(time)}
        </StyledClock>
    );
};

export default Clock;
