import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
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