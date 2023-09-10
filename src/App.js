import { useState } from 'react';
import Form from './Form';
import { currencies } from './Currencies';
import { StyledCalculator } from './Styled/StyledGlobal';
import { StyledApp } from './Styled/StyledApp';
import { useRatesData } from './hooks/useRate';

function App() {
  const [convertedAmount, setConvertedAmount] = useState({});
  const calcData = useRatesData();

  const calculateResult = (amount, currency) => {

    setConvertedAmount({
      currencyIn: amount,
      currencyInLabel: "PLN",
      currencyOut: `${(amount * calcData.rateRates[currency])}`,
      currencyOutLabel: currency,
      exchangeRate: calcData.rateRates[currency],
      rate: `${(calcData.rateRates[currency])}`,
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
