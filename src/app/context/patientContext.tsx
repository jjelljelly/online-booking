import { useContext, createContext } from "react";

export const patientContext = createContext<{ patientData: { [key: string]: string } | null, setPatientData: (patientData: { [key: string]: string }) => void } | null>(null);

export type DataType = {
    [key: string]: string;
} | null

export type Data = {
    patientData: DataType;
    setPatientData: (patientData: {
        [key: string]: string;
    }) => void;
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