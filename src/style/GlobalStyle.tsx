import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: ${props => props.theme.colors.green};;
        --font-white: ${props => props.theme.colors.fontWhite};;
        --font-black: ${props => props.theme.colors.fontBlack};
        --primary: ${props => props.theme.colors.primary};;
        --secondary: ${props => props.theme.colors.secondary};;
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