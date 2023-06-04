import "./style.css";

const CurrencySwitch = ({currency, setCurrency}) => {

    return (
    <ul className="exchangeForm__items exchangeForm__currencySwitch">
        <li className="exchangeForm__currencies">
            <input 
                className="js-euro" 
                id="euro" 
                type="radio" 
                name="exchange_rate" 
                value="1"
                checked={currency === "1"}
                onChange={({target}) => setCurrency(target.value)} 
            />
            <label 
                className="exchangeForm__label" 
                htmlFor="euro">
                Euro
            </label>
        </li>
        <li className="exchangeForm__currencies">
            <input 
                className="js-dolar" 
                id="dolar" 
                type="radio" 
                name="exchange_rate" 
                value="2"
                checked={currency === "2"}
                onChange={({target}) => setCurrency(target.value)}
            />
            <label 
                className="exchangeForm__label" 
                htmlFor="dolar">
                Dolar
            </label>
        </li>
        <li className="exchangeForm__currencies">
            <input 
                className="js-frank" 
                id="frank" 
                type="radio" 
                name="exchange_rate" 
                value="3"
                checked={currency === "3"}
                onChange={({target}) => setCurrency(target.value)}
            />
            <label 
                className="exchangeForm__label" 
                htmlFor="frank">
                Frank
            </label>
        </li>
    </ul>
    )
};

export default CurrencySwitch;