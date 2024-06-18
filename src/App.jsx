import Header from './components/Header'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Main/>
    </BrowserRouter>
  )
}

export default App
