"use client";

import { useState, useEffect } from "react";
import { useDataContext } from "./context/dataContext";
import { AppointmentList } from "./components/AppointmentList";
import style from './page.module.css'
import { PatientDataProvider, DataType } from "./context/patientContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Home() {
  const info = useDataContext()
  const [patientData, setPatientData] = useState<DataType>(null)
  const mergePatientData = (patientData: DataType) => {
    setPatientData(prev => ({ ...prev, ...patientData }))
  }
  const patientDataValue = { patientData, setPatientData: mergePatientData }

  const endTime = new Date()
  endTime.setFullYear(endTime.getFullYear() + 1)
  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FIND_AVAILABILITY) {
      throw new Error('No portal url')
    }
    fetch(process.env.NEXT_PUBLIC_FIND_AVAILABILITY, {
      method: "POST",
      body: JSON.stringify({
        info: {
          ...(info?.data ?? {}),
          startTime: startDate.toISOString()
        }
      })
    })
      .then((response) => response.json())
      .then((res) => {
        info?.setData({ ...(info?.data ?? {}), ...res })
        const newStartTime = new Date(startDate)
        newStartTime.setMonth(newStartTime.getMonth() + 2)
        if (newStartTime < endTime) {
          setStartDate(prev => newStartTime)
        }
      }).catch(error => console.error(error))
  }, [startDate]);
  return (
    <div className={style.pageDiv}>
      <main>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <PatientDataProvider patientData={patientDataValue}>
            <AppointmentList />
          </PatientDataProvider>
        </LocalizationProvider>
      </main>
    </div>
  );
}
