import React from 'react'
import { UserRegister } from '../api/index';

export default function Register() {
  return (
    <div>
      {UserRegister.map(elem =>{
        console.log(elem)
        return <div>
          <h2>{elem.name}</h2>
          <p>{elem.description}</p>
        </div>
      }) }
      
    </div>
  )
}
