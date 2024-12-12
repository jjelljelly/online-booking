import { Appointment } from "@/app/types/Appointment"
import { useGetNewPatientAppointments } from "./AppointmentSelectFunction"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import style from './AppointmentCards.module.css'
import Image from "next/image";
import { usePatientContext } from "@/app/context/patientContext";
import { HeaderSection } from "../templates/HeaderSection";
import { STEPS_NAMES, useStepsContext } from "@/app/context/stepsContext";


export function NewPatientCards({ appointmentTypes }: any | null) {
    const patientData = usePatientContext()
    const value = useStepsContext()

    const checkInfo = useGetNewPatientAppointments(appointmentTypes)

    const handleChange = (appointment: Appointment) => {
        patientData?.setPatientData({ appointment: appointment })
        value?.setStep(STEPS_NAMES.STEP_2_2)
    }
    return (
        <>
            <div className={style.cont}>
                <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_2} headerText={'Appointment Type'} />
                <div className={style.cardContainer}>
                    {checkInfo?.map((appointment: Appointment) => (
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
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {appointment.appointmentName}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}