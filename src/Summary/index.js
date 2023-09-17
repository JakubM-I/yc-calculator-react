// import "./style.css";
import { StyledSummary, StyledResult, StyledSummaryAmount, StyledSummaryInformation } from "./styled";

const Summary = ({rateData, convertedAmount, currency, active}) => {
    const summaryCurrencyPrice = `${Object.keys(convertedAmount).length === 0 
        ? (rateData.rates["EUR"]).toFixed(3) 
        : (+convertedAmount.rate).toFixed(3)}`;

    const summaryCurrency = `${Object.keys(convertedAmount).length === 0 
        ? "EUR"
        : (convertedAmount.currencyOutLabel)}`;
    console.log(rateData.date)
    
    return (
        <StyledSummary>
            
            <StyledResult active={active} >
                {Object.keys(convertedAmount).length !== 0 && (
                    <p>
                        <span>
                            {`${convertedAmount.currencyIn} 
                            ${convertedAmount.currencyInLabel} = `}
                        </span>
                        <StyledSummaryAmount>
                            {`${(+convertedAmount.currencyOut).toFixed(2)} 
                            ${convertedAmount.currencyOutLabel}`}
                        </StyledSummaryAmount>
                    </p>
                )}
            </StyledResult>
            <StyledSummaryInformation>
                1 PLN = {summaryCurrencyPrice}{" "}{summaryCurrency}{" "}
                według średniego kursu EBC.
            </StyledSummaryInformation>
            <StyledSummaryInformation>
                Tabela kursów aktualna na dzień {rateData.date}r.</StyledSummaryInformation>
        </StyledSummary>
    )
};

export default Summary;