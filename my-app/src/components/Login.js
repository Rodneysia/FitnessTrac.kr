import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userIsActive, setUserIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (userIsActive) {
    return <Navigate to="/activities"/>
  } 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('authToken', token);
      setUserIsActive(true);
    } else {
        setErrorMessage('Invalid email or password. Please try again');
        throw response.error;
    }
  };

  return (
    <>
    {errorMessage && (
       <p> {errorMessage} </p>
    )}
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" placeholder="youremail@email.com" value={email} 
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" placeholder="password" value={password} 
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
    <NavLink to="/signup"> New to Fitness Trackr? Sign up here </NavLink>
    </>
  );
};


