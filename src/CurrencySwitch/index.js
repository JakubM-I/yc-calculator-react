import "./style.css";

const CurrencySwitch = () => (
    <ul className="exchangeForm__items exchangeForm__currencySwitch">
        <li className="exchangeForm__currencies">
            <input 
                className="js-euro" 
                id="euro" 
                type="radio" 
                name="exchange_rate" 
                value="euro" 
                checked 
            />
            <label 
                className="exchangeForm__label" 
                for="euro">
                Euro
            </label>
        </li>
        <li className="exchangeForm__currencies">
            <input 
                className="js-dolar" 
                id="dolar" 
                type="radio" 
                name="exchange_rate" 
                value="dolar"
            />
            <label 
                className="exchangeForm__label" 
                for="dolar">
                Dolar
            </label>
        </li>
        <li className="exchangeForm__currencies">
            <input 
                className="js-frank" 
                id="frank" 
                type="radio" 
                name="exchange_rate" 
                value="frank"
            />
            <label 
                className="exchangeForm__label" 
                for="frank">
                Frank
            </label>
        </li>
    </ul>
);

export default CurrencySwitch;