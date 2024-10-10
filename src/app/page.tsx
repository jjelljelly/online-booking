"use client";

import { useStepsContext } from "./context/stepsContext";
import { useState, useEffect } from "react";
import { useDataContext } from "./context/dataContext";
import { AppointmentList } from "./components/stepOne/AppointmentList";
import style from './page.module.css'
import { PatientDataProvider, DataType } from "./context/patientContext";
import AppointmentType from "./appointmentType";

export default function Home() {
  const value = useStepsContext()
  const info = useDataContext()
  const [patientData, setPatientData] = useState<DataType>(null)
  const patientDataValue = { patientData, setPatientData }
  const newEndTime = new Date()
  newEndTime.setFullYear(newEndTime.getFullYear() + 1)
  const [startDate, setStartDate] = useState({ startTime: new Date(), endTime: newEndTime })

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FIND_AVAILABILITY) {
      throw new Error('No portal url')
    }
    fetch(process.env.NEXT_PUBLIC_FIND_AVAILABILITY, {
      method: "POST",
      body: JSON.stringify({
        info: {
          ...info?.data,
          startTime: startDate.startTime.toISOString()
        }
      })
    })
      .then((response) => response.json())
      .then((res) => {
        info?.setData({ ...info?.data, ...res })
        const newStartTime = startDate.startTime
        newStartTime.setMonth(startDate.startTime.getMonth() + 2)
        if (newStartTime <= startDate.endTime) {
          setStartDate(prev => ({ ...prev, startTime: newStartTime }))
        }
      })
  }, [startDate]);
  return (
    <div className={style.pageDiv}>
      <main>
        <PatientDataProvider patientData={patientDataValue}>
          <AppointmentList />
        </PatientDataProvider>
      </main>
    </div>
  );
}
