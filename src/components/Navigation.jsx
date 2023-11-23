import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation_links'>
        <Link className='link' to='/recipes'>Рецепты</Link>
        <Link className='link' to='/trainings'>Тренировки</Link>
    </div>
  )
}

export default Navigation