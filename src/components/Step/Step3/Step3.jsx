import styles from './Step3.module.css'

export default function Step3(){
    return(
        <section className={styles.container}>
            <h3 className={styles.title}>付款資訊</h3>
            <form className={styles.form}>
                <div className={styles.group}>
                    <div>持卡人姓名</div>
                    <input type="text" placeholder="John Doe" />
                </div>

                <div className={styles.group}>
                    <div>卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" />
                </div>
                <div className={styles.card_info}>
                    <div claName={styles.group}>
                        <div>有效期限</div>
                        <input type="text" placeholder="MM/YY" />
                    </div>

                    <div claName={styles.group}>
                        <div>CVC / CCV</div>
                        <input type="text" placeholder="123" />
                    </div>
                </div>
            </form>
        </section>
    )
}