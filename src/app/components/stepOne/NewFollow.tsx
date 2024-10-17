import style from './NewFollow.module.css'
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'

export function NewFollow() {
    const value = useStepsContext()
    return (
        <div className={style.pageDiv}>
            <h2 className={style.header}>Select Appointment Type</h2>
            <div className={style.appointmentDiv}>
                <button onClick={() => value?.setStep(STEPS_NAMES.STEP_1_2)}>First appointment</button>
                <button onClick={() => value?.setStep(STEPS_NAMES.STEP_1_3)}>Follow up appointment</button>
            </div>
        </div>
    )
}