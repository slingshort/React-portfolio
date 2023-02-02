import React from "react";
import { SiGithub,SiLinkedin } from "react-icons/si";


export default function Footer() {
    return(
        <footer>
            <a className="icons" href="https://github.com/slingshort"> <SiGithub /></a>
            <a className="icons" href="https://www.linkedin.com/in/salina-m-a1655111b/"> <SiLinkedin /></a>
        </footer>
    )
}
