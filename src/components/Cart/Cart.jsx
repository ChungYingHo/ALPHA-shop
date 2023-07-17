
import Item from "./Item/Item"
import styles from './Cart.module.css'

export default function Cart(){
    return(
        <section className={styles.container}>
            <div className={styles.cart_container}>
                <h3>購物籃</h3>
                <Item />
                <div className={styles.price}>
                    <p><b>運費</b></p>
                    <p>免費</p>
                </div>
                <div className={styles.total}>
                    <p><b>小計</b></p>
                    <p>$300</p>
                </div>
            </div>
        </section>
    )
}