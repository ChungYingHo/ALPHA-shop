import './App.module.css'
import Step from './components/Step/Step'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return(
    <>
      <header>
        <Header />
      </header>
      
      <main>
        <Step />
        <Cart />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
