import React from 'react';
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
       <h2>Fitness Trackr</h2>
        <ul className="nav-list">
         <li><NavLink to="/"> 
          <button>Home</button>
         </NavLink></li> 
         <li><NavLink to="/activities">
          <button>Activities</button>
         </NavLink></li>
         <li><NavLink to="/routines">
           <button>Routines</button>
         </NavLink></li>
        </ul> 
      </div>
    </>
  )
}


