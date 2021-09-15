import React from 'react'

export default function ReportResults(props) {
    return (
        <div>
            <div className="text-center	">
                <p>Report Table Coming Soon ... </p>
                {props.printInfo && props.printInfo.map(printInfo => (

                    <p> "location": "{printInfo.location}","minCustomers":{printInfo.MinCus},"maxCustomers":{printInfo.MaxCus},"avgCookies":{printInfo.AvgCokPH} </p>

                ))}

            </div>
        </div>
    )
}
