import { useContext, createContext } from "react";

export const DataContext = createContext<{ data: { [key: string]: string } | null, setData: (data: { [key: string]: string }) => void } | null>(null);

export type DataType = {
    [key: string]: string;
} | null

export type Data = {
    data: DataType;
    setData: (data: {
        [key: string]: string;
    }) => void;
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