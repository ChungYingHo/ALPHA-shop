
import ItemList from "./Item/ItemList"
import styles from './Cart.module.css'
import { useState } from "react"
import items from './Item/items'

export default function Cart(){
    const [cart, setCart] = useState(items)
    const [total, setTotal] = useState(()=>{
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    })

    return(
        <section className={styles.container}>
            <div className={styles.cart_container}>
                <h3>購物籃</h3>
                <ItemList setTotal={setTotal} setCart={setCart} cart={cart}/>
                <div className={styles.price}>
                    <p><b>運費</b></p>
                    <p>免費</p>
                </div>
                <div className={styles.total}>
                    <p><b>小計</b></p>
                    <p>${total}</p>
                </div>
            </div>
        </section>
    )
}