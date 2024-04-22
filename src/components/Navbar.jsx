import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='w-full  flex justify-between px-10 py-3  '>
        <h2 className='text-2xl text-[#86003C] '><span className='text-[#fff] font-extrabold'>Your</span>Taste</h2>
        <div className='flex justify-center items-center gap-10'>
          <NavLink className={(isActive) =>{
            return (`text-white ${isActive ? '#86003C' :"text-white"}` )
          }}>Home</NavLink>
          <NavLink className={(isActive) =>{
            return (`text-white ${isActive ? '#86003C' :""}`)
          } } to={'/ingredint'}>Ingridents</NavLink>
        </div>
    </nav>
  )
}

export default Navbar