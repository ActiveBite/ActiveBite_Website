import React, { useState } from 'react'
import "./Lk.css"
import ListItem from "./ListItem.jsx"
import Mw from './Mw.jsx'

function Lk() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className='user'>
      <div className='lk_header'>
        <div className='avatar_header'>
          <img  className='avatar' src="" alt="" />
          <h3 className='username'>username</h3>
        </div>
        <div className='lk_buttons_wrap'>
          <button className='button_header'>Рецепты</button>
          <button className='button_header'>Тренировки</button>
        </div>
      </div>
      <div>
        <h2 className='categories_title'>Тренировки</h2>
        <div className='categories_button'>
          <div className='categories'>
            <button className='button'>Избранные</button>
            <button className='button'>Опубликованные</button>
          </div>
          <button className='button_addendum' onClick={() => setModalActive(true)}>Добавить</button> 
        </div>    
        <div className='list_wrapper'>
          <ul className='list'>
            <ListItem />
            <ListItem /> 
            <ListItem />       
          </ul>
        </div>
      </div>
      <Mw active={modalActive} setActive={setModalActive}/>
   </div>
  )
}


export default Lk