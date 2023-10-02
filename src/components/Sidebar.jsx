import React from 'react'
import "./Sidebar.css"
import UserBlock from './UserBlock'
import Navigation from './Navigation'

function Sidebar() {
  return (
    <div className='sidebar'>
        <UserBlock/>
        <Navigation/>
    </div>
  )
}

export default Sidebar