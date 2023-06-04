import "./style.css";

const ConvertedAmount = ({amount, setAmount}) => {
    return (
    <label className="exchangeForm__items exchangeForm__convertedLabel">
        Kwota w PLN: 
        <input 
            type="number" 
            className="exchangeForm__convertedAmount" 
            placeholder="Wpisz kwotę" 
            required 
            value={amount} 
            onChange={({target}) => setAmount(target.value)}
            step="0.01" 
            min="0"
        />
    </label>
    )
};

export default ConvertedAmount;