import { currencies } from "../Currencies";
import { StyledSwitch, StyledItem, StyledCurrencyLabel, StyledInput } from "./styled";
import { useRatesData } from "../hooks/useRatesData";
import { useState } from 'react';


const CurrencySwitch = ({rateData, currency, setCurrency}) => {

    return (
        <>
            <select 
                value={currency}
                onChange={({target}) => setCurrency(target.value)}
            >
                {Object.keys(rateData.rates).map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            {/* <StyledSwitch>
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
            </StyledSwitch> */}
        </>
    )
};

export default CurrencySwitch;