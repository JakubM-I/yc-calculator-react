import { useState } from "react";
import arrow from "../picture/arrow-icon.png";
import FieldSet from '../Fieldset';
import ConvertedAmount from '../ConvertedAmount';
import CurrencySwitch from '../CurrencySwitch';
import Summary from '../Summary';
import Buttons from '../Buttons';
import { currencies } from "../Currencies";
import Clock from "../Clock";
import { StyledForm, StyledTitle, StyledArrow, StyledWrapper, StyledFormElements, StyledLoadingInfo } from "./styled";
import { useRatesData } from "../hooks/useRatesData";
import { Waveform } from '@uiball/loaders'

const Form = ({calculateResult, convertedAmount, calcReset}) => {
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("EUR");
    const rateData = useRatesData();

    const formSubmit = (event) => {
        event.preventDefault();
    
        calculateResult(amount, currency);
      };
    
    return (
        <StyledForm onSubmit={formSubmit}>         
            <FieldSet>
            <Clock />
            <StyledTitle>Przelicz złotówki na wybraną walutę</StyledTitle>
                {rateData.status === "loading" ? (
                    <StyledLoadingInfo>                     
                        <Waveform 
                            size={40}
                            lineWeight={3.5}
                            speed={1} 
                            color="black" 
                        />
                        <p>Momencik... Ładujemy najnowsze dane by wynik zawsze był aktualny</p>
                    </StyledLoadingInfo>
                ) : (
                    <StyledWrapper>
                    <StyledFormElements>
                        <ConvertedAmount 
                            amount={amount} 
                            setAmount={setAmount} 
                        />
                        <StyledArrow src={arrow} alt="" />
                        <CurrencySwitch 
                            rateData={rateData}
                            currency={currency} 
                            setCurrency={setCurrency} 
                        />
                    </StyledFormElements>
                    <Summary 
                        rateData={rateData}
                        convertedAmount={convertedAmount} 
                        currency={currency} 
                    />
                </StyledWrapper>
                )}
            </FieldSet>
            <Buttons 
                calcReset={calcReset} 
                setAmount={setAmount} 
                setCurrency={setCurrency} 
            />
        </StyledForm>
    )
};

export default Form;