import React, { useEffect, useState } from 'react';
import img1 from '../assets/img/cataguory/1.png'
import img2 from '../assets/img/cataguory/2.png'
import img3 from '../assets/img/cataguory/3.png'
import img4 from '../assets/img/cataguory/4.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import bgimage from '../assets/img/cataguory/Rectangle_11.png'
import bgimage2 from '../assets/img/cataguory/Rectangle_13.png'
import bgthre from '../assets/img/cataguory/Rectangle_12.png'
import bgiamges from '../assets/img/cataguory/bgiamges.png'
import bgiamges_2 from '../assets/img/cataguory/bgiamges_2.png'

import { Link } from 'react-router-dom';

const Catagourydata = [
  {
    id: 1,
    src: img1,
    Catagoury: 'beauty serum',
    name: '(4 plavours)',
  }, {
    id: 2,
    src: img2,
    Catagoury: 'cleanser',
    name: '(2 plavours)',
  }, {
    id: 3,
    src: img3,
    Catagoury: 'herbal cream',
    name: '(3 plavours)',
  }, {
    id: 4,
    src: img4,
    Catagoury: 'lotion',
    name: '(2 plavours)',
  }
]


const Catagoury = () => {
  
  const settings = {
    margin: 10,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='relative' >
      <section className="relative py-24 overflow-x-hidden categury ">
          <div className="absolute top-0 md:top-[-20px] w-40 h-32  md:w-96 md:h-80 z-[-1]">
            <img src={bgiamges} alt="" className='w-full h-full' />
          </div>
        <div className="container mx-auto ">
          <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head ">
            <span className='text-xl uppercase md:text-[25px] font-semibold text-[#4f282b]' >Shop by Category</span>
            <div className="main_head">
              <span className='text-5xl text-[#4f282b] capitalize prociono-regular md:text-[80px] font-semibold ' >Makeup & Skin Care</span>
            </div>
          </div>
          <div className="flex items-center w-full my-[50px]">
            <Slider className='w-full owl-theme' {...settings}>
              {Catagourydata.map(items => (
                <div className="w-full h-full item" key={items.id} >
                  <div className="flex items-center ">
                    <div className="w-[200px] rounded-full flex items-center   justify-center h-[200px] bg-[#FCEADE] ">
                      <img src={items.src} alt={items.Catagoury} />
                    </div>
                    <div className="dis_data flex flex-col *:text-[#4f252b] *:font-semibold ">
                      <span className="uppercase prociono-regular">{items.Catagoury} </span>
                      <span className=""> {items.name} </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col w-full item-center md:flex-row ">
            <div className="flex flex-col w-full h-full mb-2 space-y-5 md:w-6/12 me-3 md:mb-0">
              <div className="relative w-12/12">
                <img src={bgimage} alt="" />
                <div className="absolute top-0 left-0 w-full p-0 space-y-5 text-center md:text-left md:p-5 md:space-y-5 xl:space-y-10 xl:p-10 ">
                  <span className='uppercase text-md md:text-lg' >20% Off On</span>
                  <div className="main_head">
                    <span className='text-xl text-[#4f282b] uppercase prociono-regular md:text-[51px] leading-tight font-semibold ' >Get 20% off <br />  on
                      Makeup kit</span>
                  </div>
                  <div className="btns">
                    <Link to="/shop" className='px-4 py-2 uppercase md:px-6 md:py-4 text-md md:text-xl btn_primary prociono-regular' >shop now</Link>
                  </div>
                </div>
              </div>
              <div className="relative space-y-0 md:space-y-4 w-12/12">
                <img src={bgimage2} alt="" />
                <div className="absolute top-0 left-0 w-full p-0 space-y-5 text-center md:text-left md:p-5 md:space-y-5 xl:space-y-10 xl:p-10 ">
                  <span className='uppercase text-md md:text-lg' >20% Off On</span>
                  <div className="main_head">
                    <span className='text-xl text-[#4f282b] uppercase prociono-regular md:text-[51px] leading-tight font-semibold ' >Get 20% off <br />  on
                      Makeup kit</span>
                  </div>
                  <div className="btns">
                    <Link to="/shop" className='px-4 py-2 uppercase md:px-6 md:py-4 text-md md:text-xl btn_primary prociono-regular' >shop now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ml-0 space-y-5 md:ml-2 md:w-6/12">
              <div className="relative space-y-0 md:space-y-4 w-12/12">
                <img src={bgthre} alt="" />
                <div className="absolute top-0 left-0 w-full p-0 space-y-5 text-center md:text-left md:p-5 md:space-y-5 xl:space-y-10 xl:p-10 ">
                  <span className='uppercase text-md md:text-lg' >20% Off On</span>
                  <div className="main_head">
                    <span className='text-xl text-[#4f282b] uppercase prociono-regular md:text-[51px] leading-tight font-semibold ' >Get 20% off <br />  on
                      Makeup kit</span>
                  </div>
                  <div className="btns">
                    <Link to="/shop" className='px-4 py-2 uppercase md:px-6 md:py-4 text-md md:text-xl btn_primary prociono-regular' >shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className="absolute bottom-[0px]  md:bottom-[-150px] right-0 w-32 h-32 md:w-96 md:h-96 z-[-1]">
          <img src={bgiamges_2} alt="" className='w-full h-full' />
        </div>
    </div>
  )
}

export default Catagoury

