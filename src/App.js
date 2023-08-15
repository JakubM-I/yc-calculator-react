import { useState } from 'react';
import './App.css';
import Form from './Form';
import { currencies } from './Currencies';
import { StyledCalculator } from './Styled/StyledGlobal';

function App() {
  const [convertedAmount, setConvertedAmount] = useState({});

  const calculateResult = (amount, currency) => {
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
  
  const calcReset = (setAmount, setCurrency) => {
    setAmount(1);
    setCurrency(currencies[0].id);
    setConvertedAmount({})
  };

  return (
    <>
      <StyledCalculator  />
      <div className="exchangeCalculator">
        <h1 className="exchangeCalculator__title">Kalkuator walutowy</h1>
        <Form 
          calculateResult={calculateResult}
          convertedAmount={convertedAmount}
          calcReset={calcReset}
        />
      </div>
    </>
  );
};

export default App;
