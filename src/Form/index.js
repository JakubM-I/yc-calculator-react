import { useState } from "react";
import arrow from "../picture/arrow-icon.png";
import FieldSet from '../Fieldset';
import ConvertedAmount from '../ConvertedAmount';
import CurrencySwitch from '../CurrencySwitch';
import Summary from '../Summary';
import Buttons from '../Buttons';
import Clock from "../Clock";
import { StyledForm, StyledTitle, StyledErroIcon, StyledArrow, StyledWrapper, StyledFormElements, StyledStatusInfo } from "./styled";
import { useRatesData } from "../hooks/useRatesData";
import { Waveform } from '@uiball/loaders'
import errorIcon from "../picture/error-icon.png"

const Form = ({calculateResult, convertedAmount, calcReset}) => {
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("EUR");
    const rateData = useRatesData();
    const [active, setActive] = useState(false);

    const formSubmit = (event) => {
        event.preventDefault();
    
        calculateResult(amount, currency);
        setActive(true);
      };
    
    return (
        <StyledForm onSubmit={formSubmit}>         
            <FieldSet>
            <Clock />
            <StyledTitle>Przelicz złotówki na wybraną walutę</StyledTitle>
                {rateData.status === "loading" ? (
                    <StyledStatusInfo>                     
                        <Waveform 
                            size={40}
                            lineWeight={3.5}
                            speed={1} 
                            color="black" 
                        />
                        <p>Momencik... Ładujemy najnowsze dane by wynik zawsze był aktualny</p>
                    </StyledStatusInfo>
                ) : rateData.status === "fail" ? (
                    <StyledStatusInfo>
                        <StyledErroIcon src={errorIcon}/>
                        <p>Upss.. Coś poszło nie tak. Sprawdź połączenie internetowe i spróbuj odświeżyć stronę.</p>
                    </StyledStatusInfo>

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
                        active={active}
                    />
                </StyledWrapper>
                )}
            </FieldSet>
            <Buttons 
                calcReset={calcReset} 
                setAmount={setAmount} 
                setCurrency={setCurrency} 
                setActive={setActive}
            />
        </StyledForm>
    )
};

export default Form;