import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Theme, Box } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext';
import style from './PaymentMethod.module.css'
import { usePatientContext, } from '@/app/context/patientContext';
import { HeaderSection } from '../templates/HeaderSection';

export enum INSURANCE_TYPE {
    SELF_FUNDING = "Self-funding",
    AXA_PPP = "AXA PPP",
    AXA_INT = "AXA PPP International",
    AETNA = "Aetna",
    ALLIANZ = "Allianz",
    BUPA = "Bupa",
    BUPA_INT = "Bupa International",
    CIGNA = "Cigna",
    CIGNA_INT = "Cigna International",
    HEALIX = "Healix",
    VITALITY = "Vitality",
    WPA = "WPA",
    OTHER = "OTHER"
}

export function PaymentMethod() {
    const stepContext = useStepsContext()
    const patientData = usePatientContext()

    const menuList = (theme: Theme) => ({
        backgroundColor: 'rgba(36, 142, 194, 0.2)',
        color: 'rgb(32, 54, 95)',
        border: 'solid, 3px, rgba(32, 54, 95, 0.6)',
        width: 400,
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    })

    const handleSubmit = (item: string) => {
        patientData?.setPatientData({ paymentMethod: item })
        stepContext?.setStep(STEPS_NAMES.STEP_2_1)
    }

    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Select Payment Type'} />
            <div className={style.paymentDiv}>
                <h4 className={style.selectPayment}>Please select your payment method</h4>
                <Box sx={{
                    width: 400,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <MenuList dense sx={menuList}>
                        {Object.values(INSURANCE_TYPE).map((item) =>
                            <MenuItem
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(36, 142, 194, 0.8)',
                                        color: 'white',
                                        position: 'relative'
                                    },
                                }}
                                key={item}
                                onClick={() => handleSubmit(item)}
                            >
                                <ListItemText>{item}</ListItemText>
                            </MenuItem>
                        )}
                    </MenuList>
                </Box>
            </div>
        </>
    );
}