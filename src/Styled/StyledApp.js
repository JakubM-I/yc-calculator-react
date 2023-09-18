import styled from 'styled-components';

export const StyledApp = styled.div`
    width: 100%;
    max-width: 1000px;

    h1{
        max-width: 630px;
        width: 100%;
        text-align: center;
        padding: 5px;
        margin: 0 auto 25px;
        font-size: ${({theme}) => theme.fontsize.ftTitle};
        border-radius: 10px;
        background: ${({theme}) => theme.colors.bgTitle};
        backdrop-filter: blur(5px);
    }
`;