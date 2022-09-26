import React from 'react'
import Cards from "./Cards"
import Sdata from './Sdata'
import "./parent.css"

const n_cards = (val) => {
        return(
            <Cards
            data={val.data}
            title={val.title}              
            />  
        );
    }


const ParentCard = () => {
  return (
    <> {Sdata.map(n_cards)}</>
  )
}

export default ParentCard