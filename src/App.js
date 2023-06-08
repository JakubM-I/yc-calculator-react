import { useState } from 'react';
import './App.css';
import FieldSet from './Fieldset';
import Container from './Container';
import Form from './Form';
import ConvertedAmount from './ConvertedAmount';
import arrow from "./picture/arrow-icon.png";
import CurrencySwitch from './CurrencySwitch';
import Summary from './Summary';
import Buttons from './Buttons';
import { currencies } from './Currencies';

function App() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState(currencies[0].label);
  const [convertedAmount, setConvertedAmount] = useState({});

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({label}) => currency === label )

    setConvertedAmount({
      currencyIn: amount,
      currencyInLabel: "PLN",
      currencyOut: `${(amount * (1 / selectedCurrency.currencyRate))}`,
      currencyOutLabel: selectedCurrency.label,
      exchangeRate: selectedCurrency.currencyRate,
      rate: `${(1 / selectedCurrency.currencyRate)}`,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    calculateResult();
  };
  
  const calcReset = () => {
    setAmount(1);
    setCurrency(currencies[0].id);
    setConvertedAmount({})
  };

  return (
    <div className="exchangeCalculator">
      <h1 className="exchangeCalculator__title">Kalkuator walutowy</h1>
      <form 
        onSubmit={formSubmit}
        className="exchangeForm">
        <FieldSet>
          <legend className="exchangeForm__legend">Przelicz złotówki na wybraną walutę</legend>
          <Container>
            <Form>
              <ConvertedAmount amount={amount} setAmount={setAmount}/>
              <img className="exchangeForm__arrow" src={arrow} alt="" />
              <CurrencySwitch currency={currency} setCurrency={setCurrency}/>
            </Form>
            <Summary convertedAmount={convertedAmount} currency={currency} />
          </Container>
        </FieldSet>
        <Buttons calcReset={calcReset} />
      </form>
    </div>
  );
};

export default App;
