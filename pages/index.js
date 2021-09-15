import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Form from '../components/Form';
import ReportResults from '../components/ReportResults';

export default function Home() {
  const [printInfo, setInfo] = useState([]);
  return (
    <div className="">
      <Head>
        <title>Cookies Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header title="Cookies Stand Admin" />
        <Form setInfo={setInfo} />

        {printInfo.length ? <ReportResults printInfo={printInfo} />
          : <h2>No Cookie Stands Available</h2>}

        <Footer year='2021' />

      </main>

    </div>
  )
}
