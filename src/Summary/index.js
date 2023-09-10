// import "./style.css";
import { StyledSummary, StyledResult, StyledSummaryAmount, StyledSummaryInformation } from "./styled";

const Summary = ({rateData, convertedAmount, currency}) => {
    const summaryCurrencyPrice = `${Object.keys(convertedAmount).length === 0 
        ? (rateData.rates[currency]).toFixed(3) 
        : (+convertedAmount.rate).toFixed(3)}`;

    const summaryCurrency = `${Object.keys(convertedAmount).length === 0 
        ? (currency) 
        : (convertedAmount.currencyOutLabel)}`;
    
    return (
        <StyledSummary>
            
            <StyledResult>
                {Object.keys(convertedAmount).length !== 0 && (
                    <>
                        <span>
                            {`${convertedAmount.currencyIn} 
                            ${convertedAmount.currencyInLabel} = `}
                        </span>
                        <StyledSummaryAmount>
                            {`${(+convertedAmount.currencyOut).toFixed(2)} 
                            ${convertedAmount.currencyOutLabel}`}
                        </StyledSummaryAmount>
                    </>
                )}
            </StyledResult>
            <StyledSummaryInformation>
                1 PLN = {summaryCurrencyPrice} {summaryCurrency}{" "}
                według średniego kursu EBC.
            </StyledSummaryInformation>
            <StyledSummaryInformation>
                Tabela kursów aktualna na dzień {rateData.date}r.</StyledSummaryInformation>
        </StyledSummary>
    )
};

export default Summary;