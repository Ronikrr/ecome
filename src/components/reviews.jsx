import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img/review/img1.jpeg'
import img2 from '../assets/img/review/img2.jpg'
import img3 from '../assets/img/review/img3.jpg'
import img4 from '../assets/img/review/img4.jpg'
import img5 from '../assets/img/review/img5.jpg'
import Slider from 'react-slick';
import makeup_brush from '../assets/img/review/makeup_brush.png'
const review = [
    {
        id: 1,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        src: img1,
        name:"KATHLEEN C.",
    },
    {
        id: 2,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        src: img2,
        name:"AMELIA",
    },
    {
        id: 3,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        src: img3,
        name:"CHARLOTTE",
    },
    {
        id: 4,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        src: img4,
        name:"OLIVIA",
    },
    {
        id: 5,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        src: img5,
        name:"TONY LINDLEY",
    },
]
const Reviews = () => {
    const settings = {
        margin: 10,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <section className='review py-[80px]' >
            <div className="container relative mx-auto">
                <div className="absolute left-[10%] md:left-[30%] ">
                    <img src={makeup_brush} alt="" className='w-[300px] md:w-[581px] md:h-[581px] h-[300px]' />
                </div>
                <div className="w-full text-center md:mx-auto md:m-0 md:w-8/12">
                    <Slider {...settings}>
                        {
                            review.map(items => (
                                <div key={items.id} className="flex flex-col justify-center w-full">

                                    <div className="flex items-center justify-center space-x-2 md:space-x-5 review_img ">
                                        <img src={items.src} alt="" className='object-cover w-16 h-16 rounded-full md:w-32 md:h-32' />
                                        <span className='md:text-[60px] leading-none text-xl capitalize text-[#4F282B]  prociono-regular' > {items.name} </span>
                                    </div>
                                    <div className="sapce h-[50px] md:h-[100px] "></div>
                                    <div className="dis_img">
                                        <p className='md:text-[60px] leading-none   text-xl tracking-wider capitalize text-[#4F282B]  prociono-regular'>
                                            {items.text}
                                        </p>
                                    </div>
                                </div>
                              ))
                        }
                    </Slider>
                    
                </div>
            </div>
        </section>
    )
}
function SampleNextArrow(propes) {
    const { onClick } = propes
    return (
        <div className="absolute bottom-1/2 right-[0px] md:right-[-50px] z-[10] text-[#4F282B] cursor-pointer" onClick={onClick} >
            <i class="bi bi-caret-right-fill text-4xl"></i>
        </div>
    )

}
function SamplePrevArrow(propes) {
    const { onClick } = propes
    return (
        <div className="absolute bottom-1/2 left-[0px] md:left-[-50px] z-[10] text-[#4F282B] cursor-pointer" onClick={onClick} >
            <i class="bi bi-caret-left-fill text-4xl"></i>
        </div>
    )

}

export default Reviews