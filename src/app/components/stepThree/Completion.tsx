
import { usePatientContext } from '@/app/context/patientContext'
import style from './Completion.module.css'
import { HeaderSection } from '../templates/HeaderSection'
import { STEPS_NAMES } from '@/app/context/stepsContext'

export function Completion() {
    const patientData = usePatientContext()

    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Appointment Confirmation'} />
            <div className={style.container}>
                {patientData?.patientData?.isNewPatient ? <h2>Thank you {patientData?.patientData?.registrationData?.firstName} {patientData?.patientData?.registrationData?.lastName}</h2> :
                    <h2>Thank you {patientData?.patientData?.firstName} {patientData?.patientData?.lastName}</h2>}
                <div className={style.text}>
                    <p>Your appointment has been scheduled</p>
                    <p>A confirmation email will be sent shortly with full details</p>
                    <p>If you have any questions please do not hesitate to contact us</p>
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