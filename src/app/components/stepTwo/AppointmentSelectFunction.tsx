import { Appointment } from "@/app/types/Appointment";
import { usePatientContext } from "@/app/context/patientContext";
import { INSURANCE_TYPE } from "../stepOne/PaymentMethod";

export const SPECIALIST = {
    K_NAZIR: "Mr Kaser Nazir",
    S_THOMAS: "Mr Steven Thomas",
    S_THOMAS_KN: "Mr Steven Thomas whilst Mr Kaser Nazir in clinic",
    K_NAZIR_THEN_ST: "Mr Kaser Nazir then Mr Steven Thomas"
}

export function useGetNewPatientAppointments(appointmentTypes: Appointment[] | null) {
    const data = usePatientContext()

    // Filter new appointment types and by specialist

    const filterNewApp = appointmentTypes?.filter((appointment: Appointment) => appointment.isNewPatient)
    const kaserNewOnlyAllPayments = filterNewApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR) || appointment.hasSpecialist(SPECIALIST.K_NAZIR_THEN_ST) || appointment.hasSpecialist(SPECIALIST.S_THOMAS_KN))
    const stevenOrKaserNewApp = filterNewApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR) || appointment.hasSpecialist(SPECIALIST.S_THOMAS))
    if (data?.patientData?.paymentMethod === INSURANCE_TYPE.BUPA || data?.patientData?.paymentMethod === INSURANCE_TYPE.AXA_PPP) {
        return kaserNewOnlyAllPayments
    } else {
        return stevenOrKaserNewApp
    }
}

export function useGetFollowPatientAppointments(appointmentTypes: Appointment[] | null) {
    const data = usePatientContext()

    // Filter new appointment types and by specialist

    const filterFollowApp = appointmentTypes?.filter((appointment: Appointment) => !appointment.isNewPatient)
    const kaserFollowOnlyAllPayments = filterFollowApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR) || appointment.hasSpecialist(SPECIALIST.K_NAZIR_THEN_ST) || appointment.hasSpecialist(SPECIALIST.S_THOMAS_KN))
    const stevenOrKaserFollowApp = filterFollowApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR) || appointment.hasSpecialist(SPECIALIST.S_THOMAS))

    if (data?.patientData?.paymentMethod === INSURANCE_TYPE.BUPA || data?.patientData?.paymentMethod === INSURANCE_TYPE.AXA_PPP) {
        return kaserFollowOnlyAllPayments
    } else {
        return stevenOrKaserFollowApp
    }
}