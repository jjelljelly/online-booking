"use client";
import { createContext, useContext, useState } from "react";

export const STEPS_NAMES = {
    STEP_1_1: "STEP_1_1",
    STEP_1_2: "STEP_1_2",
    STEP_1_3: "STEP_1_3",
    STEP_2_1: "STEP_2_1",
    STEP_3_1: "STEP_3_1",
    LOADING: "LOADING"
}

export const StepsContext = createContext<{ step: string, setStep: (step: string) => void } | null>(null);

export type StepsType = string

export type StepsData = {
    step: StepsType;
    setStep: (step: string) => void;
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