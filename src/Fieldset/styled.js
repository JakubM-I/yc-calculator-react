import styled from 'styled-components';

export const StyledFieldSet = styled.fieldset`
    padding: 16px;
    background: ${({theme}) => theme.colors.bgForm};
    color: ${({theme}) => theme.colors.ftMain};
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 17px -7px ${({theme}) => theme.colors.ftMain};
    position: relative;
`;