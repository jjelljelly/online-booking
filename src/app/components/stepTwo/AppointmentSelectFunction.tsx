import { Appointment } from "@/app/types/Appointment";
import { usePatientContext } from "@/app/context/patientContext";
import { INSURANCE_TYPE } from "../stepOne/PaymentMethod";

export const SPECIALIST = {
    K_NAZIR: "Mr Kaser Nazir",
    S_THOMAS: "Mr Steven Thomas"
}

export function useGetNewPatientAppointments(appointmentTypes: Appointment[] | null) {
    const data = usePatientContext()

    // Filter new appointment types and by specialist

    const filterNewApp = appointmentTypes?.filter((appointment: Appointment) => appointment.isNewPatient)
    const kaserNewOnlyAllPayments = filterNewApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR))
    const stevenNewOnly = filterNewApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.S_THOMAS))

    if (data?.patientData?.paymentMethod === INSURANCE_TYPE.BUPA || data?.patientData?.paymentMethod === INSURANCE_TYPE.AXA_PPP) {
        return kaserNewOnlyAllPayments
    } else {
        return filterNewApp?.filter((appointment: Appointment) => !appointment.hasAppointmentKey("New consultation with Gait analysis (Bupa or AXA PPP)"))
    }
}

export function useGetFollowPatientAppointments(appointmentTypes: Appointment[] | null) {
    const data = usePatientContext()

    // Filter new appointment types and by specialist

    const filterFollowApp = appointmentTypes?.filter((appointment: Appointment) => !appointment.isNewPatient)
    const kaserNewOnlyAllPayments = filterFollowApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.K_NAZIR))
    const stevenNewOnly = filterFollowApp?.filter((appointment: Appointment) => appointment.hasSpecialist(SPECIALIST.S_THOMAS))

    if (data?.patientData?.paymentMethod === INSURANCE_TYPE.BUPA || data?.patientData?.paymentMethod === INSURANCE_TYPE.AXA_PPP) {
        return kaserNewOnlyAllPayments
    } else {
        return filterFollowApp?.filter((appointment: Appointment) => !appointment.hasAppointmentKey("New consultation with Gait analysis (Bupa or AXA PPP)"))
    }
}