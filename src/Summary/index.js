import "./style.css";

const Summary = ({recalculatedAmount}) => {
    console.log(recalculatedAmount);
    return (
        <div className="exchangeForm__items exchangeForm__summary">
            <p className={
                `exchangeForm__summaryResult 
                ${Object.keys(recalculatedAmount).length === 0 
                ? "exchangeForm__summaryResult--disabled" 
                : ""}`}
            >
                <span className="js-summaryConvertedAmount">
                    {`${recalculatedAmount.value1} ${recalculatedAmount.label1} = `}</span>
                <span className="exchangeForm__summaryAmount js-summaryResult">
                    {`${recalculatedAmount.value2} ${recalculatedAmount.label2}`}
                </span>
            </p>
            <p className="exchangeForm__summaryInformation">
                1 PLN = 
                <span className="js-selectedCurrencyPrice"></span>
                <span className="exchangeForm__summaryCurrency js-selectedCurrency"></span> 
                według średniego kursu NBP 
                <span className="js-selectedCurrencyRate"></span> 
                PLN z dnia 19.08.2022r.</p>
        </div>
    )
};

export default Summary;

// Object.keys(recalculatedAmount).length === 0