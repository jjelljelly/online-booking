export async function fetchFuConfirmationResponse(patientData: any, currDate: string) {

    const submittingData = {
        appointment: patientData.patientData.appointment,
        firstName: patientData.patientData.firstName,
        lastName: patientData.patientData.lastName,
        email: patientData.patientData.email,
        selectedDate: currDate
    }
    const options = {
        method: "POST",
        body: JSON.stringify(submittingData)
    };
    if (!process.env.NEXT_PUBLIC_SUBMIT_FU) {
        throw new Error('No portal url')
    }
    try {

        const response = await fetch(process.env.NEXT_PUBLIC_SUBMIT_FU, options);
        const res = await response.json();
        return res;
    } catch (e) {
        console.error(e)
    }
}