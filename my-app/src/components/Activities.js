import React, { useEffect, useState } from "react";




export const Activities = ({allActivities, error, setError, setAllActivities}) => {
  return (
    <div>
      {allActivities.map(elem =>{
        console.log(elem)
        return <div>
          <h2>{elem.name}</h2>
          <p>{elem.description}</p>
        </div>
      }) }
      
    </div>
  )
}

