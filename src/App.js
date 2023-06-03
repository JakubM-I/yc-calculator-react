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
  const [currency, setCurrency] = useState("1");
  const [recalculatedAmount, setRecalculatedAmount] = useState({})

  // let recalculatedAmount = {};

  const formSubmit = (event) => {
    event.preventDefault();

    setRecalculatedAmount(recalculatedAmount =>  ({
      value1: amount,
      label1: "PLN",
      value2: `${(amount * (1 / currencies[currency - 1].currencyRate)).toFixed(2)}`,
      label2: `${currencies[currency - 1].label}`
    }))
    // let recalculatedAmount = {
    //   value1: amount,
    //   label1: "PLN",
    //   value2: `${(amount * (1 / currencies[currency - 1].currencyRate)).toFixed(2)}`,
    //   label2: `${currencies[currency - 1].label}`
    // }
    // console.log(recalculatedAmount);
    // console.log(`${(amount * (1 / currencies[currency - 1].currencyRate)).toFixed(2)} ${currencies[currency - 1].label}`)

  }
  console.log(recalculatedAmount);
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
            <Summary recalculatedAmount={recalculatedAmount} />
          </Container>
        </FieldSet>
        <Buttons />
      </form>
    </div>
  );
};

export default App;
