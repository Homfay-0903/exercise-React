import { useTheme } from "../context/ThemeContext";

const Level2 = () => {
    const { theme, toggleTheme } = useTheme()

    const containerStyle: React.CSSProperties = {
        backgroundColor: theme === 'light' ? 'white' : 'red',
        color: theme === 'light' ? 'red' : 'white'
    }

    return (
        <div style={containerStyle}>
            <p>now theme is: {theme}</p>
            <button onClick={toggleTheme}>click here to change theme</button>
        </div>
    )
}

export default Level2