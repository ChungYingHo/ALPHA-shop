
import styles from './ItemList.module.css'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import { useState } from 'react'


export function Item({item, setTotal, setCart}){
    const [count, setCount] = useState(item.quantity)
    const handleMinus = ()=>{
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
            setTotal(prevTotal => prevTotal - item.price)
            setCart((prevCart) => {
                 return prevCart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: count - 1 };
                    }
                    return cartItem;
                })})
    }
    }
    
    const handlePlus = ()=>{
        setCount(prevCount => prevCount + 1)
        setTotal(prevTotal => prevTotal + item.price)
        setCart((prevCart) => {
                 return prevCart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: count + 1 };
                    }
                    return cartItem;
                })})
    }

    return(
        <div className={styles.product_container}>
            <img src={item.img} alt={item.name} className={styles.img} />
            <div className={styles.product_info}>
                <div className={styles.left_area}>
                    <span className={styles.product_name}>{item.name}</span>
                    <div className={styles.product_controller}>
                        <Minus onClick={handleMinus}/>
                        <span className={styles.product_count}>{item.quantity}</span>
                        <Plus onClick={handlePlus}/>
                    </div>
                </div>
                <span className={styles.price}>${item.price * item.quantity}</span>
            </div>
        </div>
    )
}

export default function ItemList({setTotal, setCart, cart}){
    return(
        <section>
            {cart.map(item =>{
                return(
                    <Item item={item} key={item.id} setTotal={setTotal} setCart={setCart}/>
                )
            })}
        </section>
    )
}