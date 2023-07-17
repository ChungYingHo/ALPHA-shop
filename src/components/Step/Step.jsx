import styles from './Step.module.css'
import StepProgress from "./StepProgress/StepProgress";
import Step1 from "./Step1/Step1";
import ProgressControl from './ProgressControl/ProgressControl';

export default function Step(){
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>結帳</h2>
            <div className={styles.info}>
                <StepProgress />
                <Step1 />
                <ProgressControl /> 
            </div>
        </section>
    )
}