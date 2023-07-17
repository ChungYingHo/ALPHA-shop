import styles from './App.module.css'
import Step from './components/Step/Step'
import Cart from './components/Cart/Cart';

function App() {
  return(
    <div className={styles.container}>
      <Step />
      <Cart />
    </div>
  )
}

export default App;
