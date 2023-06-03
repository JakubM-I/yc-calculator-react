import './App.css';
import FieldSet from './Fieldset';
import Container from './Container';
import Form from './Form';
import ConvertedAmount from './ConvertedAmount';
import arrow from "./picture/arrow-icon.png";
import CurrencySwitch from './CurrencySwitch';
import Summary from './Summary';
import Buttons from './Buttons';

function App() {
  return (
    <div className="exchangeCalculator">
      <h1 className="exchangeCalculator__title">Kalkuator walutowy</h1>
      <form className="exchangeForm">
        <FieldSet>
          <legend className="exchangeForm__legend">Przelicz złotówki na wybraną walutę</legend>
          <Container>
            <Form>
              <ConvertedAmount />
              <img className="exchangeForm__arrow" src={arrow} alt="" />
              <CurrencySwitch />
            </Form>
            <Summary />
          </Container>
        </FieldSet>
        <Buttons />
      </form>
    </div>
  );
};

export default App;
