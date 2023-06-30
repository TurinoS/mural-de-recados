import { ReactNode, createContext } from "react";
import usePersistedState from "../utils/usePersistedState";

import light from '../style/themes/light';
import dark from '../style/themes/dark';

interface ThemeContextProps {
    theme: {
      title: string;
      colors: {
        primary: string;
        secondary: string;
        fontWhite: string;
        fontBlack: string;
        green: string;
      };
    };
    toggleTheme: () => void;
  }
  
  export const ThemeContext = createContext<ThemeContextProps>({
    theme: dark,
    toggleTheme: () => {}
  });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = usePersistedState('theme', light)

    const toggleTheme = () => {
        setTheme(prevTheme => ({
            ...prevTheme,
            title: prevTheme.title === "light" ? "dark" : "light"
        }));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
};