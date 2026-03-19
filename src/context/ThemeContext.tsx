import { useContext, createContext, useState } from "react";

type Theme = 'light' | 'dark'

interface ThemeContextTypes {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('error here')
    }

    return context
}