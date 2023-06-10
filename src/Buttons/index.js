import "./style.css";

const Buttons = ({calcReset, setAmount, setCurrency}) => (
    <>
        <button 
            className="exchangeForm__buttonSubmit" 
            type="submit">
            Wylicz
        </button>
        <button 
            onClick={() => calcReset(setAmount, setCurrency)}
            className="exchangeForm__buttonReset" 
            type="reset">
            Resetuj kalkulator
        </button>
    </>
);

export default Buttons;