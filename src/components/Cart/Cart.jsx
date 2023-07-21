import Item from './Item/Item'
import styles from './Cart.module.css'
import { useState } from "react"
import items from './items'

export default function Cart(){
    // 紀錄購物車內容
    const [cart, setCart] = useState(items)
    // 用已知購物車資料計算總價
    let total = cart.reduce((acc, item) => {
        let sumItemPrice = item.quantity * item.price
        return acc + sumItemPrice
    }, 0)

    return(
        <section className={styles.container}>
            <div className={styles.cart_container}>
                <h3>購物籃</h3>

                {/* 購物車內容 */}
                {cart.map(item =>{
                    return(
                        <Item item={item} key={item.id}  setCart={setCart} cart={cart}/>
                )})}

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