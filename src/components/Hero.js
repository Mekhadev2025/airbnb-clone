import React from "react"
import styles  from "./Hero.css"
import image2 from "../images/photo-grid.png"
 
export default function Hero() {
    return (
      <section className="hero">
                <img src ={image2} className="hero--photo"></img>
                <h1 className="hero--header">Online experiences </h1>
                <p className="hero--text">Join the unique interactive activities led by one-of-a-kind hosts -all without leaving home </p>
      </section>   
    )
}
