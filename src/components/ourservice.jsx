import React from "react";
import img_1 from "../assets/img/service/img_1.png";
import img_2 from "../assets/img/service/img_2.png";
import img_3 from "../assets/img/service/img_3.png";
import img_4 from "../assets/img/service/img_4.png";

const service = [
    {
        id: 1,
        src: img_1,
        title: "service",
    },
    {
        id: 2,
        src: img_2,
        title: "service",
    },

];
const service2 = [
    {
        id: 3,
        src: img_3,
        title: "service",
    },
    {
        id: 4,
        src: img_4,
        title: "service",
    },
]
const Ourservice = () => {
    return (
        <section className="ourservice py-[100px] ">
            <div className="container mx-auto">
                <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head">
                    <span className="text-xl font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                        OUR SERVICE
                    </span>
                    <div className="main_head">
                        <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[60px]">
                            Our Best Category Service
                        </span>
                    </div>
                </div>
                <div className="flex w-full flex-col  md:flex-row text-center py-[50px] md:py-[100px] lg:space-x-[12px] relative ">
                    <div className="flex flex-col w-full md:w-6/12 lg:flex-row ">
                        {
                            service.map((item, id) => (
                                <div key={id} className="relative w-full overflow-hidden ">
                                    <img
                                        src={item.src}
                                        className="relative z-10 object-cover w-full h-full "
                                        alt=""
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col w-full md:w-6/12 lg:flex-row ">
                    
                    {
                        service2.map((item, id) => (
                            <div key={id} className="relative w-full overflow-hidden ">
                                <img
                                    src={item.src}
                                    className="relative z-10 object-cover w-full h-full "
                                    alt=""
                                />
                            </div>
                        ))
                    }
                    </div>

                </div>
                <div className="text-center">
                    <button className="px-6 py-2 uppercase rounded-full btn_primary " >submit</button>
                </div>
            </div>
        </section>
    );
};

export default Ourservice;
