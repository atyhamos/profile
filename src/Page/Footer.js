import React from "react"
import instagramlogo from "../images/instagram.png"
import githublogo from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <ul className="icons">
                <li><a href="https://www.instagram.com/atyhamos/"><img src={instagramlogo} alt="instagram logo"/></a></li>
                <li><a href="https://github.com/atyhamos"><img src={githublogo} alt="github logo"/></a></li>
            </ul>
        </footer>
    )
}