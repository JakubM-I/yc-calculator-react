import styled from 'styled-components';

export const StyledLabel = styled.label`
    text-align: center;
    font-size:min(max(6.10vw, 16px), 20px);
    padding-inline: 4px;
`;

export const StyledAmountInput = styled.input`
    width: 120px;
    height: 50px;
    font-size: 22px;
    padding: 4px;
    overflow: hidden;

    &::placeholder{
        font-size: 14px;
    }

    @media(max-width: 450px){
        flex-grow: 1;
    }
`;

export const StyledAmountWrapper = styled(StyledAmountInput)`
    width: 160px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    border: 1px solid #000; 

    @media(max-width: 450px){
        width: calc(100% - 1em);
    }
`