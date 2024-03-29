import React, { useState } from 'react';
import { Navigate, NavLink } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userIsRegistered, setUserIsRegistered] = useState(false);
    const [errors, setErrors] = useState(null);
  
    if (userIsRegistered) {
      return <Navigate to="/routines"/>
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const token = localStorage.getItem('authToken');

      const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
              user : {
                  username: username,
                  email: email,
                  password: password,
              }
          })
      });

      if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem('authToken', token);
          setUserIsRegistered(true);
      } else {
          const { errors } = await response.json();
          const errorMessage = Object.values(errors)[0];
          setErrors(errorMessage);
      }
  };
  
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} 
              onChange={(event) => setUsername(event.target.value)} required />
            {errors && errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} placeholder="youremail@email.com" 
              onChange={(event) => setEmail(event.target.value)} required />
            {errors && errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password"  id="password" value={password} minLength={8} placeholder="password"
              onChange={(event) => setPassword(event.target.value)} required />
            {errors && errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Signup</button>
        </form>
        <NavLink to="/login"> Already have an account? Login here </NavLink>
      </>
    );
  };