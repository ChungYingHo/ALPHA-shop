
import ItemList from "./Item/ItemList"
import styles from './Cart.module.css'
import { useState } from "react"

export default function Cart(){
    const [total, setTotal] = useState(0)
    return(
        <section className={styles.container}>
            <div className={styles.cart_container}>
                <h3>購物籃</h3>
                <ItemList setTotal={setTotal}/>
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