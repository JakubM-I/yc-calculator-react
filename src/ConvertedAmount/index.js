import "./style.css";

const ConvertedAmount = () => (
    <label class="exchangeForm__items exchangeForm__convertedLabel">
        Kwota w PLN: 
        <input 
            type="number" 
            class="exchangeForm__convertedAmount" 
            placeholder="Wpisz kwotę" 
            required 
            value="1" 
            step="0.01" 
            min="0"
        />
    </label>
);

export default ConvertedAmount;