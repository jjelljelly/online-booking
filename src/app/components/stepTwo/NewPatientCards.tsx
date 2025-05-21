import { Appointment } from "@/app/types/Appointment"
import { useGetNewPatientAppointments } from "../functions/AppointmentSelectFunction"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import style from './AppointmentCards.module.css'
import Image from "next/image";
import { usePatientContext } from "@/app/context/patientContext";
import { HeaderSection } from "../templates/HeaderSection";
import { STEPS_NAMES, useStepsContext } from "@/app/context/stepsContext";
import { INSURANCE_TYPE } from "../stepOne/PaymentMethod";

type AppointmentsByType = {
    consultations: Appointment[];
    surgicalConsultations: Appointment[];
    minorProcedures: Appointment[];
}

const titleMap: { [key: string]: string } = {
    consultations: 'Consultations',
    surgicalConsultations: 'Surgical Consultations',
    minorProcedures: 'Consultation and minor procedure',
}

export function NewPatientCards({ appointmentTypes }: { appointmentTypes: Appointment[] | null }) {
    const patientData = usePatientContext()
    const stepContext = useStepsContext()

    const checkInfo = useGetNewPatientAppointments(appointmentTypes)

    const handleChange = (appointment: Appointment) => {
        patientData?.setPatientData({ appointment: appointment })
        stepContext?.setStep(STEPS_NAMES.STEP_2_2)
    }



    const filterAppointments = checkInfo?.reduce((acc: AppointmentsByType, appointment: Appointment): AppointmentsByType => {
        if (appointment.appointmentCategory === "Consultation") {
            acc.consultations.push(appointment)
        } else if (appointment.appointmentCategory === "Surgical Consultation") {
            acc.surgicalConsultations.push(appointment)
        } else if (appointment.appointmentCategory === "Consultation and minor op") {
            acc.minorProcedures.push(appointment)
        }
        acc.consultations.sort((a, b) => a.appointmentName.localeCompare(b.appointmentName))
        acc.surgicalConsultations.sort((a, b) => a.appointmentName.localeCompare(b.appointmentName))
        acc.minorProcedures.sort((a, b) => a.appointmentName.localeCompare(b.appointmentName))
        return acc
    }, { consultations: [], surgicalConsultations: [], minorProcedures: [] })

    return (
        <>
            <div className={style.cont}>
                <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_2} headerText={'Appointment Type'} />
                <div>
                    {Object.entries(filterAppointments ?? {}).map(([key, appointments]) => (
                        <div key={key} className={style.container}>
                            <h2>{titleMap[key]}</h2>
                            <div className={style.cardContainer}>
                                {appointments.map((appointment: Appointment) => (
                                    <Card key={appointment.appointmentKey} className={style.card} onClick={() => handleChange(appointment)
                                    }>
                                        <CardActionArea>
                                            <Image
                                                width={300}
                                                height={300}
                                                className={style.image}
                                                src={'https:' + appointment.cardImage?.fields?.file?.url}
                                                alt={appointment.cardImage?.fields?.file?.fileName}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "comorant", }}>
                                                    {appointment.appointmentName}
                                                </Typography>
                                                {patientData?.patientData?.paymentMethod === INSURANCE_TYPE.SELF_FUNDING &&
                                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "comorant", }}>
                                                        Appointment fee: £{appointment.appointmentFee}
                                                    </Typography>
                                                }
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}