import { useState } from "react";
import "./style.css";
import arrow from "../picture/arrow-icon.png";
import FieldSet from '../Fieldset';
import ConvertedAmount from '../ConvertedAmount';
import CurrencySwitch from '../CurrencySwitch';
import Summary from '../Summary';
import Buttons from '../Buttons';
import { currencies } from "../Currencies";

const Form = ({calculateResult, convertedAmount, calcReset}) => {
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState(currencies[0].label);

    const formSubmit = (event) => {
        event.preventDefault();
    
        calculateResult(amount, currency);
      };
    
    return (
        <form
            onSubmit={formSubmit}
            className="exchangeForm">
            <FieldSet>
            <legend className="exchangeForm__legend">Przelicz złotówki na wybraną walutę</legend>
                <div className="exchangeForm__itemSet">
                    <div className="exchangeForm__form">
                        <ConvertedAmount 
                            amount={amount} 
                            setAmount={setAmount} 
                        />
                        <img className="exchangeForm__arrow" src={arrow} alt="" />
                        <CurrencySwitch 
                            currency={currency} 
                            setCurrency={setCurrency} 
                        />
                    </div>
                    <Summary 
                        convertedAmount={convertedAmount} 
                        currency={currency} 
                    />
                </div>
            </FieldSet>
            <Buttons 
                calcReset={calcReset} 
                setAmount={setAmount} 
                setCurrency={setCurrency} 
            />
        </form>
    )
};

export default Form;