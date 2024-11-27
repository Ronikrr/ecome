import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Touchwithus from '../components/touchwithus'
import Contactus from '../components/contactus'
import Maintitle from '../components/maintitle';
const Contact = () => {
  Maintitle("Cosmatic - contact")
  return (
    <div className='pt-20' >
      <Breadcrumb />
      <Touchwithus />
      <Contactus />
    </div>
  )
}

export default Contact