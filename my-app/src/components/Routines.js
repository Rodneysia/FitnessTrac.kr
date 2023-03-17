import React, { useState } from 'react';

export const Routines = ({ allRoutines }) => {
  const [selectedCreator, setSelectedCreator] = useState(null);

  const handleCreatorClick = (creator) => {
    setSelectedCreator(creator);
  }

  const filteredRoutines = selectedCreator ? allRoutines.filter((routine) => routine.creatorName === selectedCreator) : allRoutines;

  return (
    <div>
      {selectedCreator && <p>Showing routines created by {selectedCreator}</p>}
      <div>
        {allRoutines.map((routine) => {
          return (
            <div key={routine.id}>
              <h2>{routine.name}</h2>
              <h3>{routine.goal}</h3>
              <button onClick={() => handleCreatorClick(routine.creatorName)}>View all routines by {routine.creatorName}</button>
            </div>
          );
        })}
      </div>
      <div>
        {filteredRoutines.map((routine) => {
          return (
            <div key={routine.id}>
              <h2>{routine.name}</h2>
              <h3>{routine.goal}</h3>
              <p>Created by {routine.creatorName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}