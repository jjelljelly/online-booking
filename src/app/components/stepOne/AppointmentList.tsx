
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'
import { NewFollow } from './NewFollow'
import { PaymentMethod } from './PaymentMethod'
import AppointmentType from '../../appointmentType'
import { FindPatient } from './FindPatient'
import { CardCalendar } from '../stepTwo/CardCalendar'
import { RegistrationForm } from '../stepThree/RegistrationForm'
import { Completion } from '../stepThree/Completion'
import { ErrorPatient } from './ErrorPatient'
import { ErrorSubmit } from '../stepThree/ErrorSubmit'

export function AppointmentList() {
    const value = useStepsContext()
    if (value?.step === STEPS_NAMES.STEP_1_1) {
        return (
            <NewFollow />
        )
    } else if (value?.step === STEPS_NAMES.STEP_1_2) {
        return (
            <PaymentMethod />
        )
    } else if (value?.step === STEPS_NAMES.STEP_1_3) {
        return (
            <FindPatient />
        )
    } else if (value?.step === STEPS_NAMES.STEP_2_1) {
        return (
            <AppointmentType />
        )
    } else if (value?.step === STEPS_NAMES.STEP_2_2) {
        return (
            <CardCalendar />
        )
    } else if (value?.step === STEPS_NAMES.STEP_3_1) {
        return (
            <RegistrationForm />
        )

    } else if (value?.step === STEPS_NAMES.STEP_3_2) {
        return (
            <Completion />
        )
    } else if (value?.step === STEPS_NAMES.ERROR_LOCATE) {
        return (
            <ErrorPatient />
        )
    } else if (value?.step === STEPS_NAMES.ERROR_SUBMIT) {
        return (
            <ErrorSubmit />
        )
    }
}

