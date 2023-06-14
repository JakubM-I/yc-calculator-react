import "./style.css";
import { currencies } from "../Currencies";

const Summary = ({convertedAmount}) => {
    const summaryCurrencyPrice = `${Object.keys(convertedAmount).length === 0 
        ? (1 / currencies[0].currencyRate).toFixed(3) 
        : (+convertedAmount.rate).toFixed(3)}`;

    const summaryCurrency = `${Object.keys(convertedAmount).length === 0 
        ? (currencies[0].label) 
        : (convertedAmount.currencyOutLabel)}`;

    const summaryCurrencyRate = `${Object.keys(convertedAmount).length === 0 
        ? (currencies[0].currencyRate).toFixed(3) 
        : (+convertedAmount.exchangeRate).toFixed(3)}`;
    
    return (
        <div className="exchangeForm__items exchangeForm__summary">
            
            <p className="exchangeForm__summaryResult">
                {Object.keys(convertedAmount).length !== 0 && (
                    <>
                        <span>
                            {`${convertedAmount.currencyIn} 
                            ${convertedAmount.currencyInLabel} = `}
                        </span>
                        <span className="exchangeForm__summaryAmount">
                            {`${(+convertedAmount.currencyOut).toFixed(2)} 
                            ${convertedAmount.currencyOutLabel}`}
                        </span>
                    </>
                )}
            </p>
            <p className="exchangeForm__summaryInformation">
                1 PLN = {summaryCurrencyPrice} {summaryCurrency}{" "}
                według średniego kursu NBP {summaryCurrencyRate}{" "}
                PLN z dnia 19.08.2022r.</p>
        </div>
    )
};

export default Summary;