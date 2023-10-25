import React from 'react'
import "./Trains.css"
import ListItem from "./ListItem.jsx"


function Trains() {
  return (
    <div>
        
      <div>
        <h2 className='categories_title'>Тренировки</h2>
        <div className='search_block'>
            <input type="text" className="search_input" placeholder="Поиск"/>
            <button class='filter_button'>Фильтры</button>
        </div>
        <div className='list_wrapper'>
          <ul className='list'>
            <ListItem />   
          </ul>
        </div>
      </div>
   </div>
  )
}

export default Trains