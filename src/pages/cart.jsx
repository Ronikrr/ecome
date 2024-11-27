import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Cartsection from '../components/cart/cartsection'

const Cart = () => {
  return (
      <div className='pt-20' >
          <Breadcrumb />
          <Cartsection/>
    </div>
  )
}

export default Cart