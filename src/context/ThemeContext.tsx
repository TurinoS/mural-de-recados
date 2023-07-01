import { ReactNode, createContext, useState } from "react";

interface ThemeContextProps {
    theme: boolean
    toggleTheme: () => void;
}
  
export const ThemeContext = createContext<ThemeContextProps>({
    theme: true,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(!theme)
    };
    
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
};