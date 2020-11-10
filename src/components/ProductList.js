import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductList = () => {
  const products = useSelector(st => st.products)
  const productCards = Object.keys(products).map(id => (
    <div className='col-sm-4 mb-3 text-center' key={id}>
      <Link to={`/products/${id}`}>
        <div className='card'>
          <div className='image-container'>
            <img
              className='card-img-top image'
              src={products[id].image_url}
              alt='product avatar'
            />
          </div>
          <div className='card-body'>
            <h4>{products[id].name}</h4>
          </div>
        </div>
      </Link>
    </div>
  ))

  return (
    <div className='container d-flex flex-row flex-wrap justify-content-around'>
      {productCards}
    </div>
  )
}

export default ProductList