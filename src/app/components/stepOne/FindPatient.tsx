import style from './FindPatient.module.css'
import { useState } from 'react'
import { fetchPatientData } from '../functions/fetchPatientData';
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext';
import { usePatientContext } from '@/app/context/patientContext';
import { Loading } from '../Loading';

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
        const data = await fetchPatientData(form)
        if (data) {
            patientData?.setPatientData({ firstName: e.target.first_name.value, lastName: e.target.last_name.value })
            setIsLoading(false)
            value?.setStep(STEPS_NAMES.STEP_2_1)
        }
    }

    return <>
        <form className={style.form} onSubmit={handleSubmit}>
            <h2>Help us to find you on our system</h2>
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
            </div>
            <button type="submit">
                Submit
            </button>
            <button onClick={() => value?.setStep(STEPS_NAMES.STEP_1_1)}>Back to Home</button>
            <Loading isLoading={isLoading} />
        </form>
    </>
}