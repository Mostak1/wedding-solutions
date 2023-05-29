import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">User Home</Link></li>
        <li><Link to="">Home</Link></li>
        <li><Link to="add-product">Add Product</Link></li>
        <li><Link to="user">User</Link></li>
      </ul>
    </div>
  )
}

export default Header
