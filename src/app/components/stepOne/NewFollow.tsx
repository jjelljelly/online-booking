import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { usePatientContext } from '@/app/context/patientContext';
import style from './NewFollow.module.css'
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext'
import { CardActionArea, Theme } from '@mui/material';

type SubmitItems = {
    name: string;
    description: string;
    step: STEPS_NAMES;
}

const appointmentOptions = [
    {
        name: "Initial Visit",
        description: "Select if this is your first appointment or if your last appointment was over a year ago",
        step: STEPS_NAMES.STEP_1_2
    },
    {
        name: "Subsequent Visit",
        description: "Select if you have been to the clinic within the last year ",
        step: STEPS_NAMES.STEP_1_3
    }
]

export const getCardContainerStyle = (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: '20px',
    width: '45%',
    margin: '30px 20px',
    backgroundColor: 'var(--light-blue)',
    border: 'solid 2px var(--light-blue)',
    color: 'white',
    boxShadow: '10px 5px 5px rgb(235, 235, 235)',
    [theme.breakpoints.down("lg")]: {
        width: "42%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "90%"
    }
});

export function NewFollow() {

    const stepContext = useStepsContext()
    const patientData = usePatientContext()

    const handleSubmit = async (item: SubmitItems) => {
        patientData?.setPatientData({ isNewPatient: item?.name === "Initial Visit" })
        stepContext?.setStep(item.step)
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
                    <Card
                        key={item.name}
                        sx={getCardContainerStyle}
                        onClick={() => handleSubmit(item)}
                    >
                        <CardActionArea sx={{ padding: '20px 30px 10px' }}>
                            <CardContent>
                                <Typography sx={{ padding: '0 0 10px', color: 'white', fontSize: '16px' }}>
                                    {item.name}
                                </Typography>
                                <hr className={style.line} />
                                <Typography sx={{ fontSize: '14px' }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ padding: '20px 0 0', fontSize: '12px' }}>
                                    Click to proceed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </div>
        </div>
    );

}
