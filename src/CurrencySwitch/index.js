import "./style.css";
import { currencies } from "../Currencies";

const CurrencySwitch = ({currency, setCurrency}) => {
    return (
        <>
            <ul className="exchangeForm__items exchangeForm__currencySwitch">
                {currencies.map(currencyType => (
                    <li key={currencyType.label} className="exchangeForm__currencies">
                        <input
                            id={currencyType.currencyName}
                            type="radio"
                            name="currency"
                            value={currencyType.label}
                            checked={currency === currencyType.label}
                            onChange={({ target }) => setCurrency(target.value)}
                        />
                        <label
                            className="exchangeForm__label"
                            htmlFor={currencyType.currencyName}>
                            {currencyType.currencyName}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default CurrencySwitch;