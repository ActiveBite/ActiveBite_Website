import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'

function PrivateRouter() {
  return (
    <div className='page_wrap'>
      <Sidebar/> 
      <div className='content_wrap'>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default PrivateRouter