import React from 'react'
import { hours } from './Data'

export default function ReportResults(props) {


    return (
        <table className=" mx-auto" >
            <tr>
                <th>location</th>
                {hours.map(hour => {
                    return (<th>{hour}</th>
                    )
                })}
                <th>total</th>
            </tr>

            <tbody>
                {props.printTable.map(x => (
                    <tr key={`${x.id}`}>
                        <td className="p-3 pl-2 border bg-green-500">{x.location}</td>
                        {x.hourlyRate.map(hour => (
                            <td className="p-3 pl-2 border bg-green-500">{hour}</td>
                        ))
                        }

                    </tr>))
                }
            </tbody>
        </table>
    )
}
