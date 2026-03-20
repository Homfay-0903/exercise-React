import Parent from './components/Parent'
import { ThemeProvider } from './context/ThemeContext'
import Level1 from './components/Level1'
import TodoParent from './components/TodoParent'
import RefParent from './components/RefParent'
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
      <hr />
      <div>
        <RefParent></RefParent>
      </div>
    </ThemeProvider>

  )
}

export default App
