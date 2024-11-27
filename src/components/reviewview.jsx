import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/review/img1.jpeg";
import img2 from "../assets/img/review/img2.jpg";
import img3 from "../assets/img/review/img3.jpg";
import img4 from "../assets/img/review/img4.jpg";
import img5 from "../assets/img/review/img5.jpg";
const review = [
    {
        id: 1,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        rating:4.1,
        src: img1,
        name: "KATHLEEN C.",
    },
    {
        id: 2,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        rating:4.1,
        src: img2,
        name: "AMELIA",
    },
    {
        id: 3,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        rating:4.1,
        src: img3,
        name: "CHARLOTTE",
    },
    {
        id: 4,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        rating:4.1,
        src: img4,
        name: "OLIVIA",
    },
    {
        id: 5,
        text: "	This is a fantastic deal!!Loving all of the products!! The spoon is an added bonus",
        rating:4.1,
        src: img5,
        name: "TONY LINDLEY",
    },
];
const Reviews = () => {
    const renderStar = (rating) => {
        const fullStars = Math.floor(rating);
        const halfstar = rating % 1 !== 0;
        const emptystart = 5 - fullStars - (halfstar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <i key={`full-${index}`} className="bi bi-star-fill"></i>
                ))}
                {halfstar && <i className="bi bi-star-half"></i>}
                {[...Array(emptystart)].map((_, index) => (
                    <i key={`empty-${index}`} className="bi bi-star"></i>
                ))}
            </>
        );
    };
    return (
        <section className="review py-[80px]">
            <div className="container relative mx-auto">
                <div className="w-full text-center md:mx-auto md:m-0 md:w-11/12">
                    {review.map((items) => (
                        <div key={items.id} className="flex flex-wrap justify-center w-full py-[50px] mb-5 border border-[#4f282b] ">
                            <div className="flex flex-col items-center w-10/12 space-x-2 md:flex-row md:space-x-5 review_img ">
                                <div className="md:w-2/12">
                                    <img
                                        src={items.src}
                                        alt=""
                                        className="object-cover w-16 h-16 rounded-full md:w-32 md:h-32"
                                    />
                                </div>
                                <div className="w-full text-center md:text-left md:w-10/12">
                                    <div className="flex flex-col items-center md:flex-row md:justify-between border-b border-[#4f282b]">
                                        <span className="md:text-[30px] capitalize leading-none text-xl  text-[#4F282B]  lato-thin">
                                            {items.name}
                                        </span>
                                        <span className="font-semibold text-[#FFD700] text-[10px] md:text-[40px]"> {renderStar(items.rating)} </span>
                                    </div>
                                    <div className="flex w-full dis_img ">
                                        <p className="md:text-[25px] leading-none   text-xl tracking-wider capitalize text-[#4F282B]  lato-thin">
                                            {items.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Reviews;
