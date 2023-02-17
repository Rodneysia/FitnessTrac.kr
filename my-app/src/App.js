import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Activities } from './components/Activities';
import { GetActivities } from "../src/api/index";
import './App.css';

export function App() {
  const [allActivities, setAllActivities] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await GetActivities();

      setAllActivities(data);
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
        
      </Routes>
    </div>
  </Router>
  );
}


