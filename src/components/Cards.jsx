import React from "react";
import "../App.css";

function Card(props){  //simple if we want to make custom poperty so we just write props in perameter area
    return(
        <>
        <div className="card-wrapper">
          <li className="cards">
          <h3>{props.title}</h3>
          <p>{props.data}</p>
          <button className="btn-style" >read more</button>
          </li>
          
  </div>    
    </>
    )
}
export default Card;