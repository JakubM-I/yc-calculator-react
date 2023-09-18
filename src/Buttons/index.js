import { StyledButtonSubmit, StyledButtonReset } from "./styled";

const Buttons = ({calcReset, setAmount, setCurrency, setActive}) => (
    <>
        <StyledButtonSubmit  
            type="submit">
            Wylicz
        </StyledButtonSubmit>
        <StyledButtonReset 
            onClick={() => calcReset(setAmount, setCurrency, setActive)}
            type="reset">
            Resetuj kalkulator
        </StyledButtonReset>
    </>
);

export default Buttons;