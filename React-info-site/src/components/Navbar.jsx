import React from "react"
import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={ reactLogo } className="nav--icon" alt="" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Info Site</h4>
        </nav>
    )
}