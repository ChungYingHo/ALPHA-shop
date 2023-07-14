import styles from './StepProgress.module.css'

export default function StepProgress(){
    return(
        <section>
            <h2>結帳</h2>
            <section className={styles.progress_container}>
                <span className={styles.group}>
                    <span className={styles.icon}>
                        <span className={styles.text}>1</span>
                    </span>
                    <span className={styles.label}>寄送地址</span>
                </span>
                <span className={styles.bar}></span>
                <span className={styles.group}>
                    <span className={`${styles.icon} ${styles.done}`}>
                        <span className={styles.text}>2</span>
                    </span>
                    <span className={styles.label}>運送方式</span>
                </span>
                <span className={`${styles.bar} ${styles.done}`}></span>
                <span className={styles.group}>
                    <span className={`${styles.icon} ${styles.done}`}>
                        <span className={styles.text}>3</span>
                    </span>
                <span className={styles.label}>付款資訊</span>
                </span>
          </section>
        </section>
    )
}