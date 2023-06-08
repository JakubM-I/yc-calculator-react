import "./style.css";

const Buttons = ({calcReset}) => (
    <>
        <button 
            className="exchangeForm__buttonSubmit" 
            type="submit">
            Wylicz
        </button>
        <button 
            onClick={calcReset}
            className="exchangeForm__buttonReset" 
            type="reset">
            Resetuj kalkulator
        </button>
    </>
);

export default Buttons;