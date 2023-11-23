import React from 'react'
import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <div className='error_wrap'>
    <h1 className='error'>404</h1>
    <h2 className='error_description'>Страница недоступна</h2>
    </div>
  )
}

export default NotFoundPage