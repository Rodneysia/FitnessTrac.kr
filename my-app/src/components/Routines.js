import React from 'react'


export const Routines = ({allRoutines}) => {
  return (
    <div>
      {allRoutines.map(elem =>{
        return <div> 
            <h2>{elem.name}</h2>
            <h3>{elem.goal}</h3>
            <p>{elem.creatorName}</p>
        </div>
      })}
    </div>
  )
}

