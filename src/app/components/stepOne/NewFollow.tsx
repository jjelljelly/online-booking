import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { usePatientContext } from '@/app/context/patientContext';
import style from './NewFollow.module.css'
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'
import { CardActionArea } from '@mui/material';

type SubmitItems = {
    name: string;
    description: string;
    step: STEPS_NAMES;
}

const appointmentOptions = [
    {
        name: "Initial Visit",
        description: "Select if this is your first appointment or if last appointment was over a year ago",
        step: STEPS_NAMES.STEP_1_2
    },
    {
        name: "Subsequent Visit",
        description: "Select if you have been to the clinic within the last year",
        step: STEPS_NAMES.STEP_1_3
    }
]

export function NewFollow() {

    const value = useStepsContext()
    const patientData = usePatientContext()

    const handleSubmit = async (item: SubmitItems) => {
        patientData?.setPatientData({ isNewPatient: item?.name === "Initial Visit" ? true : false })
        value?.setStep(item.step)
    }


    return (
        <div className={style.pageDiv}>
            <div className={style.headerDiv}>
                <div></div>
                <h2 className={style.header}>Select Appointment Type</h2>
                <div></div>
            </div>
            <div className={style.cardDiv}>
                {appointmentOptions.map((item) =>
                    <Card key={item.name} className={style.card} onClick={() => handleSubmit(item)}>
                        <CardActionArea className={style.cardContent}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            Click to proceed
                        </CardActionArea>
                    </Card>
                )}
            </div>
        </div>
    );
}
