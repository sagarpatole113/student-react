import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/home" style={{ textDecoration: 'none', color: "inherit"}}>
         <h1 class="display-4 text-center"> Student Management App </h1>
      </Link>
     <Outlet />
    </div>
  )
}

export default Header
    