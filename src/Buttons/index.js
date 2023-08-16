// import "./style.css";
import { StyledButtonSubmit, StyledButtonReset } from "./styled";

const Buttons = ({calcReset, setAmount, setCurrency}) => (
    <>
        <StyledButtonSubmit  
            type="submit">
            Wylicz
        </StyledButtonSubmit>
        <StyledButtonReset 
            onClick={() => calcReset(setAmount, setCurrency)}
            type="reset">
            Resetuj kalkulator
        </StyledButtonReset>
    </>
);

export default Buttons;