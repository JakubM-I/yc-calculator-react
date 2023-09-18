import styled from "styled-components";

export const StyledClock = styled.p`
    text-align: right;
    font-size: ${({theme}) => theme.fontsize.ftClock};
    font-family: 'Roboto Mono', monospace;
    margin-top: 0px;
    padding-right: 5px;
`;