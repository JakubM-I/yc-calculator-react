import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Form from './Form';
import { currencies } from './Currencies';
import { StyledCalculator } from './Styled/StyledGlobal';
import { StyledApp } from './Styled/StyledApp';
import { useRatesData } from './hooks/useRatesData';
import { theme } from './theme/theme';


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
  


  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledCalculator  />
        <StyledApp>
          <h1>Kalkuator walutowy</h1>
          <Form 
            calculateResult={calculateResult}
            convertedAmount={convertedAmount}
            setConvertedAmount={setConvertedAmount}
          />
        </StyledApp>
      </>
    </ThemeProvider>
  );
};

export default App;
