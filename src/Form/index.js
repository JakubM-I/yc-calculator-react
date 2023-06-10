import "./style.css";
import arrow from "../picture/arrow-icon.png";
import FieldSet from '../Fieldset';
import ConvertedAmount from '../ConvertedAmount';
import CurrencySwitch from '../CurrencySwitch';
import Summary from '../Summary';
import Buttons from '../Buttons';


const Form = ({formSubmit, amount, setAmount, currency, setCurrency, convertedAmount, calcReset}) => (
    <form
        onSubmit={formSubmit}
        className="exchangeForm">
        <FieldSet>
        <legend className="exchangeForm__legend">Przelicz złotówki na wybraną walutę</legend>
            <div className="exchangeForm__itemSet">
                <div className="exchangeForm__form">
                    <ConvertedAmount amount={amount} setAmount={setAmount} />
                    <img className="exchangeForm__arrow" src={arrow} alt="" />
                    <CurrencySwitch currency={currency} setCurrency={setCurrency} />
                </div>
                <Summary convertedAmount={convertedAmount} currency={currency} />
            </div>
        </FieldSet>
        <Buttons calcReset={calcReset} />
    </form>
);

export default Form;