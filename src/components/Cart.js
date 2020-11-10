import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { applyDiscount } from '../actions/actions'
import CartIcons from './CartIcons'

function Cart() {
  const [discount, setDiscount] = useState('')
  const dispatch = useDispatch()
  const {
    cartItems,
    cartValue,
    discountAmount,
    discountApplied,
    products
  } = useSelector(st => st)

  const handleChange = e => {
    setDiscount(e.target.value)
  }

  const handleDiscount = e => {
    e.preventDefault()
    dispatch(applyDiscount(discount))
    setDiscount('')
  }

  const renderCartItems = () => {
    const itemRows = Object.keys(cartItems).map(id => (
      <div key={id} className='card col-sm-4 mb-3'>
        <div className='image-container'>
          <img
            className='card-img-top image'
            src={products[id].image_url}
            alt='product avatar'
          />
        </div>
        <div className='card-body'>
          <Link to={`/products/${id}`}>{products[id].name}</Link>
          <div className='flex-row'>
            <p>Amount: ${products[id].price}</p>
            <p>Quantity: {cartItems[id]}</p>
          </div>
          <div className='d-flex justify-content-end'>
            <CartIcons id={id}/>
          </div>
        </div>
      </div>
    ))

    return (
      <div className='d-flex flex-row flex-wrap text-center'>
        {itemRows}
      </div>
    )
  }

  return cartItems.length === 0
    ? (<h2>No items in your cart</h2>)
    : (
        <div className='row'>
          <div className='col-md-8 border'>
            {renderCartItems()}
          </div>

          <div className='col-md-4'>
          <h3>Your Cart Total</h3>
            <p>
              Total: ${cartValue}<br/>
              Quantity: {cartItems.length}
              {discountApplied
                ? <span>- You saved {(discountAmount * 100).toFixed(0)}%</span>
                : null}
            </p>
            <form onSubmit={handleDiscount}>
              <p>PromoCode:</p>
              <input
                value={discount}
                onChange={handleChange}
                name='discount'
                type='text'
              />
              <button className='center btn btn-outline-success m-2'>Apply PromoCode</button>
            </form>
          </div>      

        </div>
      )
}

export default Cart;