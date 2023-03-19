import React from 'react'
import styles from './Card.css'
import katie from "../images/katie.png"
import img2 from "../images/wedding.png"
import img3 from "../images/bike.png"
import star from "../images/star.png"
export default function Card(props) {
 
  const photo=[katie,img2,img3]
    return(
      <div className="card">
          {props.openSpots ===0 && <div className="card--badge">SOLD OUT</div>}  
                <img src= {photo[Math.floor(Math.random() * 3)]} className="card--image"/>
                <div className="card--stats"> 
                      <img src={star} className="card--star"/>
                      <span>{props.rating}</span>
                      <span className='grey'>({props.reviewCount})</span>
                      <span className='grey'>{props.country}</span>
                </div>
            <p>{props.title}</p>
            <p className="card--price"><span className='bold'>From ${props.price}</span> /person</p>

      </div>
    )
}
