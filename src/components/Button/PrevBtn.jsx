import {ReactComponent as LeftArrow} from '../../icons/left-arrow.svg'
import styles from './Button.module.css'

export default function PrevBtn({onClick}){
    return(
        <button className={styles.prevBtn} onClick={onClick}>
            <LeftArrow />
            上一步
        </button>
    )
}