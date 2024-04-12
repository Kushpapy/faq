import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    & {
        --color-white: hsl(0, 0%, 100%);
        --color-light-pink: hsl(275, 100%, 97%);
        --color-grayish-purple: hsl(292, 16%, 49%);
        --color-dark-purple: hsl(292, 42%, 14%);
        
    }
}

*,*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}


body{
    min-height: 100vh;
    font-family: "Work Sans", sans-serif;
    font-size: 1.6rem;
    position: relative;
    background-color: var(--color-light-pink);
    display: flex;
    justify-content: center;
    align-items: center;
}


`;

export default GlobalStyle;
