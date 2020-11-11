import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { applyDiscount } from '../actions/actions'
import { calculateTotalQuantity } from '../actions/helpers'
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

  const itemCount = useSelector(st => calculateTotalQuantity(st.cartItems))

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
    ? (<h2 className='text-center'>No items in your cart</h2>)
    : (
        <div>
          <h4 className='text-center'>Your cart items</h4>
          <div className='row'>
            <div className='col-md-8'>
              {renderCartItems()}
            </div>

            <div className='col-md-3 border total p-2 m-2'>
              <div className='m-1'>
                <h3>Your Cart Total</h3>
                <p>
                  Total: ${cartValue}<br/>
                  Quantity: {itemCount}<br/>
                  {discountApplied
                    ? <span>- You saved {(discountAmount * 100).toFixed(0)}%</span>
                    : null}
                </p>
              </div>
              <form onSubmit={handleDiscount}>
                <label htmlFor='promo'>PromoCode:</label>
                <input
                  value={discount}
                  onChange={handleChange}
                  name='promo'
                  type='text'
                />
                <div className='d-flex justify-content-center m-2'>
                  <button className='btn btn-outline-success'>Apply PromoCode</button>
                </div>
              </form>
            </div>      

          </div>
        </div>
      )
}

export default Cart;