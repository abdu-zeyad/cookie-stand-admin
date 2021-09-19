import React from 'react'

export default function Form(props) {




    return (
        <div>
            <form className=" w-3/4 p-2 mx-auto my-4 bg-green-200" onSubmit={props.CookiesPostHandler}>
                <p className='text-xl  text-center  text-green-800'>Create  Cookies Stand  </p>
                <div className=" flex justify-start ">
                    <p className='my-3' >Location</p>
                    <input name="Location" className=" w-5/6  mx-5 my-3" />
                </div>

                <div className="flex  justify-center my-5 py-4 bg-green-300	">
                    <div className=" ml-4 flex-1 bg-green-400 p-2	" >
                        <p className=' text-center  h-17'> Minimum Customers per Hour</p>
                        <input name="MinCus" className="w-full" />
                    </div>
                    <div className=" ml-4  flex-1 bg-green-400 p-2">
                        <p className=' text-center h-17'> Maximum Customers per Hour</p>
                        <input name="MaxCus" className="w-full" />
                    </div>
                    <div className=" ml-4 flex-1 bg-green-400 p-2">
                        <p className=' text-center h-17'> Average Cookies  per Sale  daily</p>
                        <input name="AvgCokPH" className=" w-full" />
                    </div>
                    <button className="  flex-1 bg-green-500 text-gray-50 mx-4 " >Create</button>

                </div>
            </form>
        </div>
    )
}
