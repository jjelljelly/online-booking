export async function fetchConfirmationResponse(patientData: any) {
    const submittingData = {
        appointment: patientData.patientData.appointment,
        registrationData: patientData.patientData.registrationData,
        selectedDate: patientData.patientData.selectedDate,
        paymentMethod: patientData.patientData.paymentMethod
    }
    const options = {
        method: "POST",
        body: JSON.stringify(submittingData)
    };
    if (!process.env.NEXT_PUBLIC_SUBMIT) {
        throw new Error('No portal url')
    }
    try {

        const response = await fetch(process.env.NEXT_PUBLIC_SUBMIT, options);

        const res = await response.json();
        return res;
    } catch (e) {
        console.error(e)
    }
}