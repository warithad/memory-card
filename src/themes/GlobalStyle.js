import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
    }

    .App{
        min-height: 100vh;
        min-width: 100vw;
        background-color: #f0fdf4;

        display: flex;
        flex-direction: column;
        justify-content: space-between;\
        gap: 1.5rem;
    }

    .card:hover{
        background-color: #ccfbf1;
    }
`

export default GlobalStyle;