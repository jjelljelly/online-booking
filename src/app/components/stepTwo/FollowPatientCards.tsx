import { Appointment } from "@/app/types/Appointment"
import { useGetFollowPatientAppointments } from "./AppointmentSelectFunction"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import style from './AppointmentCards.module.css'
import Image from "next/image";
import { usePatientContext } from "@/app/context/patientContext";

export function FollowPatientCards({ appointmentTypes }: any | null) {
    const patientData = usePatientContext()

    const checkInfo = useGetFollowPatientAppointments(appointmentTypes)

    return (
        <div className={style.cont}>
            <h2>Hello {patientData?.patientData?.firstName}</h2>
            <h3>Please select appointment type</h3>
            <div className={style.cardContainer}>
                {
                    checkInfo?.map((appointment: Appointment) => (
                        <Card key={appointment.appointmentKey} className={style.card}>
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
                    ))
                }
            </div>
        </div>
    )
}