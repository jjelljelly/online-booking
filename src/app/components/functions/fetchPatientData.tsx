import { ConfirmationResponse } from "./fetchConfirmationResponse";

export async function fetchPatientData(data: FormData): Promise<ConfirmationResponse | null> {

    const options = {
        method: "POST",
        body: data
    };

    if (!process.env.NEXT_PUBLIC_FIND_PATIENT) {
        throw new Error('No portal url')
    } try {
        const response = await fetch(process.env.NEXT_PUBLIC_FIND_PATIENT, options);
        const res = await response.json();
        return res;
    } catch (error) {
        console.error(error);
        return null
    }

}