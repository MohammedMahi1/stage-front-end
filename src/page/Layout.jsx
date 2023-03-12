import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const Layout = () => {
  return (
  <div>
    <Outlet/>
    </div>

  )
}

export default Layout