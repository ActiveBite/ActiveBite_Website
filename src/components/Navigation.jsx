import React from 'react'
import "./Navigation.css"

function Navigation() {
  return (
    <div className='navigation_links'>
        <a className='link' href="">Рецепты</a>
        <a className='link link_active' href="">Тренировки</a>
    </div>
  )
}

export default Navigation