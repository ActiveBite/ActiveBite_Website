import React from 'react'
import exbutton from "./exit.svg" 
import "./UserBlock.css"
import { useNavigate } from 'react-router-dom'

function UserBlock() {
  const avatar = localStorage.getItem('avatar')
  const username = localStorage.getItem('username')
  const router = useNavigate()

  return (
    <div className='userblock'>
        <div className='avatar' onClick={() => router('/lk')} style={{cursor: 'pointer'}}>
            <img src={avatar ? avatar : ''} alt="" />
        </div>
        <h3 className='username'> {username ? username : 'username'}  </h3>
        <img className='exit_button' src={exbutton} alt=''/> 
    </div>
  )
}

export default UserBlock