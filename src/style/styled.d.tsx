import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            fontWhite: string;
            fontBlack: string;
            green: string;
        }
    }
}