// import "./style.css";
import { StyledSummary, StyledResult, StyledSummaryAmount, StyledSummaryInformation } from "./styled";
import { currencies } from "../Currencies";
import { useRates } from '../hooks/useRate';

const Summary = ({convertedAmount}) => {
    const calcData = useRates()
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
                według średniego kursu EBC {summaryCurrencyRate}{" "}
                PLN.</StyledSummaryInformation>
            <StyledSummaryInformation>
                Tabela kursów aktualna na dzień {calcData.rateDate}r.</StyledSummaryInformation>
        </StyledSummary>
    )
};

export default Summary;