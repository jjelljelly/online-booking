import style from './ErrorSubmit.module.css'
import { usePatientContext } from '@/app/context/patientContext'
import { STEPS_NAMES } from '@/app/context/stepsContext'
import { HeaderSection } from '../templates/HeaderSection'

export function ErrorSubmit() {
    const patientData = usePatientContext()


    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Error Submitting Appointment'} />
            <div className={style.errorDiv}>
                <div className={style.update}>
                    <p>Unfortunately we have experienced an error whilst booking your appointment.</p>
                    <p>Please either try arranging a time again or contact our team for assistance</p>
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