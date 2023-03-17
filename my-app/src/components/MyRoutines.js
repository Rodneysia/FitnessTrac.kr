import React, { useEffect, useState } from 'react';

export const MyRoutines = ({ username }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setRoutines(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoutines();
  }, [username]);

  return (
    <div>
      <h1>My Routines</h1>
      {routines.map(routine => (
        <div key={routine.id}>
          <h3>{routine.name}</h3>
          <p>{routine.goal}</p>
          <ul>
            {routine.activity.map(activity => (
              <li key={activity.id}>
                <h4>{activity.name}</h4>
                <p>{activity.description}</p>
                <p>{activity.duration} minutes, {activity.count} reps</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

