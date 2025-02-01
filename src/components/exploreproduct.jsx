import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';



const Exploreproduct = () => {
    const [products, setProducts] = useState([]);

    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
                if (!res.ok) throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);

                const data = await res.json();
                const validProducts = data.filter((prod) => prod && prod.id).slice(0, 4);
                setProducts(validProducts);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

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
        <section className='relative py-10 overflow-x-hidden all_product' >
            <div className="container mx-auto ">
                <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head ">
                    <span className='text-xl font-semibold capitalize md:text-lg text-[#4f282b]' >Clinically Proven!</span>
                    <div className="main_head">
                        <span className='text-5xl text-[#4f282b] capitalize prociono-regular md:text-7xl ' >Explore All Products</span>
                    </div>
                </div>
                <div className="flex items-center w-full my-[50px]">
                    <Slider className='w-full owl-theme' {...settings}>
                        {products.map(items => (
                            <Link to={`/shop/${items.id}`} className="md:ml-16 item" key={items.id} >
                                <div className="flex flex-col items-center w-full md:w-8/12 lg:w-7/12 xl:w-8/12">
                                    <div className="w-full  md:w-[370px] lg:w-[300px] xl:w-[370px]  rounded-xl flex  items-center   justify-center  ">
                                        <img src={items.api_featured_image} alt={items.title} className='w-full h-full aspect-square' />
                                    </div>
                                    <div className="dis_data flex flex-col *:text-[#4f252b] *:font-semibold ">
                                        <span className="uppercase prociono-regular">{items.title} </span>
                                        <span className=""> {items.brand} </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
           
        </section>
    )
}


export default Exploreproduct