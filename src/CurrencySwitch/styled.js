import styled from 'styled-components';

export const StyledSwitch = styled.ul`
    list-style: none;
    padding-left: 0px;
    cursor: pointer;

    @media(max-width: 450px){
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
`;

export const StyledItem = styled.li`
      padding-bottom: 5px;
`;
export const StyledCurrencyLabel = styled.label`
    cursor: pointer;
    text-transform: capitalize;
`;

export const StyledInput = styled.input.attrs({type: "radio"})`
    cursor: pointer;
    margin-right: 5px;

    &:checked + label{
        font-weight: 700;
        color: #615355;
    }
`;