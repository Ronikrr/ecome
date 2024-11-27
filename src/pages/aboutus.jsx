import React from 'react';
import Pagebanner from '../components/pagebanner';
import Breadcrumb from '../components/breadcrumb';
import Uniqe from '../components/uniqe';
import Reviews from '../components/reviews'
import Profe from '../components/profe'
import Maintitle from '../components/maintitle';

const Aboutus = () => {
    Maintitle('Cosmatic - Aboutus')
    return (
        <div className='pt-20' >
            <Breadcrumb /> 
            <Pagebanner />
            <Uniqe />
            <Reviews />
            <Profe/>
        </div>
    )
}

export default Aboutus