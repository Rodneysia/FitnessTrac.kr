import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

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

         {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Signout</button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            </li>
          )}
        </ul> 
        
      </div>
    </>
  )
}


