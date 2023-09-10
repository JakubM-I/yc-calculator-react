import { useState } from 'react';
import Form from './Form';
import { currencies } from './Currencies';
import { StyledCalculator } from './Styled/StyledGlobal';
import { StyledApp } from './Styled/StyledApp';
import { useRatesData } from './hooks/useRatesData';

function App() {
  const [convertedAmount, setConvertedAmount] = useState({});
  const calcData = useRatesData();

  const calculateResult = (amount, currency) => {

    setConvertedAmount({
      currencyIn: amount,
      currencyInLabel: "PLN",
      currencyOut: `${(amount * calcData.rates[currency])}`,
      currencyOutLabel: currency,
      exchangeRate: calcData.rates[currency],
      rate: `${(calcData.rates[currency])}`,
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
      <StyledApp>
        <h1>Kalkuator walutowy</h1>
        <Form 
          calculateResult={calculateResult}
          convertedAmount={convertedAmount}
          calcReset={calcReset}
        />
      </StyledApp>
    </>
  );
};

export default App;
