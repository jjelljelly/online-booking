export async function fetchPatientData(data: any) {
    const options = {
        method: "POST",
        body: data
    };

    if (!process.env.NEXT_PUBLIC_FIND_PATIENT) {
        throw new Error('No portal url')
    }
    const response = await fetch(process.env.NEXT_PUBLIC_FIND_PATIENT, options);
    const res = await response.json();
    return res;
}