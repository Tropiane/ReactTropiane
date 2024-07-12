import Header from './components/Header'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'
import ItemProvider from './components/providers/ItemProvider'
import CartProvider from './components/providers/CartProvider'

function App() {

  return (
    <BrowserRouter>
      <ItemProvider>
        <CartProvider>
          <Header/>
          <Main/>
        </CartProvider>
      </ItemProvider>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
