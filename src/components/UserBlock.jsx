import React from 'react'
import exbutton from "./exit.svg" 
import "./UserBlock.css"

function UserBlock() {
  const avatar = localStorage.getItem('avatar')
  const username = localStorage.getItem('username')
  
  return (
    <div className='userblock'>
        <div className='avatar'>
            <img src={avatar ? avatar : ''} alt="" />
        </div>
        <h3 className='username'> {username ? username : 'username'}  </h3>
        <img className='exit_button' src={exbutton} alt=''/> 
    </div>
  )
}

export default UserBlock