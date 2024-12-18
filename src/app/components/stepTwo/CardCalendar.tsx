import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './CardCalendar.module.css'
import Image from "next/image";
import { usePatientContext } from "@/app/context/patientContext";
import { Calendar } from "./Calendar";
import { HeaderSection } from "../templates/HeaderSection";
import { STEPS_NAMES } from "@/app/context/stepsContext";

export function CardCalendar() {
    const patientData = usePatientContext()

    if (typeof patientData?.patientData?.appointment === "string") {
        return null
    }

    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_2_1} headerText={'Select Date and Time'} />
            <div className={style.cont}>
                <Card key={patientData?.patientData?.appointment?.key} className={style.card}>
                    <Image
                        width={300}
                        height={300}
                        className={style.image}
                        src={'https:' + patientData?.patientData?.appointment?.cardImage?.fields?.file?.url}
                        alt={patientData?.patientData?.appointment?.cardImage?.fields?.file?.fileName ?? ""}
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {patientData?.patientData?.appointment?.appointmentName}
                        </Typography>
                    </CardContent>
                </Card>
                <Calendar />
            </div>
        </>
    )
}