import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'

function PrivateRouter() {
  return (
    <div className='page_wrap'>
      <Sidebar/> 
      <Outlet/>
    </div>
    
  )
}

export default PrivateRouter