import styled, {css} from 'styled-components';

export const StyledSummary = styled.div`
    text-align: center;
    margin-top: auto;
`;

export const StyledResult = styled.div`
    font-size: min(max(6vw, 18px), 22px);
    margin-top: 0px;
    height: 0;
    transition: height ease-in 1s;

    ${({active}) => active && css`
        height: 1.5em;
    `}
`;

export const StyledSummaryAmount = styled.span`
    font-weight: 700;
    text-transform: uppercase;
`;

export const StyledSummaryInformation  = styled.p`
    font-size: 13px;
`;