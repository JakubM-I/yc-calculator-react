import "./style.css";
import { currencies } from "../Currencies";

const Summary = ({convertedAmount, currency}) => {
    return (
        <div className="exchangeForm__items exchangeForm__summary">
            
                <p className="exchangeForm__summaryResult"
                >
                    {Object.keys(convertedAmount).length !== 0 &&(
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
        
            {/* <p className={
                `exchangeForm__summaryResult 
                ${Object.keys(convertedAmount).length === 0 
                ? "exchangeForm__summaryResult--disabled" 
                : ""}`}
            >
                <span>
                    {`${convertedAmount.currencyIn} 
                    ${convertedAmount.currencyInLabel} = `}
                </span>
                <span className="exchangeForm__summaryAmount">
                    {`${(+convertedAmount.currencyOut).toFixed(2)} 
                    ${convertedAmount.currencyOutLabel}`}
                </span>
            </p> */}
            <p className="exchangeForm__summaryInformation">
                1 PLN = 
                <span>
                    {` ${Object.keys(convertedAmount).length === 0 
                        ? (1 / currencies[0].currencyRate).toFixed(3) 
                        : (+convertedAmount.rate).toFixed(3)} 
                        ${Object.keys(convertedAmount).length === 0 
                        ? (currencies[0].label) 
                        : (convertedAmount.currencyOutLabel)} `
                    }
                </span>
                według średniego kursu NBP 
                <span>
                    {` ${Object.keys(convertedAmount).length === 0 
                        ? (currencies[0].currencyRate).toFixed(3) 
                        : (+convertedAmount.exchangeRate).toFixed(3)} `
                    }
                </span> 
                PLN z dnia 19.08.2022r.</p>
        </div>
    )
};

export default Summary;

// Object.keys(convertedAmount).length === 0