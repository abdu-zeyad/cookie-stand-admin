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
          <p className='text-xl  text-center  text-green-800'>Create  Cookies Stand  </p>
          <div className=" flex justify-start ">
            <p className='my-3' >Location</p>
            <input name="Location" className=" w-5/6  mx-5 my-3" />
          </div>

          <div className="flex  justify-center my-5 py-4 bg-green-300	">
            <div className=" ml-4 flex-1	" >
              <p className=' text-center  h-17'> Minimum Customers per Hour</p>
              <input name="MinCus" className="w-full" />
            </div>
            <div className=" ml-4  flex-1">
              <p className=' text-center h-17'> Maximum Customers per Hour</p>
              <input name="MaxCus" className="w-full" />
            </div>
            <div className=" ml-4 flex-1">
              <p className=' text-center h-17'> Average Cookies per Sale</p>
              <input name="AvgCokPH" className=" w-full" />
            </div>
            <button className="  flex-1 bg-green-500 text-gray-50 mx-4 my-auto mt-3" >Create</button>

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
