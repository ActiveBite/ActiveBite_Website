import React from 'react'
import "./Exercise.css"

function Exercise() {
    return (
        <li className='list_item'>
            <div className='item_wrapper'>
                <p>Название упражнения</p>
                <p>Длительность: 5 мин</p>
            </div>
        </li>
    )
  }
  
  export default Exercise