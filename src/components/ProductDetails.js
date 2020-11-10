import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart } from '../actions/actions'


const ProductDetails = () => {
  const dispatch = useDispatch()
  const add = () => dispatch(addToCart(id))
  const { id } = useParams()
  const { image_url, name, price, description } = useSelector(st => ({
    ...st.products[id]
  }))
  return (
    <div className='container'>
      <div className='card flex-row'>
        <div className='image-container col-md-4 text-center'>
          <img
            className='image'
            src={image_url}
            alt='product avatar'
          />
        </div>
        <div className='align-self-center col-md-8 text-center'>
          <h4>Product Name: {name}</h4>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <button onClick={add}>Add to Cart</button>
          <Link to='/' className='btn btn-block btn-link'>
            Go back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails