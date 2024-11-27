import React from 'react'
import Banner from '../components/banner'
import Catagoury from '../components/catagoury'
import Exploreproduct from '../components/exploreproduct'
import Aboutsection from '../components/aboutsection'
import Offertime from '../components/offertime'
import Bestcolletion from '../components/bestcolletion'
import Reviews from '../components/reviews'
import Ani from '../components/ani'
import Newupdate from '../components/newupdate'
import Inspirations from '../components/inspirations'
import Maintitle from '../components/maintitle';
function Home() {
  Maintitle("Cosmetic - Home");

  return (
    <div >
      <Banner />
      <Catagoury />
      <Exploreproduct />
      <Aboutsection />
      <Offertime />
      <Bestcolletion />
      <Reviews />
      <Ani />
      <Newupdate />
      <Inspirations />
    </div>
  )
}

export default Home