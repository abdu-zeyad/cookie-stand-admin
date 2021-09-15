import React from 'react'
import { hours } from './Data'

export default function ReportResults(props) {

    const table = []
    for (let i = 0; i < props.printInfo.length; i++) {
        const row = []
        for (let j = 0; j < hours.length; j++) {
            row.push(Math.floor(Math.random() * (props.printInfo[i].MaxCus - props.printInfo[i].MinCus + 1) + props.printInfo[i].MinCus) * 17)
        }
        table.push(row)
    }
    console.log(table);
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
                        {table.map((row, index) => {

                            return (
                                <td>
                                    {
                                        row.map((subitem, subindex) => {
                                            return (<td>{subitem}</td>)

                                        })
                                    }
                                </td>

                            )

                        })}

                    </tr>

                )
            })}
        </table>
    )
}
