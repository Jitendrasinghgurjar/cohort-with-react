import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 text-sm mb-8 font-semibold">
        <NavLink className={(e)=>e.isActive ? "text-red-300":""}to='/'>Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""}to='/recipes'>Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""}to='/about'>About</NavLink>
        <NavLink className={ (e)=>e.isActive ? "text-red-300": ""}to='/create-recipe'>Create</NavLink>
    </div>
  )
}

export default Navbar