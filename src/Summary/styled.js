import styled, {css} from 'styled-components';

export const StyledSummary = styled.div`
    text-align: center;
    margin-top: auto;
`;

export const StyledResult = styled.div`
    font-size: ${({theme}) => theme.fontsize.ftResult};
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transition: max-height .85s ease-in, opacity 1s ease-in, visibility 1s ease-in;

    ${({active}) => active && css`
        max-height: 1.5em;
        visibility: visible;
        opacity: 1;
    `}
`;

export const StyledSummaryAmount = styled.span`
    font-weight: 700;
    text-transform: uppercase;
`;

export const StyledSummaryInformation  = styled.p`
    font-size: ${({theme}) => theme.fontsize.ftSummary};
`;