import style from './FindPatient.module.css'
import { useState } from 'react'
import { fetchPatientData } from '../functions/fetchPatientData';
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext';
import { usePatientContext } from '@/app/context/patientContext';
import { Loading } from '../Loading';
import { HeaderSection } from '../templates/HeaderSection';

export function FindPatient() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const value = useStepsContext()
    const patientData = usePatientContext()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        const form = new FormData()
        form.append("dob", e.target.dob.value.split('-').reverse().join('.'))
        form.append("name", e.target.last_name.value)
        form.append("email", e.target.email.value)
        const data = await fetchPatientData(form)
        if (data.outcome) {
            patientData?.setPatientData({ firstName: e.target.first_name.value, lastName: e.target.last_name.value, email: e.target.email.value, paymentMethod: data.paymentMethod })
            setIsLoading(false)
            value?.setStep(STEPS_NAMES.STEP_2_1)
        } else {
            value?.setStep(STEPS_NAMES.ERROR_LOCATE)
        }
    }

    return <>
        <HeaderSection stepUpdate={STEPS_NAMES.STEP_1_1} headerText={'Help us find your profile'} />
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.labelsDiv}>
                <label>
                    First name:
                    <input
                        type='text'
                        id='first_name'
                        name='first_name'
                        required
                    ></input>
                </label>
                <label>
                    Last name:
                    <input
                        type='text'
                        id='last_name'
                        name='last_name'
                        required
                    ></input>
                </label>
                <label>
                    Date of birth:
                    <input
                        type='date'
                        id='dob'
                        name='dob'
                        required
                    ></input>
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        id='email'
                        name='email'
                        required
                    ></input>
                </label>
            </div>
            <button type="submit">
                Submit
            </button>
            <Loading isLoading={isLoading} />
        </form>
    </>
}