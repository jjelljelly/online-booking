import { usePatientContext } from "@/app/context/patientContext";
import { NewPatientCards } from "./NewPatientCards";
import { FollowPatientCards } from "./FollowPatientCards";

export function AppointmentCards({ appointmentTypes }: any | null) {
    const patientData = usePatientContext()

    return (
        <>
            {patientData?.patientData?.isNewPatient ?
                <NewPatientCards appointmentTypes={appointmentTypes} /> :
                <FollowPatientCards appointmentTypes={appointmentTypes} />

            }
        </>
    )
}