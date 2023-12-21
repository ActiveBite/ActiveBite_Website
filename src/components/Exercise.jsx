import React from 'react'
import "./Exercise.css"

function Exercise({title, duration}) {
    return (
        <li className='list_exercises_item'>
            <p>{title}</p>
            <p>Длительность: {duration} мин.</p>
        </li>
    )
  }
  
  export default Exercise