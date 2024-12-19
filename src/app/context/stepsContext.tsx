"use client";
import { createContext, useContext } from "react";

export enum STEPS_NAMES {
    STEP_1_1,
    STEP_1_2,
    STEP_1_3,
    STEP_2_1,
    STEP_2_2,
    STEP_3_1,
    STEP_3_2,
    ERROR_LOCATE,
    ERROR_SUBMIT
}

export const StepsContext = createContext<{ step: STEPS_NAMES, setStep: (step: STEPS_NAMES) => void } | null>(null);

export type StepsData = {
    step: STEPS_NAMES;
    setStep: (step: STEPS_NAMES) => void;
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