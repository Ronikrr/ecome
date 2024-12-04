import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Cartsection from '../components/cart/cartsection'
import Maintitle from '../components/maintitle';
const Cart = () => {
  Maintitle("Cosmtic - Cartpage")
  return (
      <div className='pt-20' >
          <Breadcrumb />
          <Cartsection/>
    </div>
  )
}

export default Cart