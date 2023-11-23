import React from 'react'
import "./ListItem.css"
import { useNavigate } from 'react-router-dom';


function ListItem({ training }) {
  const navigate = useNavigate()
  return (
    <li className='list_item'onClick={() => (navigate(`/training/${training.id}`,console.log(51559161)))}>
      <img className='item_image' src={training.img} alt={training.title} />
      <div className='general_information'>
        <h6 className='item_title'>{training.title}</h6>
        <p className='short_description'>{training.description}</p>
      </div>
    </li>
  );
}

export default ListItem