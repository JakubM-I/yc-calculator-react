import styled from 'styled-components';

export const StyledLabel = styled.label`
    text-align: center;
    font-size:min(max(6.10vw, 16px), 20px);
`;

export const StyledAmountInput = styled.input`
    width: 120px;
    height: 50px;
    font-size: 22px;
    padding: 4px;
    border-radius: 5px;
    border: 1px solid #000;  
    margin-left: 5px; 

    &::placeholder{
        font-size: 14px;
    }
`;