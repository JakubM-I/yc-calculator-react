import "./style.css";

const Buttons = () => (
    <>
        <button 
            className="exchangeForm__buttonSubmit" 
            type="submit">
            Wylicz
        </button>
        <button 
            className="exchangeForm__buttonReset" 
            type="reset">
            Resetuj kalkuator
        </button>
    </>
);

export default Buttons;