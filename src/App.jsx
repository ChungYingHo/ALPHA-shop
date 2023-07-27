import './App.module.css'
import Step from './components/Step/Step'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { CartProvider } from './components/Cart/CartContext'

function App() {
  return(
    <>
      <Header />
      <main>
        <Step />
        <CartProvider>
          <Cart />
        </CartProvider>
      </main>
      <Footer />
    </>
  )
}

export default App;
