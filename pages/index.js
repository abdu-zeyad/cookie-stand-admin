import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  const [printInfo, setInfo] = useState([]);

  function CookiesPostHandler(event) {
    event.preventDefault();
    const answeredQuestion = {
      location: event.target[0].value,
      MinCus: event.target[1].value,
      MaxCus: event.target[2].value,
      AvgCokPH: event.target[3].value,

    }

    setInfo(questions => [...questions, answeredQuestion])

  }

  // function getLatestReply() {
  //   return answeredQuestions[answeredQuestions.length - 1]?.reply || 'Ask me anything!'
  // }

  return (
    <div className="">
      <Head>
        <title>Cookies Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header title="Cookies Stand Admin">

        </Header>

        <form className=" w-3/4 p-2 mx-auto my-4 bg-green-200" onSubmit={CookiesPostHandler}>
          <p>Create  Cookies Stand  </p>
          <div className="flex">
            <p>Location</p>
            <input name="Location" className="w-3/4" />
          </div>

          <div className="flex w-4/5	">
            <div className="w-2/5 m-2	" >
              <p> Minimum Customers per Hour</p>
              <input name="MinCus" className="" />
            </div>
            <div className="w-2/5 m-2">
              <p> Maximum Customers per Hour</p>
              <input name="MaxCus" className="" />
            </div>
            <div className="w-2/5 m-2">
              <p> Average Cookies per Sale</p>
              <input name="AvgCokPH" className="" />
            </div>
            <button className="px-8 py-1 bg-green-500 text-gray-50">Create</button>

          </div>
        </form>

        <div className="text-center	">
          <p>Report Table Coming Soon ... </p>
          {printInfo && printInfo.map(printInfo => (

            <p> "locaion": "{printInfo.location}","minCustomers":{printInfo.MinCus},"maxCustomers":{printInfo.MaxCus},"avgCookies":{printInfo.AvgCokPH} </p>

          ))}

        </div>

        <footer className="p-4 mt-8 bg-green-500 text-black-50">
          <nav>
            @2021
          </nav>
        </footer>

      </main>

    </div>
  )
}
