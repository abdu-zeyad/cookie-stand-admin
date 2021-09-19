import React from 'react'
import { hours } from './Data'

export default function ReportResults(props) {


    return (
        <table className='w-5/6 mx-auto mt-4 text-center border border-green-300 rounded-md'>

            <thead className='bg-green-500 border border-green-300'>
                <th className='px-2'>Location</th>
                {
                    props.workingHours.map(item => {
                        return (
                            <th>{item} </th>
                        )
                    })
                }
                <th>Totals</th>
            </thead>

            <tbody>
                {
                    props.report.map((store, idx) => {

                        const element =
                            <>
                                <td className='px-2 border border-black' >{store.location}</td>
                                {
                                    store.hourlySales.map(item => {
                                        return (
                                            <td className='border border-black'> {item} </td>
                                        )
                                    })
                                }
                                <td className='border border-black'>{store.total}</td>
                            </>

                        if (idx % 2 == 0) {
                            return (
                                <tr className='bg-green-400'>
                                    {element}
                                </tr>
                            )
                        } else {
                            return (
                                <tr className='bg-green-300'>
                                    {element}
                                </tr>
                            )
                        }
                    })
                }
            </tbody>

            <tfoot className='bg-green-500'>
                <td className='px-2 font-semibold border border-black'>Totals</td>
                {
                    props.totals.map(item => {
                        return (
                            <td className='font-semibold border border-black'>{item}</td>
                        )
                    })
                }
            </tfoot>
        </table>
    )
}
