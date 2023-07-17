import items from './items'
import styles from './ItemList.module.css'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import { useState } from 'react'


export function Item({item, setTotal}){
    const [count, setCount] = useState(0)
    const minusCount = ()=>{
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
            setTotal(prevTotal => prevTotal - item.price)
    }
    }
    const plusCount = ()=>{
        setCount(prevCount => prevCount + 1)
        setTotal(prevTotal => prevTotal + item.price)
    }

    return(
        <div className={styles.product_container} key={item.id}>
            <img src={item.img} alt={item.name} className={styles.img} />
            <div className={styles.product_info}>
                <div className={styles.left_area}>
                    <span className={styles.product_name}>{item.name}</span>
                    <div className={styles.product_controller}>
                        <Minus onClick={minusCount}/>
                        <span className={styles.product_count}>{count}</span>
                        <Plus onClick={plusCount}/>
                    </div>
                </div>
                <span className={styles.price}>${item.price * count}</span>
            </div>
        </div>
    )
}

export default function ItemList({setTotal}){
    return(
        <section>
            {items.map(item =>
            <Item item={item} key={item.id} setTotal={setTotal}/>)}
        </section>
    )
}