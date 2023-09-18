import styled from 'styled-components';

export const StyledLabel = styled.label`
    text-align: center;
    font-size: ${({theme}) => theme.fontsize.ftFormInput};
    padding-inline: 4px;
`;

export const StyledAmountInput = styled.input`
    width: 120px;
    height: 50px;
    font-size: ${({theme}) => theme.fontsize.ftFormInput};
    padding: 4px;
    overflow: hidden;

    &::placeholder{
        font-size: 14px;
    }

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
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
    border: 1px solid ${({theme}) => theme.colors.brInput}; 

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        width: calc(100% - 1em);
    }
`