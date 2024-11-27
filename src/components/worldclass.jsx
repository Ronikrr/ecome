import React from 'react'
import img1 from '../assets/img/service/image.png'
import img2 from '../assets/img/service/image_1.png'
import img3 from '../assets/img/service/image_2.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Catagourydata = [
    {
        id: 1,
        src: img1,
        Catagoury: 'makeup',
        name: 'start at : 120',
    }, {
        id: 2,
        src: img2,
        Catagoury: 'aesthics',
        name: 'start at : 110',
    }, {
        id: 3,
        src: img3,
        Catagoury: 'cosmetology',
        name: 'start at : 150',
    }
]
const Worldclass = () => {
    const settings = {
        arrows: false, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
      <section className='bg-[#d9d9d9] world_clas py-[57px]' >
          <div className="container mx-auto">
              <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head">
                  <span className="text-xl font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                      WORLD CLASS COSMETICS
                  </span>
                  <div className="main_head">
                      <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[60px]">
                          Luxury Beauty
                      </span>
                  </div>
              </div>
              <div className="flex items-center  w-full my-[50px]">
                  <Slider className='w-full owl-theme ' {...settings}>
                      {Catagourydata.map(items => (
                          <div className="w-full h-full item " key={items.id} >
                              <div className="flex flex-col items-center text-center ">
                                  <div className="flex justify-center w-full h-full">
                                      <img src={items.src} className='object-cover w-full h-full p-2 aspect-square' alt={items.Catagoury} />
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
          </div>
      </section>
  )
}

export default Worldclass