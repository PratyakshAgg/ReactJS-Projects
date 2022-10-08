import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className="footer">
            <a><FontAwesomeIcon icon={ faFacebook } /></a>
            <a><FontAwesomeIcon icon={ faTwitter } /></a>
            <a><FontAwesomeIcon icon={ faInstagram } /></a>
            <a><FontAwesomeIcon icon={ faGithub } /></a> 
        </div>
    )
}