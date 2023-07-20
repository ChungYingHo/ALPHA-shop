import {ReactComponent as LeftArrow} from '../../icons/left-arrow.svg'
import styles from './Button.module.css'

export default function PrevBtn(){
    return(
        <button className={styles.prevBtn}>
            <LeftArrow />
            上一步
        </button>
    )
}