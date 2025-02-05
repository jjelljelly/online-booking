'use client'

import style from './layout.module.css'
import { useState, useEffect } from 'react'
import './globals.css'
import { StepsProvider, STEPS_NAMES } from './context/stepsContext'
import { LeftBanner } from './components/LeftBanner'
import { DataProvider, DataType } from './context/dataContext'
import { setGoogleAnalytics } from './components/GoogleAnalytics'

export default function Layout({
  children,
}:
  {
    children: React.ReactNode
  }
) {
  useEffect(() => {
    setGoogleAnalytics();
  }, []);

  const [step, setStep] = useState(STEPS_NAMES.STEP_1_1)
  const value = { step, setStep }

  const [data, setData] = useState<DataType>(null)
  const dataValue = { data, setData }

  return (
    <html lang="en">
      <body className={style.pageLayout}>
        <StepsProvider value={value}>
          <DataProvider data={dataValue}>
            <LeftBanner />
            <div className={style.childrenDiv}>
              {children}
            </div>
          </DataProvider>
        </StepsProvider>
      </body>
    </html>

  )
}
