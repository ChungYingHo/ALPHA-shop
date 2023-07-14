import {ReactComponent as RightArrow} from '../../icons/right-arrow.svg'
import styles from './Button.module.css'

export default function NextButton(){
    return(
        <button className={styles.nextBtn}>
            下一步
            <RightArrow />
        </button>
    )
}