import { useEffect, useState } from 'react';
import { fetchEntries } from './lib/contenful';
import { AppointmentCards } from './components/stepTwo/AppointmentCards';
import { Entry, EntrySkeletonType } from 'contentful';
import { Appointment } from './types/Appointment';

export default function AppointmentType() {
    const [appointmentTypes, setAppointmentTypes] = useState<Appointment[] | null>(null)

    useEffect(() => {
        fetchEntries({
            content_type: "appointmentType",
        })
            .then((result: Entry<EntrySkeletonType, undefined, string>[] | null) => {
                const updateResult: Appointment[] | null = result?.map((item: any) => Appointment.build({ ...item.fields })) ?? null
                setAppointmentTypes(updateResult)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <AppointmentCards appointmentTypes={appointmentTypes} />
        </>
    )
}