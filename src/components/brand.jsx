import React from "react";
import img1 from "../assets/img/about/Rectangle19.png";

const Brand = () => {
  

    return (
        <section className="brand_section">
            <div className="container mx-auto">
                <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head">
                    <span className="text-xl font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                        Branded Sellers
                    </span>
                    <div className="main_head">
                        <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[60px]">
                            Premium Brands
                        </span>
                    </div>
                </div>
                <div className="flex py-[85px] flex-col items-center w-full h-full md:flex-row">
                    <div className="w-full h-full mx-2 md:w-6/12 images ">
                        <img src={img1} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full h-full p-3 mx-5 md:w-6/12 md:p-0 ">
                        <div className="ml-0 md:ml-5 prociono-regular">
                          
                            <li className="relative pl-7 text-[25px] md:text-[70px] text-[#4f282b] list_set border-b border-[#4f282b]">
                                Vestibulum morbi
                            </li>
                            <li className="relative pl-7 text-[25px] md:text-[70px] text-[#4f282b] list_set border-b border-[#4f282b]">
                                Non consectetur
                            </li>
                            <li className="relative pl-7 text-[25px] md:text-[70px] text-[#4f282b] list_set border-b border-[#4f282b]">
                                Libero id
                            </li>
                            <li className="relative pl-7 text-[25px] md:text-[70px] text-[#4f282b] list_set border-b border-[#4f282b]">
                                Auctor augue
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;

