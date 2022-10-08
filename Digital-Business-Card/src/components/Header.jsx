import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return(
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGNW2KOJrBH-Q/profile-displayphoto-shrink_800_800/0/1661446455212?e=1670457600&v=beta&t=GQ4YaK-oHMyuFeQJmKVFf8352iJsn1mBwF6NPEJE8Wk" className="image--face"/>
            <h1>Pratyaksh Aggarwal</h1>
            <h2>Frontend Developer</h2>
            <h3>pratyakshagg.github.io</h3>
            <div className="btn">
                <a className="email"><FontAwesomeIcon icon={ faEnvelope } /><span>Email</span></a> 
                <a className="linkedin"><FontAwesomeIcon icon={ faLinkedin } /><span>LinkedIn</span></a>
            </div>
        </header>
    )
}