import React from "react";


const boxmap = [
    {
        id: 1,
        classicon: <i class="bi bi-geo-alt-fill  text-[#fceade] text-[30px] "></i>,
        iconanem: "address",
        dis: "xyz, motavarcha, surat gujarat, "
    },
    {
        id: 2,
        classicon: <i class="bi bi-telephone-forward    text-[#fceade] text-[30px] "></i>,
        iconanem: "Contact",
        dis: "+91 23455 67892 "
    },
    {
        id: 3,
        classicon: <i class="bi bi-envelope  text-[#fceade] text-[30px] "></i>,
        iconanem: "Email",
        dis: "cosmetic123@gmail.com"
    },
]

const Touchwithus = () => {
    return (
        <div>

            <section className="relative py-10 overflow-x-hidden all_product">
                <div className="container mx-auto ">
                    <div className="z-10 flex flex-col w-full space-y-10 text-sm text-center small_head ">
                        <div className="main_head">
                            <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold  md:text-[60px] ">
                                Keep In Touch with Us
                            </span>
                        </div>
                        <span className="text-xl w-full lato-thin font-normal  md:w-7/12 mx-auto font-semibold capitalize md:text-[25px] leading-none text-[#4f282b]">
                            We’re talking about clean beauty gift sets, of course – and we’ve
                            got a bouquet of beauties for yourself or someone you love.
                        </span>
                    </div>
                    <div className="flex items-center justify-between flex-col lg:flex-row w-full py-[50px] space-y-4 lg:space-x-0 ">
                        {boxmap.map(items => (
                            <div className="flex items-center justify-center w-full lg:w-4/12">
                                <div className=" w-full lg:w-8/12 p-[40px] bg-[#FCEADE] rounded-bl-[60px] rounded-tr-[60px] flex items-center space-x-4 ">
                                    <div className="flex items-center justify-center bg-[#4f282b] w-16 h-16 rounded-full">
                                        {items.classicon}
                                    </div>
                                    <div className="">
                                        <span className="  capitalize prociono-regular text-[15px] spacing lato-thin font-medium ">
                                            {items.iconanem}
                                        </span>
                                        <p className="text-[15px] lato-thin font-light ">
                                            {items.dis}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.938871128884!2d72.86865777540311!3d21.234272480467006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbe056894ef%3A0x7bfc941e108f23a5!2sIT%20Park!5e0!3m2!1sen!2sin!4v1730262731396!5m2!1sen!2sin"
                            width="100%" // Adjust as needed
                            height="450" // Adjust as needed
                            className="border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Touchwithus;
