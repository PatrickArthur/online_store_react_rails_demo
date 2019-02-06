import React from 'react'
import ReactDOM from 'react-dom'
import ProductsIndex from '/Users/patrickarthur/portfolio/app/javascript/packs/store/ProductsIndex'
import UsersNew from '/Users/patrickarthur/portfolio/app/javascript/packs/store/UsersNew'

// glue code to find the pricing table div
// and render the PricingTable react component there
document.addEventListener('DOMContentLoaded', () => {
  const users_signup = document.querySelector('#users-signup')
  const users_login = document.querySelector('#users-login')
  const products_index = document.querySelector('#products-index')

  if (products_index) {
    ReactDOM.render(<ProductsIndex/>, products_index)
  } else if (users_login) {
    ReactDOM.render(<UsersNew/>, users_login)
  } else if (users_signup) {
    ReactDOM.render(<UsersNew/>, users_signup)
  }
})
