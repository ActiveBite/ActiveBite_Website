import React from 'react'
import exbutton from "./exit.svg" 
import "./UserBlock.css"

function UserBlock() {
  return (
    <div className='userblock'>
        <div className='avatar'>
            <img src="" alt="" />
        </div>
        <h3 className='username'> username  </h3>
        <img className='exit_button' src={exbutton} alt=''/> 
    </div>
  )
}

export default UserBlock