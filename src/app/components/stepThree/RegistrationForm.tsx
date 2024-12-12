import { useState } from 'react'
import style from './RegistrationForm.module.css'
import { usePatientContext } from '@/app/context/patientContext';
import { HeaderSection } from '../templates/HeaderSection';
import { STEPS_NAMES } from '@/app/context/stepsContext';
import { useStepsContext } from '@/app/context/stepsContext';
import { fetchConfirmationResponse } from '../functions/fetchConfirmationResponse';
import { Loading } from '../Loading';
import AutoComplete from 'places-autocomplete-react';

export function RegistrationForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const patientData = usePatientContext()
    const value = useStepsContext()

    //form fields
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [policy, setPolicy] = useState('');
    const [auth, setAuth] = useState('');
    const [gpAddress, setGpAddress] = useState('');
    const [gpEmail, setGpEmail] = useState('');
    const [privacy, setPrivacy] = useState(false);

    // handle address select
    const addressSelection = (location: string, addressObject: { [index: string]: {} }) => {
        const typedAddress = Object.keys(addressObject)
            .reduce((acc: {}[], cur: string) => {
                if (cur !== 'formattedAddress') {
                    acc.push(addressObject[cur])
                    return acc
                }
                return acc;
            }, []).join(', ')
        if (addressObject) {
            if (location === 'home' && address !== typedAddress) {
                setAddress(typedAddress)
            }
            if (location === 'gp' && gpAddress !== typedAddress) {
                setGpAddress(typedAddress)
            }
        }
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)
        patientData?.setPatientData({
            registrationData: {
                title: title, firstName: firstName, lastName: lastName, telephone: telephone, email: email, address: address, policy: policy, auth: auth, dob: dob, gpAddress: gpAddress, gpEmail: gpEmail, privacy: privacy
            }
        })
        const submitForm = await fetchConfirmationResponse(patientData)
        if (submitForm.outcome === "Successful") {
            setIsLoading(false)
            value?.setStep(STEPS_NAMES.STEP_3_2)
        } else {
            value?.setStep(STEPS_NAMES.ERROR_SUBMIT)
        }
    }

    return (
        <div className={style.books}>
            <HeaderSection stepUpdate={STEPS_NAMES.STEP_2_2} headerText={'Registration Form'} />
            <p>You have selected {patientData?.patientData?.selectedDate?.slice(0, 22)}</p>
            <div className={style.bookingContainer}>
                <form
                    className={style.bookingForm}
                    onSubmit={(event: any) => handleSubmit(event)}
                >
                    <label>
                        <div className={style.bookingLabel}>Title:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <select name="title" value={title} onChange={e => setTitle(e.target.value)} required>
                            <option value="">-Select-</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Master">Master</option>
                            <option value="Dr">Dr</option>
                            <option value="Lord">Lord</option>
                            <option value="Sir">Sir</option>
                        </select>
                    </label>
                    <label>
                        <div className={style.bookingLabel}>First Name:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                    </label>
                    <label>
                        <div className={style.bookingLabel}>Last Name:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                    </label>
                    <label>
                        <div className={style.bookingLabel}>Date of Birth:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <input type="date" style={{ WebkitAppearance: 'button' }} value={dob} onChange={(e) => setDob(e.target.value)} required />
                    </label>
                    <label>
                        <div className={style.bookingLabel}>Telephone:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Mobile Number" required />
                    </label>
                    <label>
                        <div className={style.bookingLabel}>Email:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. example@example.com" required />
                    </label>
                    <div className={style.addressContainer}>
                        <hr /> <hr />
                        <p>Your Home Address:</p>
                        <AutoComplete
                            placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"
                            inputId="address"
                            setAddress={(addressObject: any) => addressSelection('home', addressObject)}
                            required={true}
                        />
                        <hr />
                    </div>
                    <div className={style.addressContainer}>
                        <hr />
                        <p>Your GP's Address:</p>
                        <input type="email" value={gpEmail} onChange={(e) => setGpEmail(e.target.value)} placeholder="Please provide your GP's email if available"></input>
                        <AutoComplete
                            placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"
                            inputId="gpAddress"
                            setAddress={(addressObject: any) => addressSelection('gp', addressObject)}
                        />

                        <hr />
                    </div>
                    {
                        patientData?.patientData?.paymentMethod !== 'Self-funding' ?
                            <>
                                <div>
                                    Insurance Details:
                                    <hr className={style.divider} />
                                    <label>
                                        <div className={style.bookingLabel}>Policy Number:</div>
                                        <br />
                                        <input type="text" value={policy} onChange={(e) => setPolicy(e.target.value)} placeholder="Also known as membership number" />
                                    </label>
                                    <label>
                                        <div className={style.bookingLabel}>Authorisation:</div>
                                        <br />
                                        <input type="text" value={auth} onChange={(e) => setAuth(e.target.value)} placeholder="Issued by your insurance provider" />
                                    </label>
                                    <hr className={style.divider} />
                                </div>
                            </> :
                            patientData?.patientData?.paymentMethod === 'Self-funding' &&
                            <>
                                <hr className={style.divider} />
                                <div style={{ fontSize: '14px', width: '90%', margin: 'auto' }}>
                                    The appointment fee is £{patientData?.patientData?.appointment?.appointmentFee}.<br /><br />

                                    <>Payment will be collected at the clinic following your appointment.</>

                                </div>
                                <hr className={style.divider} />
                            </>
                    }
                    <label>
                        <div className={style.bookingLabel}>Privacy:</div> <div className={style.requiredIcon}>*</div>
                        <br />
                        <div className={style.checkboxAlignment}>
                            <input
                                name="privacy"
                                type="checkbox"
                                style={{ appearance: 'auto', WebkitAppearance: 'checkbox', width: '30px', border: '1px solid var(--the-black)', margin: '0 15px' }}
                                checked={privacy}
                                onChange={() => setPrivacy(!privacy)}
                                required
                            />
                            <p>By ticking this box you indicate that you have read and agree with our<a href="https://www.londonfootandanklesurgery.co.uk/about-us/privacy-policy/" target="_blank" rel="noreferrer">&nbsp;Privacy Policy&nbsp;</a></p>
                        </div>
                    </label>
                    <input className={style.submitButton} type="submit" value="Submit" />
                </form>
            </div>
            <Loading isLoading={isLoading} />
        </div>
    )
}