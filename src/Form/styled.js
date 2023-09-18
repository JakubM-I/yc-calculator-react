import styled from 'styled-components';

export const StyledForm = styled.form`
    max-width: 630px;
    width: 100%;
    margin: 25px auto 0;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-direction: column;
    }
`;

export const StyledTitle = styled.h2`
    padding: 8px;
    text-align: center;
    background: ${({theme}) => theme.colors.bgHeader};
    color: ${({theme}) => theme.colors.ftMain};
    font-size: ${({theme}) => theme.fontsize.ftFormHeader};
`;

export const StyledStatusInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 15px;

    p{
        font-size: ${({theme}) => theme.fontsize.ftStatus};
        text-align: center;
    }
`;

export const StyledErroIcon = styled.img`
    max-width: min(max(6.10vw, 26px), 36px);
    margin-right: 3px;
`;

export const StyledArrow  = styled.img`
    width: 40px;
    margin: 0 20px;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        display: none;
    }
`;

export const StyledWrapper = styled.div`
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        min-height: 255px;
    }
`;

export const StyledFormElements = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-direction: column;
        margin-top: 25px;
        gap: 5px;
    }
`;