import "./style.css";

const Summary = () => (
    <div className="exchangeForm__items exchangeForm__summary">
        <p className="exchangeForm__summaryResult">
            <span className="js-summaryConvertedAmount"></span>
            <span className="exchangeForm__summaryAmount js-summaryResult"></span>
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

export default Summary;