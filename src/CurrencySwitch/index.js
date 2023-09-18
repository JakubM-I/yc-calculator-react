import { StyleCurrencySelect } from "./styled";

const CurrencySwitch = ({rateData, currency, setCurrency}) => {

    return (
        <>
            <StyleCurrencySelect 
                value={currency}
                onChange={({target}) => setCurrency(target.value)}
            >
                {Object.keys(rateData.rates).map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </StyleCurrencySelect>
        </>
    )
};

export default CurrencySwitch;