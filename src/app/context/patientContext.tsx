import { useContext, createContext } from "react";
import { Appointment } from "../types/Appointment";

export const patientContext = createContext<{ patientData: DataType, setPatientData: (patientData: DataType) => void } | null>(null);

export type DataType = {
    paymentMethod?: string,
    appointment?: Appointment,
    firstName?: string,
    lastName?: string,
    email?: string,
    selectedDate?: string,
    isNewPatient?: boolean,
    registrationData?: {
        title: string,
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address: string,
        dob: string,
        policy: string,
        auth: string,
        gpAddress: string,
        gpEmail: string,
        privacy: boolean
    }
} | null

export type Data = {
    patientData: DataType;
    setPatientData: (patientData: DataType) => void;
} | null;

export type DataProviderType = {
    patientData: Data
    children: React.ReactNode
}

export function PatientDataProvider({ children, patientData }: DataProviderType) {
    return <patientContext.Provider value={patientData}>
        {children}
    </patientContext.Provider>
}

export const usePatientContext = () => useContext(patientContext)