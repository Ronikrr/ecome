import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const targetDate = new Date("2024-12-15T00:00:00Z");
const Offertime = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [remainingTime, setRemainingTime] = useState(targetDate ? calculateTimeLeft(targetDate) : { days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Function to calculate time left
    function calculateTimeLeft(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLeft = calculateTimeLeft(targetDate);
            setRemainingTime(timeLeft);
            // Stop the countdown when the target date is reached
            if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [targetDate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
                if (!res.ok) throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);

                const data = await res.json();
                const validProducts = data.filter((prod) => prod && prod.id).slice(0, 4);
                setProducts(validProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
        <section className="offertime">
            <div className="flex flex-col items-center w-full md:flex-row">
                <div className="w-full md:w-6/12 text-center bg-[#4F282B]">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center w-full py-[128px]">
                            <div className="w-full heade_offer">
                                <span className="text-[80px] text-white capitalize w-full">up to 60% off</span>
                            </div>
                            <div className="before_end">
                                <span className="text-white text-[35px] capitalize w-full">Get them before they end</span>
                            </div>
                            <div className="flex w-full py-3 py-12 mx-auto space-x-4 text-center text-white border-white md:w-7/12 md:text-5xl border-y justify-evenly">
                                <div className="flex flex-col">
                                    <span>{remainingTime.seconds}</span>
                                    <span className="text-sm uppercase">seconds</span>
                                </div>
                                <div className="self-center text-5xl">:</div>
                                <div className="flex flex-col">
                                    <span>{remainingTime.minutes}</span>
                                    <span className="text-sm uppercase">mins</span>
                                </div>
                                <div className="self-center text-5xl">:</div>
                                <div className="flex flex-col">
                                    <span>{remainingTime.hours}</span>
                                    <span className="text-sm uppercase">hrs</span>
                                </div>
                                <div className="self-center text-5xl">:</div>
                                <div className="flex flex-col">
                                    <span>{remainingTime.days}</span>
                                    <span className="text-sm uppercase">days</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-16">
                                <button className="px-6 py-4 text-xl text-white uppercase border border-white hover:bg-white hover:text-[#4F282B] transition-all">shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 text-center bg-[#FCEADE]">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center w-full py-[62px]">
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error}</div>
                            ) : (
                                <Slider {...settings}>
                                    {products.map((item) => (
                                        <Link to={`/shop/${item.id}`} key={item.id} className="flex flex-col items-center justify-center w-full item not_flex">
                                            <img src={item.api_featured_image} className="aspect-square w-8/12 h-[500px]" alt={item.title} />
                                            <span className="text-xl capitalize text-[#4F282B] font-semibold prociono-regular">{item.title}</span>
                                        </Link>
                                    ))}
                                </Slider>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute bottom-[-50px] right-[35%] z-[10] text-[#4F282B] cursor-pointer" onClick={onClick}>
            <i className="text-4xl bi bi-caret-right-fill"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute bottom-[-50px] left-[35%] z-[10] text-[#4F282B] cursor-pointer" onClick={onClick}>
            <i className="text-4xl bi bi-caret-left-fill"></i>
        </div>
    );
}

export default Offertime;
