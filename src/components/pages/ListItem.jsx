import React from 'react'
import "./ListItem.css"

function ListItem() {
  return (
      <li>
        <img className='item_image' src="" alt="" />
        <div className='general_information'>
          <h6 className='item_title'>Заголовок Тренировки</h6>
          <p className='short_description'>Краткое описание тренировки Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </li>
  )   
}
export default ListItem