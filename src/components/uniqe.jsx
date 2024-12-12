import React from 'react'
import img from '../assets/img/aboutus page/image_6.png'
import spaimg from '../assets/img/aboutus page/Spa Flower.png'
import spaimg2 from '../assets/img/aboutus page/Healthy Food.png'
import spaimg3 from '../assets/img/aboutus page/Honeycombs.png'
import { Link } from 'react-router-dom'

const spatdata = [
    {
        id: 1,
        src: spaimg,
        title: "No Artifical Fragnances",
        dis: "Decorate your nails with various unique nail cosmetics. We have products like nail hardener, polish, extensions, artificial nails"
    }, {
        id: 1,
        src: spaimg2,
        title: "100% Natural & Vegan",
        dis: "Decorate your nails with various unique nail cosmetics. We have products like nail hardener, polish, extensions, artificial nails"
    }, {
        id: 1,
        src: spaimg3,
        title: "Clinically Proven",
        dis: "Decorate your nails with various unique nail cosmetics. We have products like nail hardener, polish, extensions, artificial nails"
    }
]
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
const Uniqe = () => {
    return (
        <section className='uniqe' >
            {/* <div className="container mx-auto"> */}
            <div className="relative flex flex-wrap items-center w-full ">
                <div className="relative w-full overflow-hidden rounded-t-full md:w-[30%] md:translate-x-[150px]  z-10 ">
                    <img src={img} alt="" className='relative' />
                </div>
                <div className="w-full relative  md:w-[70%] md:py-[100px] md:rounded-l-[140px] md:pl-[200px] md:pr-[120px] overflow-hidden bg-[#4F282B] text-white">
                    <div className="container text-center md:text-left">
                        {/* <div className="w-full h-full p-3 mx-5 md:w-6/12 md:p-0 "> */}
                        <span className="text-xl font-semibold md:text-lg">
                            Leading Brand
                        </span>
                        <div className="main_head">
                            <span className="text-5xl  capitalize prociono-regular md:text-[50px] spacing font-semibold ">
                                What's Unique
                            </span>
                        </div>
                        <div className=" pera">
                            <p className=" text-[18px] ">
                                The best beauty creams are selected from natures fragrances. We strive to create beauty
                                creams that are close to nature.
                            </p>
                        </div>

                        <ul className="mt-10 ml-5 space-y-10">

                            {spatdata.map(items => (
                                <li className='relative flex flex-col items-center lg:flex-row ' key={items.id} >
                                    <img src={items.src} alt="" className='w-[90px] h-[90px] mr-7' />
                                    <div className="">
                                        <span className="text-5xl  capitalize prociono-regular md:text-[50px] spacing font-medium ">
                                            {items.title}
                                        </span>
                                        <p className="text-[20px] lato-thin font-light ">
                                            {items.dis}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center flex-wrap justify-center mt-[60px] space-x-[40px] ">

                            <Link to='/contact' onClick={scrollToTop} className="px-8 py-2 text-xl capitalize border rounded-full hover:bg-white hover:text-[#4f282b] ">

                                contact us
                            </Link>
                            <div className="flex items-center realtive space-x-[10px] ">
                                <div className="w-[40px] h-[40px] flex rounded-full bg-white text-[#4F282B] items-center justify-center">
                                    <i class="bi bi-telephone-forward  "></i>
                                </div>
                                <div className="">
                                    <span className="  capitalize prociono-regular text-[15px] spacing lato-thin font-medium ">
                                        Call Us Anytime
                                    </span>
                                    <p className="text-[15px] lato-thin font-light ">
                                        +91 23455 67892
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center realtive space-x-[10px] ">
                                <div className="w-[40px] h-[40px] flex rounded-full bg-white text-[#4F282B] items-center justify-center">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div className="">
                                    <span className="  capitalize prociono-regular text-[15px] spacing lato-thin font-medium ">
                                        Email Us Anytime
                                    </span>
                                    <p className="text-[15px] lato-thin font-light ">
                                        cosmetic123@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Uniqe