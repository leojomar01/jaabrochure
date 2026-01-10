import React from 'react'
import './latest.scss'
import list from '../../list.json'

function Latest() {
  
  return (
    <div id='Latest'>
        <div className="cards">
            {[...list].reverse().slice(0,15).map((item, index) => (
                <div  className= 'card' key={index}>
                  <div className="wrapper"></div>
                  <img src={item.link} alt="" />
                </div>
            ))}
         
     
        </div>
    </div>
  )
}

export default Latest