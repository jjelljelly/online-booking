
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'
import { NewFollow } from './NewFollow'
import { PaymentMethod } from './PaymentMethod'
import AppointmentType from '../../appointmentType'
import { FindPatient } from './FindPatient'

export function AppointmentList() {
    const value = useStepsContext()
    if (value?.step === STEPS_NAMES.STEP_1_1) {
        return (
            <>
                <NewFollow />
            </>
        )
    } else if (value?.step === STEPS_NAMES.STEP_1_2) {
        return (
            <>
                <PaymentMethod />
            </>
        )
    } else if (value?.step === STEPS_NAMES.STEP_1_3) {
        return (
            <>
                <FindPatient />
            </>
        )
    } else if (value?.step === STEPS_NAMES.STEP_2_1) {
        return (
            <>
                <AppointmentType />
            </>
        )
    }
}

