import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { calculateTotalQuantity } from '../actions/helpers'

function NavBar() {
  const itemCount = useSelector(st => calculateTotalQuantity(st.cartItems))
  const cartValue = useSelector(st => st.cartValue)
  const itemUnit = itemCount === 1 ? 'item' : 'items'

  return (
    <nav className='navbar nav custom-nav'>
      <Link to='/'>SHOPLY</Link>
      <ul className='nav d-flex flex-row'>
        <li className='mr-3'>
          <Link to='/cart'>
            Cart
          </Link>
        </li>
        <li>
          <span>
            {itemCount} {itemUnit} (${cartValue})
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar