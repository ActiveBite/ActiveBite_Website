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
          <li className='component_of_the_list'>
            <img className='avatar_list' src="" alt="" />
            <div className='list_description'>
              <h4 className='training_title'>Заголовок тренировки</h4>
              <h6 className='short_description'>Краткое описание тренировки Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h6>
            </div>
          </li>
          <li className='component_of_the_list'>
            <img className='avatar_list' src="" alt="" />
            <div className='list_description'>
              <h4 className='training_title'>Заголовок тренировки</h4>
              <h6 className='short_description'>Краткое описание тренировки Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h6>
            </div>
          </li>
          <li className='component_of_the_list'>
            <img className='avatar_list' src="" alt="" />
            <div className='list_description'>
              <h4 className='training_title'>Заголовок тренировки</h4>
              <h6 className='short_description'>Краткое описание тренировки Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    
          

   </div>

  )
}

export default Lk