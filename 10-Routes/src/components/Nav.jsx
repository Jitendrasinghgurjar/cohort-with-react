import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-5'>
        <NavLink className={(e)=>e.isActive?"text-red-400":""} to = '/'> Home</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-400":""} to = '/about'>About</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-400":""}to = '/product'>Product</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-400":""} to = "/service">Service</NavLink>
    </div>
  )
}

export default Nav