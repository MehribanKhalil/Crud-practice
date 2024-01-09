import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className=' flex gap-10'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/admin'}>Admin</NavLink></li>
            <li><NavLink to={'/cart'}>Cart</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar