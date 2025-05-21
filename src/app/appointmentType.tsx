import { useEffect, useState } from 'react';
import { fetchEntries } from './lib/contenful';
import { Appointment } from './types/Appointment';
import { usePatientContext } from "@/app/context/patientContext";
import { NewPatientCards } from './components/stepTwo/NewPatientCards';
import { FollowPatientCards } from './components/stepTwo/FollowPatientCards';

type AppointmentResponse = {
    appointmentName: string
    appointmentLength: number
    specialistincluded: string[]
    paymentType: string[]
    withinNursingHours: boolean
    appointmentFee: number
    newPatient: boolean
    key: string
    cardImage: { fields: { file: { url: string, fileName: string } } }
    type: string
    appointmentCategory: string

}

export function AppointmentType() {
    const patientData = usePatientContext()
    const [appointmentTypes, setAppointmentTypes] = useState<Appointment[] | null>(null)

    useEffect(() => {
        fetchEntries({
            content_type: "appointmentType",
        })
            .then((result) => {
                const updateResult: Appointment[] | null = (result as unknown as { fields: AppointmentResponse }[])?.map((item) => Appointment.build({
                    ...item.fields
                })) ?? null
                setAppointmentTypes(updateResult)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            {patientData?.patientData?.isNewPatient ?
                <NewPatientCards appointmentTypes={appointmentTypes} /> :
                <FollowPatientCards appointmentTypes={appointmentTypes} />

            }
        </>
    )
}