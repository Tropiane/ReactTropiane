import Header from './components/Header'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
