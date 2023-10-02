import React from 'react'
import exbutton from "../../exit.svg" 

function UserBlock() {
  return (
    <div>
        <div className='avatar'>
            <img src="" alt="" />
        </div>
        <h3 className='username'>   </h3>
        <img className='exit_button' src={exbutton} alt=''/> 
    </div>
  )
}

export default UserBlock