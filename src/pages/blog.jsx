import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Blogpage from '../components/blogpage'
import Maintitle from '../components/maintitle';
const Blog = () => {
  Maintitle("Cosmatc - Blog")
  return (
      <div className='pt-20'  >
          <Breadcrumb />
          <Blogpage />
    </div>
  )
}

export default Blog