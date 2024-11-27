import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Ourservice from '../components/ourservice'
import Brand from '../components/brand'
import Maintitle from '../components/maintitle';
import Worldclass from '../components/worldclass';
import Inspirations from '../components/inspirations'
import Ani from '../components/ani'
const Service = () => {
  Maintitle("Cosmetic - Service");
  return (
    <div className='pt-20' >
      <Breadcrumb />
      <Ourservice />
      <Brand />
      <Worldclass />
      <Ani  />
      <Inspirations/>
    </div>
  )
}

export default Service