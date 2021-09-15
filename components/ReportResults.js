import React from 'react'
import { hours } from './Data'

export default function ReportResults(props) {
    const random_number = Math.floor(Math.random() * props.printInfo[0].MinCus)

    return (
        <table className="" >
            <tr>
                <th>location</th>
                {hours.map(hour => {
                    return (<th>{hour}</th>
                    )
                })}
                <th>total</th>
            </tr>
            {props.printInfo.map(data => {
                return (
                    <tr>
                        <td>{data.location}</td>
                        {hours.map(hour => {
                            return (<th></th>
                            )
                        })}
                    </tr>

                )
            })}
        </table>
    )
}
