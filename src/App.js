import { useState } from 'react';
import Form from './Form';
import { currencies } from './Currencies';
import { StyledCalculator } from './Styled/StyledGlobal';
import { StyledApp } from './Styled/StyledApp';
import { useRates } from './hooks/useRate';

function App() {
  const [convertedAmount, setConvertedAmount] = useState({});
  const calcData = useRates();

  const calculateResult = (amount, currency) => {
    const selectedCurrency = currencies.find(({label}) => currency === label )

    setConvertedAmount({
      currencyIn: amount,
      currencyInLabel: "PLN",
      currencyOut: `${(amount * (1 / calcData.rateRates[currency]))}`,
      currencyOutLabel: selectedCurrency.label,
      exchangeRate: calcData.rateRates[currency],
      rate: `${(1 / calcData.rateRates[currency])}`,
      // data: calcData.rateDate,
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
