import React from 'react'
import "./Lk.css"

function Lk() {
  return (
    <div className='user'>
    <div className='lk_header'>
      <div className='avatar_header'>
        <img  className='avatar' src="" alt="" />
        <h3 className='username'>username</h3>
      </div>
      <div className='lk_buttons_wrap'>
        <button className='recipes_button'>Рецепты</button>
        <button className='training_button'>Тренировки</button>
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
        <ul>
        </ul>
      </div>
    </div>
    
    
          

   </div>

  )
}

export default Lk