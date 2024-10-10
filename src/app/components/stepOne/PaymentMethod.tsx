import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { useStepsContext, StepsData, STEPS_NAMES } from '@/app/context/stepsContext';
import style from './PaymentMethod.module.css'
import { useState } from 'react';
import { usePatientContext, Data } from '@/app/context/patientContext';

export const INSURANCE_TYPE = {
    SELF_FUNDING: "Self-funding",
    AXA_PPP: "AXA PPP",
    AXA_INT: "AXA PPP International",
    AETNA: "Aetna",
    ALLIANZ: "Allianz",
    BUPA: "Bupa",
    BUPA_INT: "Bupa International",
    CIGNA: "Cigna",
    CIGNA_INT: "Cigna International",
    HEALIX: "Healix",
    VITALITY: "Vitality",
    WPA: "WPA",
    OTHER: "OTHER"
}

const handleSubmit = (patientData: Data, value: StepsData, paymentMethod: string) => {
    patientData?.setPatientData({ paymentMethod: paymentMethod })
    value?.setStep(STEPS_NAMES.STEP_2_1)
}

export function PaymentMethod() {
    const value = useStepsContext()
    const patientData = usePatientContext()
    const [paymentMethod, setPaymentMethod] = useState('')

    return (
        <>
            <h2 className={style.header}>Select Payment Type</h2>
            <div className={style.paymentDiv}>
                <div className={style.method}>
                    <Paper sx={{ width: 320 }}>
                        <MenuList dense>
                            {Object.values(INSURANCE_TYPE).map((item) =>
                                <MenuItem
                                    onClick={() => setPaymentMethod(item)}
                                    sx={{ position: "relative" }}
                                    key={item}
                                >
                                    {paymentMethod === item
                                        && <ListItemIcon sx={{ position: "absolute", left: 10 }}>
                                            <Check />
                                        </ListItemIcon>
                                    }
                                    <ListItemText>{item}</ListItemText>
                                </MenuItem>
                            )}
                        </MenuList>
                    </Paper>
                </div>
                <div className={style.submit}>
                    <p className={style.selectPayment}>Please select and submit your payment method, we can then provide you with a list of appointment types</p>
                    {paymentMethod ?
                        <button onClick={() => handleSubmit(patientData, value, paymentMethod)}>Submit payment method</button> :
                        <button disabled>Select payment method</button>
                    }
                    <button onClick={() => value?.setStep(STEPS_NAMES.STEP_1_1)}>Back to Home</button>
                </div>
            </div>
        </>
    );
}