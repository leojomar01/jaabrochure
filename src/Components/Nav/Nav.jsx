import React from 'react'
import './nav.scss'
import { Link } from "react-router";

function Nav() {
  return (
      <div id="nav">
            <div className="section logo">
               <Link to={'/'}> <img src="./logo.png" alt="" /></Link>
            </div>
            
            <div className="section">
                <span><Link to={'/'}>Home</Link></span>
                <span><Link to={'/jersey'}>Jersey</Link></span>
                <span><Link to={'/poloshirt'}>Polo Shirt</Link></span>
                <span><Link to={'/longesleeve'}>Long Sleeve</Link></span>
                <span><Link to={'/jersey'}>Jersey</Link></span>
                <span><Link to={'/jersey'}>Jersey</Link></span>
            </div>
            <div className="section"></div>

            
        </div>
  )
}

export default Nav