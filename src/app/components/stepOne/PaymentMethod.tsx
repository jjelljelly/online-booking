import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useStepsContext, StepsData, STEPS_NAMES } from '@/app/context/stepsContext';
import style from './PaymentMethod.module.css'
import { usePatientContext, Data } from '@/app/context/patientContext';
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

    const handleSubmit = (item: string) => {
        patientData?.setPatientData({ paymentMethod: item })
        stepContext?.setStep(STEPS_NAMES.STEP_2_1)
    }

    return (
        <>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Select Payment Type'} />
            <div className={style.paymentDiv}>
                <h4 className={style.selectPayment}>Please select your payment method</h4>
                <Paper sx={{ width: 400 }}>
                    <MenuList dense className={style.menuList}>
                        {Object.values(INSURANCE_TYPE).map((item) =>
                            <MenuItem
                                className={style.listItem}
                                key={item}
                                onClick={() => handleSubmit(item)}
                            >
                                <ListItemText>{item}</ListItemText>
                            </MenuItem>
                        )}
                    </MenuList>
                </Paper>
            </div>
        </>
    );
}