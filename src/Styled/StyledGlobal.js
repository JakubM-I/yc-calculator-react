import { createGlobalStyle } from "styled-components";
import background from "../picture/background-img.jpg"

export const StyledCalculator = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root{
        background-image: url("${background}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        display: flex;
        justify-content: center;    
        align-items: center;
}
`;