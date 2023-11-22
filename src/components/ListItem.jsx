import React from 'react'
import "./ListItem.css"

function ListItem({ training }) {
  return (
    <li>
      <img className='item_image' src={training.img} alt={training.title} />
      <div className='general_information'>
        <h6 className='item_title'>{training.title}</h6>
        <p className='short_description'>{training.description}</p>
      </div>
    </li>
  );
}

export default ListItem