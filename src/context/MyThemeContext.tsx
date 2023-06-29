import { ReactNode, createContext } from "react"
import usePersistedState from "../utils/usePersistedState"
import light from '../style/themes/light'
import dark from '../style/themes/dark'

interface ContextProps {
    children: ReactNode;
}

interface Theme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        fontWhite: string;
        fontBlack: string;
        green: string;
    };
}

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const MyThemeContext = createContext<ThemeContextProps>({
  theme: light,
  toggleTheme: () => {},
});

export const MyThemeProvider = ({ children }: ContextProps) => {
    const [theme, setTheme] = usePersistedState<Theme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
      };

    return (
        <MyThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </MyThemeContext.Provider>
    )
}
