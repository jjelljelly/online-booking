"use client";
import { createContext, useContext } from "react";

export enum STEPS_NAMES {
    STEP_1_1,
    STEP_1_2,
    STEP_1_3,
    STEP_2_1,
    STEP_3_1,
    LOADING,
}

export const StepsContext = createContext<{ step: number, setStep: (step: number) => void } | null>(null);

export type StepsType = number

export type StepsData = {
    step: StepsType;
    setStep: (step: number) => void;
} | null;

export type StepsProviderType = {
    value: StepsData
    children: React.ReactNode
}

export function StepsProvider({ children, value }: StepsProviderType) {
    return <StepsContext.Provider value={value}>
        {children}
    </StepsContext.Provider>
}

export const useStepsContext = () => useContext(StepsContext)