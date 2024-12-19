
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'
import { NewFollow } from './stepOne/NewFollow'
import { PaymentMethod } from './stepOne/PaymentMethod'
import { AppointmentType } from '../appointmentType'
import { FindPatient } from './stepOne/FindPatient'
import { CardCalendar } from './stepTwo/CardCalendar'
import { RegistrationForm } from './stepThree/RegistrationForm'
import { Completion } from './stepThree/Completion'
import { ErrorPatient } from './error/ErrorPatient'
import { ErrorSubmit } from './error/ErrorSubmit'

export function AppointmentList() {
    const stepContext = useStepsContext()
    if (stepContext?.step === STEPS_NAMES.STEP_1_1) {
        return (
            <NewFollow />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_1_2) {
        return (
            <PaymentMethod />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_1_3) {
        return (
            <FindPatient />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_2_1) {
        return (
            <AppointmentType />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_2_2) {
        return (
            <CardCalendar />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_3_1) {
        return (
            <RegistrationForm />
        )
    } else if (stepContext?.step === STEPS_NAMES.STEP_3_2) {
        return (
            <Completion />
        )
    } else if (stepContext?.step === STEPS_NAMES.ERROR_LOCATE) {
        return (
            <ErrorPatient />
        )
    } else if (stepContext?.step === STEPS_NAMES.ERROR_SUBMIT) {
        return (
            <ErrorSubmit />
        )
    }
}

