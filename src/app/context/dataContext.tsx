import { useContext, createContext } from "react";

export const DataContext = createContext<{ data: DataType, setData: (data: DataType) => void } | null>(null);

export type DataType = {
    startTime: string,
    kaserFinalAvailableDates: string[],
    stevenFinalAvailableDates20: string[],
    stevenFinalAvailableDates40: string[],
    stevenFinalAvailableDates60: string[],
    kaserThenStevenAvailableDates: string[],
    kaserWithNurseAvailableDates: string[],
    stevenWithNurseAvailableDates20: string[],
    stevenWithNurseAvailableDates40: string[],
    stevenWithNurseAvailableDates60: string[],
    stevenWhilstKaserInClinicAvailableDates: string[]
} | null

export type Data = {
    data: DataType;
    setData: (data: DataType) => void;
} | null;

export type DataProviderType = {
    data: Data
    children: React.ReactNode
}

export function DataProvider({ children, data }: DataProviderType) {
    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export const useDataContext = () => useContext(DataContext)