import styled from 'styled-components';

export const StyledSwitch = styled.ul`
    list-style: none;
    padding-left: 0px;
    cursor: pointer;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
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

export const StyleCurrencySelect = styled.select`
    width: 120px;
    height: 50px;
    font-size: ${({theme}) => theme.fontsize.ftFormInput};
    padding: 4px;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.colors.brInput};

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        width: calc(100% - 1em);
    }
`;