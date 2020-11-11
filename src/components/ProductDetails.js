import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart } from '../actions/actions'


const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const add = () => dispatch(addToCart(id))
  const { image_url, name, price, description } = useSelector(st => ({
    ...st.products[id]
  }))
  return (
    <div className='container'>
      <div className='card col-md-6 align-center'>
        <div className='d-flex justify-content-end'>
          <Link to='/' className='btn btn-outline-secondary m-3'>X</Link>
        </div>
        <div className='card-body text-center'>
          <img
            className='card-top-image image'
            src={image_url}
            alt='product avatar'
          />
          <h4>Product Name: {name}</h4>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <button className='btn btn-outline-success m-3' onClick={add}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails