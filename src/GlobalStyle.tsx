import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: #309C4D;
        --font-white: #f9f6eb;
        --font-black: #022f1c;
        --primary: #3399A6;
        --secondary: #349081;
        --shadow: #0a290f;
        --border-radius: 18px;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--font-black);
        font-family: 'Roboto', sans-serif;
    }
`