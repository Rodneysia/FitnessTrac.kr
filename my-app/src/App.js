import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Signup } from "./components/Signup";
import { Login } from './components/Login';
import { Activities } from './components/Activities';
import { Routines } from './components/Routines'
import { GetActivities, GetRoutines } from "../src/api/index";
import './App.css';

export function App() {
  const [allActivities, setAllActivities] = useState([]);
  const [error, setError] = useState(null);
  const [allRoutines, setAllRoutines] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await GetActivities();

      setAllActivities(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetRoutines();

      setAllRoutines(data);
    };
    fetchData();
  }, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='activities' element={
          <Activities
            allActivities={allActivities}
            error={error}
            setError={setError}
            setAllActivities={setAllActivities}
            />
          }/>
        <Route
            path="/routines"
            element={
              <Routines
                allRoutines={allRoutines}
              />
            }/>
        <Route path='/signup' 
            element={<Signup />} />
        <Route path='/login' 
            element={<Login />} />
      </Routes>
    </div>
  </Router>
  );
}


