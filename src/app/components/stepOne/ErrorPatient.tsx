import style from './ErrorPatient.module.css'
import { STEPS_NAMES } from '@/app/context/stepsContext'
import { HeaderSection } from '../templates/HeaderSection'

export function ErrorPatient() {

    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Cannot Locate Profile'} />
            <div className={style.errorDiv}>
                <div className={style.update}>
                    <p>Unfortunately we could not locate your details</p>
                    <p>Please either try submitting your data again or contact our team for assistance</p>
                    <p>If you have not attended the clinic for more than one year please use the new appointment option</p>
                    <a href="tel:+442078208007">
                        <p>Tel: +44 207 820 8007</p>
                    </a>
                    <a href="mailto:admin@londonfootandanklesurgery.co.uk">
                        <p>Email: admin@londonfootandanklesurgery.co.uk</p>
                    </a>
                </div>
            </div>
        </>
    )
}