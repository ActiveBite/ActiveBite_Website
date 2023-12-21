import React from 'react'
import "./TrainingItem.css"
import { useNavigate } from 'react-router-dom'

function ListItem({ training }) {
  const router = useNavigate()

  return (
    <li onClick={() => router(`/training/${training.id}`)} className='item'> 
      <img className='item_image' src={training.img} alt={training.title} />
      <div className='general_information'>
        <h6 className='item_title'>{training.title}</h6>
        <p className='short_description'>{training.description}</p>
      </div>
    </li>
  );
}

export default ListItem