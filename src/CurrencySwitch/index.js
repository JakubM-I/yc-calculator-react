import { currencies } from "../Currencies";
import { StyledSwitch, StyledItem, StyledCurrencyLabel, StyledInput } from "./styled";

const CurrencySwitch = ({currency, setCurrency}) => {
    return (
        <>
            <StyledSwitch>
                {currencies.map(currencyType => (
                    <StyledItem key={currencyType.label}>
                        <StyledInput
                            id={currencyType.currencyName}
                            type="radio"
                            name="currency"
                            value={currencyType.label}
                            checked={currency === currencyType.label}
                            onChange={({ target }) => setCurrency(target.value)}
                        />
                        <StyledCurrencyLabel
                            htmlFor={currencyType.currencyName}>
                            {currencyType.currencyName}
                        </StyledCurrencyLabel>
                    </StyledItem>
                ))}
            </StyledSwitch>
        </>
    )
};

export default CurrencySwitch;