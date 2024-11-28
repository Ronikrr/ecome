import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/blogpage/1.jpg";
import img2 from "../assets/img/blogpage/2.jpg";
import img3 from "../assets/img/blogpage/3.jpg";
import img4 from "../assets/img/blogpage/4.jpg";
import img5 from "../assets/img/blogpage/5.jpeg";
import img6 from "../assets/img/blogpage/6.jpeg";
import Activity1 from "../assets/img/blogpage/activity1.png";
import Activity2 from "../assets/img/blogpage/activity2.png";
import Activity3 from "../assets/img/blogpage/activity3.png";
import Activity4 from "../assets/img/blogpage/activity4.png";
import new1 from "../assets/img/blogpage/activity5.jpeg";
import new2 from "../assets/img/blogpage/activity6.jpg";
import new3 from "../assets/img/blogpage/activity7.jpg";
import box1 from "../assets/img/blogpage/box1.png";
import box2 from "../assets/img/blogpage/box2.png";
import box3 from "../assets/img/blogpage/box3.png";
import box4 from "../assets/img/blogpage/box4.png";
import box5 from "../assets/img/blogpage/box5.png";
import box6 from "../assets/img/blogpage/box6.png";

const blogcontent = [
    {
        id: 1,
        src: img1,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
    {
        id: 2,
        src: img2,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
    {
        id: 3,
        src: img3,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
    {
        id: 4,
        src: img4,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
    {
        id: 5,
        src: img5,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
    {
        id: 6,
        src: img6,
        date: "20 JUN, 2024",
        Catagoury: "MAKEUP/NAIL CARE",
        product: "The Top Creams For Foundation",
        dis: "Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat.Phasellusac sem sed erat pos se quam dignissim.",
    },
];

const activity = [
    {
        id: 1,
        src: Activity1,
        date: "09 JUN,2024",
        dis: "Organic And Natural Serum",
    },
    {
        id: 2,
        src: Activity2,
        date: "10 JUN,2024",
        dis: "Soft Skin Creams With Moisture",
    },
    {
        id: 3,
        src: Activity3,
        date: "12 JUN,2024",
        dis: "The Top Creams For Foundation",
    },
    {
        id: 4,
        src: Activity4,
        date: "30 JUN,2024",
        dis: "Glow Fairness Creams For women",
    },
];

const gift = [
    {
        id: 1,
        src: new1,
        name: "gift card",
        star: 4.5,
        price: "$60.00 - $120.00",
    },
    {
        id: 2,
        src: new2,
        name: "gift card",
        star: 4.5,
        price: "$60.00 - $120.00",
    },
    {
        id: 3,
        src: new3,
        name: "gift card",
        star: 4.5,
        price: "$60.00 - $120.00",
    },
];
const renderStar = (rating) => {
    const fullStars = Math.floor(rating);
    const halfstar = rating % 1 !== 0;
    const emptystart = 5 - fullStars - (halfstar ? 1 : 0);
    return (
        <>
            {Array(fullStars).fill(<i class="bi bi-star-fill"></i>)}
            {halfstar && <i class="bi bi-star-half"></i>}
            {Array(emptystart).fill(<i class="bi bi-star"></i>)}
        </>
    );
};
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
const tags = [
    {
        id: 1,
        name: "cream",
    },
    {
        id: 2,
        name: "FACIAL",
    },
    {
        id: 3,
        name: "HEAD",
    },
    {
        id: 4,
        name: "STYLE",
    },
    {
        id: 5,
        name: "BODY",
    },
    {
        id: 6,
        name: "EYE SPA",
    },
];
const Instagram = [
    {
        id: 1,
        src: box1
    },
    {
        id: 2,
        src: box2
    },
    {
        id: 3,
        src: box3
    },
    {
        id: 4,
        src: box4
    },
    {
        id: 5,
        src: box5
    },
    {
        id: 6,
        src: box6
    },
];

const Blogpage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredActivity = activity.filter((item) =>
        item.dis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredGifts = gift.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section className="blogsection py-[50px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap w-full">
                    <div className="flex flex-wrap w-full justify-evenly md:w-8/12 mt-[50px] ">
                        {blogcontent.map((items) => {
                            return (
                                <div className="w-full md:w-5/12 shadow-lg rounded-[30px] overflow-hidden h-auto md:h-[670px] mb-[50px] ">
                                    <div className="main-image">
                                        <img
                                            src={items.src}
                                            alt=""
                                            className="object-cover w-full h-full aspect-video "
                                        />
                                    </div>
                                    <div className="main_dis py-[50px] px-[30px] space-y-[30px] text-[#4f282b] ">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-[10px] md:text-[20px] "> {items.date} </span>
                                            <span className="font-semibold text-[10px] md:text-[20px] ">{items.Catagoury}</span>
                                        </div>
                                        <div className="text-[25px]  md:text-[40px]  capitalize prociono-regular leading-none font-semibold">
                                            <span> {items.product} </span>
                                        </div>
                                        <div className="font-semibold leading-none capitalize prociono-regular text-[15px]  md:text-[20px] ">
                                            <span> {items.dis} </span>
                                        </div>
                                        <div className="btn">
                                            <Link to={`/blog/${items.id}`} onClick={scrollToTop}  className="px-4 py-2 border border-2 rounded-full border-[#4f282b] uppercase font-semibold hover:text-white hover:bg-[#4f282b]">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="flex flex-wrap w-full md:w-4/12 justify-evenly text-[#4f282b]   ">
                        <div className="searchbox w-full rounded-[30px] shadow-lg py-[100px] px-[30px] ">
                            <div className="relative w-full searchdara mb-[20px]">
                                <input
                                    type="text"
                                    className="border-2 border-[#4f282b] w-full pt-5 pb-4 px-3 placeholder:text-[#4f282b]  placeholder:text-[25px] placeholder:uppercase"
                                    placeholder="Search"
                                />
                                <div className="box w-[30px] h-[30px] flex justify-center items-center absolute top-[15px] right-[25px] ">
                                    <i class="bi bi-search text-[25px] "></i>
                                </div>
                            </div>
                            <div className=" activity font-semibold leading-none capitalize prociono-regular text-[30px] md:text-[50px] mb-[25px] ">
                                <span> Recent activity : </span>
                            </div>
                            <div className="w-full artical text-[#4f282b] space-y-[50px]  ">
                                {activity.map((items) => {
                                    return (
                                        <div
                                            className="flex items-center w-full space-x-[20px] artical_box"
                                            key={items.id}
                                        >
                                            <div className="w-5/12 overflow-hidden img">
                                                <img
                                                    src={items.src}
                                                    alt=""
                                                    className="block w-full h-full aspect-square "
                                                />
                                            </div>
                                            <div className="flex flex-col w-7/12 img_dis ">
                                                <div className="text-[15px] md:text-[25px]  mb-[10px]">
                                                    <span> {items.date} </span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px]  prociono-regular font-semibold">
                                                    <span> {items.dis} </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className=" activity font-semibold leading-none capitalize prociono-regular text-[30px] md:text-[50px] mt-[50px] mb-[25px] ">
                                <span> New Arrivals :</span>
                            </div>
                            <div className="w-full artical text-[#4f282b] space-y-[50px]  ">
                                {gift.map((items) => {
                                    return (
                                        <div
                                            className=" flex items-center w-full space-x-[20px] artical_box border-b border-[#4f282b] pb-[25px]  "
                                            key={items.id}
                                        >
                                            <div className="w-5/12 overflow-hidden img">
                                                <img
                                                    src={items.src}
                                                    alt=""
                                                    className="block w-full h-full aspect-square "
                                                />
                                            </div>
                                            <div className="flex flex-col w-7/12 img_dis ">
                                                <div className="text-[15px] md:text-[25px] mb-[10px] prociono-regular font-semibold capitalize">
                                                    <span> {items.name} </span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px] mb-[10px] text-[#FFD700] ">
                                                    <span> {renderStar(items.star)} </span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px] ">
                                                    <span> {items.price} </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className=" activity font-semibold leading-none capitalize prociono-regular text-[30px] md:text-[50px] mt-[50px] mb-[25px] ">
                                <span> tags :</span>
                            </div>
                            <div className="flex flex-wrap justify-center w-full">
                                {tags.map((items) => {
                                    return (
                                        <div
                                            key={items.id}
                                            className="bg-[#4F282B] text-[15px]  w-3/12 me-[20px] mb-[20px]  flex items-center justify-center uppercase text-[#ffffff] h-[60px] md:text-[25px] "
                                        >
                                            <span> {items.name} </span>
                                        </div>
                                    );
                                })}
                            </div>{" "}
                            <div className=" activity font-semibold leading-none capitalize prociono-regular text-[50px] mt-[50px] mb-[25px] ">
                                <span> Instagram :</span>
                            </div>
                            <div className="flex flex-wrap justify-center w-full">
                                {Instagram.map((items) => {
                                    return (
                                        <div
                                            key={items.id}
                                            className="bg-[#4F282B] w-3/12 me-[20px] mb-[20px]  flex items-center justify-center uppercase text-[#ffffff]  text-[25px] "
                                        >
                                            <img src={items.src} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div> */}
                    <div className="flex flex-wrap w-full md:w-4/12 justify-evenly text-[#4f282b]">
                        <div className="searchbox w-full rounded-[30px] shadow-lg py-[100px] px-[30px]">
                            <div className="relative w-full searchdara mb-[20px]">
                                <input
                                    type="text"
                                    className="border-2 border-[#4f282b] w-full pt-5 pb-4 px-3 placeholder:text-[#4f282b] placeholder:text-[25px] placeholder:uppercase"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <div className="box w-[30px] h-[30px] flex justify-center items-center absolute top-[15px] right-[25px]">
                                    <i className="bi bi-search text-[25px]"></i>
                                </div>
                            </div>
                            <div className="activity font-semibold leading-none capitalize prociono-regular text-[30px] md:text-[50px] mb-[25px]">
                                <span>Recent activity:</span>
                            </div>
                            <div className="w-full artical text-[#4f282b] space-y-[50px]">
                                {filteredActivity.length === 0 ? (
                                    <p>No activity found</p>
                                ) : (
                                    filteredActivity.map((items) => (
                                        <div className="flex items-center w-full space-x-[20px] artical_box" key={items.id}>
                                            <div className="w-5/12 overflow-hidden img">
                                                <img src={items.src} alt="" className="block w-full h-full aspect-square" />
                                            </div>
                                            <div className="flex flex-col w-7/12 img_dis">
                                                <div className="text-[15px] md:text-[25px] mb-[10px]">
                                                    <span>{items.date}</span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px] prociono-regular font-semibold">
                                                    <span>{items.dis}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className=" activity font-semibold leading-none capitalize prociono-regular text-[30px] md:text-[50px] mt-[50px] mb-[25px] ">
                                <span> New Arrivals :</span>
                            </div>
                            <div className="w-full artical text-[#4f282b] space-y-[50px]">
                                {filteredGifts.length === 0 ? (
                                    <p>No activity found</p>
                                ) : (
                                    filteredGifts.map((items) => (
                                        <div className="flex items-center w-full space-x-[20px] artical_box" key={items.id}>
                                            <div className="w-5/12 overflow-hidden img">
                                                <img src={items.src} alt="" className="block w-full h-full aspect-square" />
                                            </div>
                                            <div className="flex flex-col w-7/12 img_dis">
                                                <div className="text-[15px] md:text-[25px] mb-[10px]">
                                                    <span>{items.name}</span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px] mb-[10px] text-[#FFD700] ">
                                                    <span> {renderStar(items.star)} </span>
                                                </div>
                                                <div className="text-[15px] md:text-[25px] prociono-regular font-semibold">
                                                    <span>{items.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            {/* Repeat similar structure for New Arrivals, Tags, Instagram */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogpage;
