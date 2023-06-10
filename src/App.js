import { useState } from 'react';
import './App.css';
import Form from './Form';
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
      <Form 
        formSubmit={formSubmit}
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
        convertedAmount={convertedAmount}
        calcReset={calcReset}
      />
    </div>
  );
};

export default App;
