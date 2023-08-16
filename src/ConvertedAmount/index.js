import { StyledLabel, StyledAmountInput } from "./styled";

const ConvertedAmount = ({amount, setAmount}) => {
    return (
    <StyledLabel>
        Kwota w PLN: 
        <StyledAmountInput 
            type="number"  
            placeholder="Wpisz kwotę" 
            required 
            value={amount} 
            onChange={({target}) => setAmount(target.value)}
            step="0.01" 
            min="0"
        />
    </StyledLabel>
    )
};

export default ConvertedAmount;