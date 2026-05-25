import { createContext, useEffect, useState } from 'react';
import { getStorage, setStorage } from '@/utils/storage';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getStorage('theme') || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        setStorage("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) =>
            prev === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeContext.Provider value={{
            theme, setTheme, toggleTheme
        }}>

            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
