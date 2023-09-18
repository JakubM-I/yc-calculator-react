import styled from 'styled-components';

export const StyledButtonSubmit  = styled.button`
    width: 150px;
    padding: 15px 10px;
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    background: ${({theme}) => theme.colors.ftMain};
    border: none;
    color: ${({theme}) => theme.colors.ftButton};
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease-in, color .3s ease-in;

    &:hover{
        background: ${({theme}) => theme.colors.bgBtnHov};
        color: ${({theme}) => theme.colors.ftBtnHov};
    }
`;

export const StyledButtonReset = styled.button`
    width: fit-content;
    display: block;
    background: ${({theme}) => theme.colors.bgReset};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 auto;
    margin-top: 10px;
    color: ${({theme}) => theme.colors.ftButton};
    text-decoration: underline;
    cursor: pointer;
    transition: color .3s ease-in;

    &:hover{
        color: ${({theme}) => theme.colors.ftBtnResHov};
    }
`;