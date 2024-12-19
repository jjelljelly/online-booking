import style from './LeftBanner.module.css';
import { useStepsContext, STEPS_NAMES } from '../context/stepsContext';

export function LeftBanner() {
    const stepContext = useStepsContext()

    const STEP_1 = "Step 1"
    const STEP_2 = "Step 2"
    const STEP_3 = "Step 3"
    const ERROR = "Error"

    const STEP_MAP = {
        [STEPS_NAMES.STEP_1_1]: STEP_1,
        [STEPS_NAMES.STEP_1_2]: STEP_1,
        [STEPS_NAMES.STEP_1_3]: STEP_1,
        [STEPS_NAMES.STEP_2_1]: STEP_2,
        [STEPS_NAMES.STEP_2_2]: STEP_2,
        [STEPS_NAMES.STEP_3_1]: STEP_3,
        [STEPS_NAMES.STEP_3_2]: STEP_3,
        [STEPS_NAMES.ERROR_LOCATE]: ERROR,
        [STEPS_NAMES.ERROR_SUBMIT]: ERROR
    }

    const progress: string = STEP_MAP[stepContext?.step ?? STEPS_NAMES.STEP_1_1]

    return (
        <div className={style.bannerWrap}>
            <div className={style.brand}>
                <h2>London Foot & Ankle Surgery</h2>
                <h3>Schedule Your Appointment</h3>
            </div>
            <hr className={style.line} />
            <div className={style.progress}>
                <h3>Progress: {progress}</h3>
            </div>
            <div className={style.circleCont}>
                <div className={progress === STEP_1 ? style.circleStep : style.circle}>1</div>
                <div className={progress === STEP_2 ? style.circleStep : style.circle}>2</div>
                <div className={progress === STEP_3 ? style.circleStep : style.circle}>3</div>
            </div>
            <hr className={style.line} />
            <p className={style.copyright}>©2024, London Foot & Ankle Surgery Ltd.</p>
        </div>
    )
}