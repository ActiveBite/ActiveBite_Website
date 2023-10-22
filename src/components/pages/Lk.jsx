import React from 'react'
import "./Lk.css"

function List_components() {
  return (
      <li>
      <img className='avatar_list' src="" alt="" />
      <div>
        <body className='list_description'>
          <h6 className='training_title'>Заголовок Тренировки</h6>
          <p className='short_description'>Краткое описание тренировки Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </body>
      </div>
    </li>
  )   
}

function Lk() {
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
    <div className='service_block'>
      <h2 className='choisen_block'>Тренировки</h2>
        <div className='list_button'>
          <div className='two_button'>
            <button className='button'>Избранные</button>
            <button className='button'>Опубликованные</button>
          </div>
          <button className='button'>Добавить</button>
        </div>    
      <div className='list_choisen_block'>
        <ul className='components_of_the_list'>
          <List_components />
          <List_components /> 
          <List_components />      
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Lk