import React from "react";
import img1 from "../assets/img/blogpage/1.jpg";
import img2 from "../assets/img/blogpage/2.jpg";
import img3 from "../assets/img/blogpage/3.jpg";
import img4 from "../assets/img/blogpage/4.jpg";
import img5 from "../assets/img/blogpage/5.jpeg";
import img6 from "../assets/img/blogpage/6.jpeg";
import { Link } from "react-router-dom";

const newdata = [
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
]

const Newupdate = () => {
    return (
        <section className="newupdate py-[80px]">
            <div className="container mx-auto">
                <div className="z-10 flex flex-col w-full mb-5 space-y-10 text-sm text-center small_head">
                    <span className="text-xl font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                        New Update
                    </span>
                    <div className="main_head">
                        <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[60px]  ">
                            Latest Beauty Blog
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between w-full">
                    {
                        newdata.map(items => (
                            <div className="flex justify-center w-full md:w-6/12 mb-10 md:mb-[60px]" key={items.id} >
                                <div className="w-11/12">
                                    <div className="main_iamge">
                                        <img src={items.src} className="object-cover w-full h-full aspect-video" alt="" />
                                    </div>
                                    <div className="card_dis p-[20px] md:p-[40px] bg-[#FCEADE] text-[#4f282b] leading-none capitalize ">
                                        <div className="flex items-center justify-between kit_date mb-[20px]">
                                            <span className="text-md md:text-[30px] font-semibold  uppercase ">
                                                {items.Catagoury}
                                            </span>
                                            <span className="text-md md:text-[23px] prociono-regular ">
                                               {items.date}
                                            </span>
                                        </div>
                                        <div className="w-7/12 main_head mb-[30px] ">
                                            <span className="text-md md:text-[40px]  ">
                                               {items.product}
                                            </span>
                                        </div>
                                        <div className="w-11/12 dis_datas mb-[30px] ">
                                            <p className="text-md md:text-[25px] " >
                                             {items.dis}
                                            </p>
                                        </div>
                                        <div className="my-10 btns ">
                                            <Link to={`/blog/${items.id}`} className='px-6 py-4 font-semibold uppercase md:text-xl text-md btn_primary ' >read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            ))
                    }
                   

                </div>
            </div>
        </section>
    );
};

export default Newupdate;
