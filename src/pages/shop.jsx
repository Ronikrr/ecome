import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Shoppage from '../components/shoppage'
import Maintitle from '../components/maintitle';
const Shop = () => {
  Maintitle("Cosmetic - shop");
  return (
      <div className='pt-20'  >
          <Breadcrumb />
            <Shoppage />
      </div>
  )
}

export default Shop