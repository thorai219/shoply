import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <ProductList />
      </Route>
      <Route exact path='/products/:id'>
        <ProductDetails />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}


export default Routes