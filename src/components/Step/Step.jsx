import styles from './Step.module.css'
import StepProgress from "./StepProgress/StepProgress";
import Step1 from "./Step1/Step1";
import ProgressControl from './ProgressControl/ProgressControl';
// 尚未完善部分
// import Step2 from './Step2/Step2';
// import Step3 from './Step3/Step3';

export default function Step(){
    return(
        <div className={styles.container}>
            <StepProgress />
            <Step1 />
            <ProgressControl />
            {/* 尚未完善部分 */}
            {/* <Step2 /> */}
            {/* <Step3 /> */}
        </div>
    )
}