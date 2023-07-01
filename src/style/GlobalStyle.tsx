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

    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background: #023229;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #84c514;
        border-radius: 20px;
    }
`