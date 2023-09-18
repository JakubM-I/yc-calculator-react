import styled from 'styled-components';

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