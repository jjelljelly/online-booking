import { DataType } from "@/app/context/patientContext";

export const RESPONSE_STRING = "Successful"

export type ConfirmationResponse = {
    outcome: string,
    paymentMethod: string
}

export async function fetchConfirmationResponse(input: { patientData: DataType } | null): Promise<ConfirmationResponse | null> {

    if (input == null) return null

    const { patientData } = input

    const submittingData = {
        appointment: patientData?.appointment,
        registrationData: patientData?.registrationData,
        selectedDate: patientData?.selectedDate,
        paymentMethod: patientData?.paymentMethod
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
        return null
    }
}