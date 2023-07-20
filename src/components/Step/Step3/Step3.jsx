import styles from './Step3.module.css'

export default function Step3(){
    return(
        <section className={styles.container}>
            <h3 className={styles.title}>付款資訊</h3>
            <form className={styles.form}>
                <div className={`${styles.group} ${styles.name}`}>
                    <div>持卡人姓名</div>
                    <input type="text" placeholder="John Doe" className={styles.input}/>
                </div>

                <div className={`${styles.group} ${styles.card_number}`}>
                    <div>卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" className={styles.input}/>
                </div>

                 <div className={`${styles.group} ${styles.dates}`}>
                    <div>有效期限</div>
                    <input type="text" placeholder="MM/YY" className={styles.input}/>
                </div>

                <div className={`${styles.group} ${styles.ccc}`}>
                    <div>CVC / CCV</div>
                    <input type="text" placeholder="123" className={styles.input}/>
                </div>
            </form>
        </section>
    )
}