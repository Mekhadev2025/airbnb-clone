import React from "react"
import styles  from "./Navbar.css"

 import logo from "../images/airbnb-logo.png"
export default function Navbar() {
    return (
        <nav> 
            <img src={logo} alt="hiiiiii" className="nav--logo"/>
        </nav>
    )
}
