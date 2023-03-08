import React from 'react';
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to Fitness Trackr</h1>
      <NavLink to="/login"> Login here </NavLink>
    </div>
  )
}

