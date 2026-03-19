import Parent from './components/Parent'
import { ThemeProvider } from './context/ThemeContext'
import Level1 from './components/Level1'
import TodoParent from './components/TodoParent'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Level1></Level1>
      </div>
      <hr />
      <div>
        <Parent></Parent>
      </div>
      <hr />
      <div>
        <TodoParent></TodoParent>
      </div>
    </ThemeProvider>

  )
}

export default App
