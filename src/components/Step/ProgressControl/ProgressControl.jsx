import NextButton from '../../Button/NextButton'
import styles from './ProgressControl.module.css'

export default function ProgressControl(){
    return(
        <section className={styles.container}>
            <NextButton />
        </section>
    )
}