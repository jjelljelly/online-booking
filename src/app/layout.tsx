'use client'

import style from './layout.module.css'
import { useState, useEffect } from 'react'
import './globals.css'
import { StepsProvider, STEPS_NAMES } from './context/stepsContext'
import { LeftBanner } from './components/LeftBanner'
import { DataProvider, DataType } from './context/dataContext'
import { setGoogleAnalytics } from './components/GoogleAnalytics'
import Head from 'next/head'

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
        <Head>
          <title>London Foot & Ankle Surgery - Book An Appointment</title>
          <meta
            name="description"
            content="Book an appointment quickly and easily online with our foot and ankle experts based at 17 Harley Street, London"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,user-scalable=0"
          />
        </Head>
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
