import React from 'react'
import ReactDOM from 'react-dom'
import ProductsIndex from '/Users/patrickarthur/portfolio/app/javascript/packs/store/ProductsIndex'
import UsersIndex from '/Users/patrickarthur/portfolio/app/javascript/packs/store/SellersIndex'
import UsersNew from '/Users/patrickarthur/portfolio/app/javascript/packs/store/UsersNew'

// glue code to find the pricing table div
// and render the PricingTable react component there
document.addEventListener('DOMContentLoaded', () => {
  const users_login = document.querySelector('#users-login')
  const products_index = document.querySelector('#products-index')
  const sellers_index = document.querySelector('#sellers-index')
  if (products_index) {
    ReactDOM.render(<ProductsIndex/>, products_index)
  } else if (sellers_index) {
    ReactDOM.render(<SellersIndex/>, sellers_index)
  } else if (users_login) {
    ReactDOM.render(<UsersNew/>, users_login)
  }
})
