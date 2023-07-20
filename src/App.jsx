import './App.module.css'
import Step from './components/Step/Step'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return(
    <>
      <Header />
      
      <main>
        <Step />
        <Cart />
      </main>
      <Footer />
    </>
  )
}

export default App;
