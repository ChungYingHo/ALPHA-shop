import styles from './Step2.module.css'

export default function Step2(){
    return(
        <section className={styles.container}>
            <h3>運送方式</h3>
            <form className={styles.form}>
                <label className={styles.label}>
                    <input id="shipping_standard" type="radio" name="shipping"  checked className={styles.input} />
                    <div className={styles.ratio_info}>
                        <div className={styles.choice}>
                            <div class="text">標準運送</div>
                            <div class="price">免費</div>
                        </div>
                        <div className={styles}>約 3~7 個工作天</div>
                    </div>
                </label>

                <label className={styles.label}>
                    <input id="shipping_standard" type="radio" name="shipping"  checked className={styles.input} />
                    <div className={styles.ratio_info}>
                        <div className={styles.choice}>
                            <div class="text">DHL 貨運</div>
                            <div class="price">$ 500</div>
                        </div>
                        <div className={styles}>48 小時內送達</div>
                    </div>
                </label>
            </form>
        </section>
    )
}