import styles from './Step.module.css'
import StepProgress from "./StepProgress/StepProgress";
import Step1 from "./Step1/Step1";
import ProgressControl from './ProgressControl/ProgressControl';

export default function Step(){
    return(
        <div className={styles.container}>
            <StepProgress />
            <Step1 />
            <ProgressControl />
        </div>
    )
}