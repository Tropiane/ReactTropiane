import Header from './components/Header'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'
import CartProvider from './components/providers/CartProvider'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <Header/>
    <Main/>
    </CartProvider>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
