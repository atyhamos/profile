import React from "react"
import profilepic from "../images/picture.jpg"
import maillogo from "../images/Mail.png"
import linkedinlogo from "../images/linkedin.png"

export default function Header() {
    return (
        <div className="head">
            <img src={profilepic} className="pic" alt="Amos' face"/>
            <h1>Amos Tan</h1>
            <h2>Computer Science Undergraduate</h2>
            <div className="btns">
                <a href="https://atyhamos.github.io/index.html"><button className="btn--email"><img src={maillogo} alt="an envelope icon"/>Website</button></a> 
                <a href="https://www.linkedin.com/in/amos-tan-yh/"><button className="btn--linkedin"><img src={linkedinlogo} alt="linkedin icon"/>LinkedIn</button></a>
            </div>
        </div>
    )
}