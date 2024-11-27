import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Wishlistsection from '../components/wishlist/wishlistsection'
import Maintitle from '../components/maintitle'

const Wishlist = () => {
    Maintitle("consmatic - Wishlist")
    return (
        <div className='pt-20' >
            <Breadcrumb />
            <Wishlistsection /> 
        </div>
    )
}

export default Wishlist