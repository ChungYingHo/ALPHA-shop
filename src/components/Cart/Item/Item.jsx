import items from './items'
import styles from './Item.module.css'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Plus} from '../../../icons/plus.svg'


export default function Item(){
    const listItems = items.map(item=>
        <div className={styles.product_container} key={item.id}>
            <img src={item.img} alt={item.name} className={styles.img} />
            <div className={styles.product_info}>
                <div className={styles.left_area}>
                    <span className={styles.product_name}>{item.name}</span>
                    <div className={styles.product_controller}>
                        <Minus />
                        <span className={styles.product_count}>0</span>
                        <Plus />
                    </div>
                </div>
                <span className={styles.price}>${item.price}</span>
            </div>
        </div>
    )
    return(
        <section>
            {listItems}
        </section>
    )
}