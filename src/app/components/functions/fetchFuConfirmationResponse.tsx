import { DataType } from "@/app/context/patientContext";
import { ConfirmationResponse } from "./fetchConfirmationResponse";

export async function fetchFuConfirmationResponse(input: { patientData: DataType } | null, currDate: string): Promise<ConfirmationResponse | null> {

    if (input == null) return null

    const { patientData } = input

    const submittingData = {
        appointment: patientData?.appointment,
        firstName: patientData?.firstName,
        lastName: patientData?.lastName,
        email: patientData?.email,
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
        return null
    }
}