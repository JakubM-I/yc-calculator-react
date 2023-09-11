import styled from 'styled-components';

export const StyledForm = styled.form`
    max-width: 630px;
    width: 100%;
    margin: 25px auto 0;

    @media(max-width: 450px){
        flex-direction: column;
    }
`;

export const StyledLegend = styled.legend`
    padding: 8px;
    border: none;
    border-radius: 10px;
    background: #DEDEDC;
    box-shadow: 0px 0px 10px -4px;
    color:#615355;
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: min(max(4.26vw, 13px), 16px);
    
    @media(max-width: 599px){
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        top: 45px;
        text-align: center;
    }
`;

export const StyledLoadingInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-start: 10px;
    margin-block-end: 15px;
`;

export const StyledArrow  = styled.img`
    width: 40px;
    margin: 0 20px;

    @media(max-width: 450px){
        display: none;
    }
`;

export const StyledWrapper = styled.div`
    min-height: 215px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media(max-width: 450px){
        min-height: 255px;
    }
`;

export const StyledFormElements = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

    @media(max-width: 450px){
        flex-direction: column;
        margin-top: 60px;   
    }
`;