import React, { useState } from 'react'

const Faqsection = () => {
    const [activeIndex, setactiveindex] = useState(null);
    const toggle = (i) => {
        setactiveindex(activeIndex === 1 ? null : i);
    };
    return (
        <div className='Faqsection text-[#4f282b] ' >
            <div className="container mx-auto">
                <div className="w-full mt-[100px] space-y-20 ">
                    <div className={` shadow-md w-full ${activeIndex === 0 ? (' py-[57px]') : ('')} px-[37px] `}>
                        <button
                            className="flex justify-between capitalize w-full text-[25px] md:text-[70px] prociono-regular font-semibold transition-all"
                            onClick={() => toggle(0)}
                        >
                            payment method
                            {activeIndex === 0 ? (
                                <i class="bi bi-arrow-up-circle"></i>
                            ) : (
                                <i class="bi bi-arrow-down-circle"></i>
                            )}{" "}
                        </button>
                        {activeIndex === 0 && (
                            <span className='text-[15px] md:text-[25px]' >
                                Nulla in faucibus praesent scelerisque neque ut tellus dolor. Auctor lorem convallis vulputate tincidunt tellus quis
                                Viverra ut pellentesque pulvinar erat ipsum amet pellentesque semper nunc. Vitae massa quisque gravida pellentesque
                                ultrices nibh semper elit in. Ut velit vitae purus, ornare odio gravida nulla. Viverra et morbi sapien sapien mauris lacus
                                adipiscing. Mi, tincidunt tortor sed purus. Urna dictumst mauris malesuada aliquam sit nullam volutpat. Tristique mattis
                                vitae leo libero dui scelerisque quis.
                            </span>
                        )}
                    </div>
                    <div className={` shadow-md w-full ${activeIndex === 1 ? (' py-[57px]') : ('')} px-[37px] `}>
                        <button
                            className="flex justify-between w-full text-[25px] md:text-[70px] prociono-regular font-semibold transition-all"
                            onClick={() => toggle(1)}
                        >
                            International Shipping
                            {activeIndex === 1 ? (
                                <i class="bi bi-arrow-up-circle"></i>
                            ) : (
                                <i class="bi bi-arrow-down-circle"></i>
                            )}{" "}
                        </button>
                        {activeIndex === 1 && (
                            <>
                                <span className="text-[15px] md:text-[25px] lato-thin font-semibold" >
                                    Discover beauty without borders! Our international shipping ensures your favorite cosmetics reach you, no matter where you are. With secure packaging and reliable tracking, your products arrive fresh and flawless. Embrace a world of beauty that ships straight to your doorstep. Order now for a seamless international shopping experience!
                                </span>

                            </>
                        )}
                    </div>
                    <div className={` shadow-md w-full ${activeIndex === 2 ? (' py-[57px]') : ('')} px-[37px] `}>
                        <button
                            className="flex justify-between w-full text-[25px] md:text-[70px] prociono-regular font-semibold transition-all"
                            onClick={() => toggle(2)}
                        >
                            Cashback Program    
                            {activeIndex === 2 ? (
                                <i class="bi bi-arrow-up-circle"></i>
                            ) : (
                                <i class="bi bi-arrow-down-circle"></i>
                            )}{" "}
                        </button>
                        {activeIndex === 2 && (
                            <>
                                <span className="text-[15px] md:text-[25px] lato-thin font-semibold" >
                                    Discover beauty without borders! Our international shipping ensures your favorite cosmetics reach you, no matter where you are. With secure packaging and reliable tracking, your products arrive fresh and flawless. Embrace a world of beauty that ships straight to your doorstep. Order now for a seamless international shopping experience!
                                </span>


                            </>
                        )}
                    </div>
                    <div className={` shadow-md w-full ${activeIndex === 3 ? (' py-[57px]') : ('')} px-[37px] `}>
                        <button
                            className="flex justify-between w-full text-[25px] md:text-[70px] prociono-regular font-semibold transition-all"
                            onClick={() => toggle(3)}
                        >
                            Money Back Warranty
                            {activeIndex === 3 ? (
                                <i class="bi bi-arrow-up-circle"></i>
                            ) : (
                                <i class="bi bi-arrow-down-circle"></i>
                            )}{" "}
                        </button>
                        {activeIndex === 3 && (
                            <>
                                <span className="text-[15px] md:text-[25px] lato-thin font-semibold" >
                                    Discover beauty without borders! Our international shipping ensures your favorite cosmetics reach you, no matter where you are. With secure packaging and reliable tracking, your products arrive fresh and flawless. Embrace a world of beauty that ships straight to your doorstep. Order now for a seamless international shopping experience!
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqsection