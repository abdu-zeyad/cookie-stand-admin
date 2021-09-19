import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Form from '../components/Form';
import ReportResults from '../components/ReportResults';

export default function Home() {
  const [workingHours, setworkingHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const [report, setallstores] = useState([])
  const [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


  function CookiesPostHandler(event) {


    event.preventDefault();

    console.log(event.target.MinCus.value);
    let MinCus = parseInt(event.target.MinCus.value)
    let MaxCus = parseInt(event.target.MaxCus.value)
    let AvgCokPH = parseInt(event.target.AvgCokPH.value)
    console.log(MinCus, MaxCus, AvgCokPH);
    let sum = 0


    const store = {
      location: event.target.Location.value,
      hourlySales: workingHours.map(() => Math.ceil(AvgCokPH * (Math.ceil(Math.random() * (MaxCus - MinCus) + MinCus)))),
    }

    for (let i = 0; i < store.hourlySales.length; i++) {
      sum = sum + store.hourlySales[i]
    }
    store.total = sum

    setallstores([...report, store])


    let total_sum = totals.map((item, idx) => {
      if (idx === totals.length - 1) {
        return item + store.total
      }
      return item + store.hourlySales[idx]
    })

    setbranchestotals(total_sum)


  }

  return (
    <div className="">
      <Head>
        <title>Cookies Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header title="Cookies Stand Admin" />
        <Form CookiesPostHandler={CookiesPostHandler} />

        {report.length ? <ReportResults report={report} workingHours={workingHours} totals={totals} />
          : <h2 className=' text-center '>No Cookie Stands Available</h2>}

        <Footer year='2021' />

      </main>

    </div>
  )
}
