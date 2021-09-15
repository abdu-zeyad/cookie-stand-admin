import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <footer className="p-4 mt-8 bg-green-500 text-black-50">
                <nav>
                    @{props.year}
                </nav>
            </footer>
        </div>
    )
}
