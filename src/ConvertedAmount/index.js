import { StyledLabel, StyledAmountInput, StyledAmountWrapper } from "./styled";

const ConvertedAmount = ({amount, setAmount}) => {
    return (

    <StyledAmountWrapper as="div">
        <StyledAmountInput 
            id="amountInput"
            type="number"  
            placeholder="Wpisz kwotę" 
            required 
            value={amount} 
            onChange={({target}) => setAmount(target.value)}
            step="0.01" 
            min="0"
        />
        <StyledLabel htmlFor="amountInput"> 
        PLN
        </StyledLabel>
     </StyledAmountWrapper>

    )
};

export default ConvertedAmount;