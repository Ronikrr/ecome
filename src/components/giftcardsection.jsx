import React, { useEffect, useState } from "react";
import img_1 from "../assets/img/giftcard/img_1.jpg";
const Giftcardsection = () => {
    const [recipit, setrecipit] = useState("");
    const [Email, setEmail] = useState("");
    const [sendername, setsendername] = useState("");
    const [message, setmessage] = useState("");
    const [quantity, setquantity] = useState(1);
    const [select, setselect] = useState(20.00)

    useEffect(() => {
        const savedata = JSON.parse(localStorage.getItem("giftCardFormData"));
        if (savedata) {
            setrecipit(savedata.recipit);
            setEmail(savedata.Email);
            setsendername(savedata.sendername);
            setmessage(savedata.message);
            setquantity(savedata.quantity);
        }
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();

        const formdata = {
            recipit,
            Email,
            sendername,
            message,
            quantity,
        };
        localStorage.setItem("giftCardFormData", JSON.stringify(formdata));
        console.log("Form data saved to localStorage:", formdata);

        setrecipit('');
        setEmail('');
        setsendername('');
        setmessage('');
        setquantity(1);
    };
    const incrementQuntity = () => setquantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setquantity(quantity - 1);
        }
    };

    return (
        <section className="giftsection py-[100px] ">
            <div className="container mx-auto">
                <div className="flex flex-wrap w-full ">
                    <div className="flex flex-col w-full md:w-6/12">
                        <div className="w-full md:w-11/12">
                            <img
                                src={img_1}
                                className="object-cover w-full h-full aspect-square"
                                alt=""
                            />
                        </div>
                        <div className="flex w-full md:w-11/12 mt-7 justify-evenly ">
                            {[img_1, img_1, img_1].map((img, index) => (
                                <img
                                    src={img}
                                    key={index}
                                    className="object-cover w-3/12 h-full aspect-square"
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex  bg-[#D9D9D9] md:bg-white mt-[50px] md:mt-[50px]  md:p-0 flex-col w-full md:w-6/12  text-[#4f282b]">
                        <div className="p-5">
                            <div className="w-full text-[35px] md:text-[70px] capitalize prociono-regular ">
                                <span>gift card</span>
                            </div>
                            <div className="w-full text-[25px] lato-thin ">
                                <span>$60.00 – $120.00</span>
                            </div>
                            <div className="selctimg prociono-regular my-[10px] md:my-[30px] text-[15px] md:text-[30px] uppercase">
                                <span>Choose your image</span>
                                <img
                                    src={img_1}
                                    className="object-cover w-6/12 md:w-32 h-6/12 md:h-32 aspect-square"
                                    alt=""
                                />
                            </div>
                            <div className="w-full ">
                                <span className="text-[30px] prociono-regular capitalize">
                                    set an amount
                                </span>
                                <div className="flex w-full flex-wrap justify-evenly my-[10px] ">
                                    <div className="px-8 text-[15px] md:text-[30px] rounded-full py-2 bg-[#4f282b] text-white">
                                        $20.00
                                    </div>
                                    <div className="px-8 text-[15px] md:text-[30px] rounded-full py-2 bg-[#4f282b] text-white">
                                        $60.00
                                    </div>
                                    <div className="px-8 text-[15px] md:text-[30px] rounded-full py-2 bg-[#4f282b] text-white">
                                        $100.00
                                    </div>
                                </div>
                            </div>

                            <div className="Deliveryinfo">
                                <div className="head w-full text-[35px] md:text-[70px]  prociono-regular uppercase ">
                                    <span>Delivery info</span>
                                </div>
                                <div className="reciptno w-full text-[25px] md:text-[50px]  prociono-regular uppercase">
                                    <span>RECIPIENT INFO</span>
                                </div>
                                <form className="form space-y-[20px]" onClick={handlesubmit} >
                                    <div className="big space-y-[20px]">
                                        <div className="form_group">
                                            <label
                                                className="text-[20px] md:text-[30px]"
                                                htmlFor="name"
                                            >
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="recipit"
                                                value={recipit}
                                                onChange={(e) => setrecipit(e.target.value)}
                                                className="w-full border-b px-3 py-2 border-b-[#4f282b]"
                                            />
                                        </div>
                                        <div className="form_group">
                                            <label
                                                className="text-[20px] md:text-[30px]"
                                                htmlFor="name"
                                            >
                                                Email:
                                            </label>
                                            <input
                                                type="text"
                                                id="Email"
                                                value={Email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border-b px-3 py-2 border-b-[#4f282b]"
                                            />
                                        </div>
                                    </div>
                                    <div className=" prociono-regular reciptno text-[30px]">
                                        <span>YOUR INFO</span>
                                    </div>
                                    <div className="form_group">
                                        <label
                                            className="text-[20px] md:text-[30px]"
                                            htmlFor="name"
                                        >
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            id="sendername"
                                            value={sendername}
                                            onChange={(e) => setsendername(e.target.value)}
                                            className="w-full border-b px-3 py-2 border-b-[#4f282b]"
                                        />
                                    </div>{" "}
                                    <div className="form_group">
                                        <label
                                            className="text-[20px] md:text-[30px]"
                                            htmlFor="name"
                                        >
                                            message:
                                        </label>
                                        <textarea
                                            name=""
                                            id="message"
                                            value={message}
                                            onChange={(e) => setmessage(e.target.value)}
                                            className="w-full border-b px-3 py-2 border-b-[#4f282b]"
                                         
                                        ></textarea>
                                    </div>
                                    <div className="flex flex-col mt-[50px] md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-[30px] btngroup mb-[50px]">
                                        <div className="flex items-center btnbox_product ">
                                            <button className=" text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b]  hover:bg-transparent bg-[#4f282b] text-white rounded-l-full p-1" onClick={decrementQuantity} >
                                                <i class="bi bi-dash"></i>
                                            </button>
                                            <span className="px-6 bg-[#4f282b] py-3 text-[#fff] ">
                                                {quantity}
                                            </span>
                                            <button className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b]  hover:bg-transparent bg-[#4f282b] text-white rounded-r-full p-1" onClick={incrementQuntity} >
                                                <i class="bi bi-plus"></i>
                                            </button>
                                        </div>
                                        <div className="addtocart">
                                            <input
                                                value="ADD TO cARD"
                                                type="submit"
                                                className="px-8 py-2 font-semibold text-center uppercase rounded-full cursor-pointer btn_primary "
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center md:text-start addtocart">
                                        <input
                                            value="Compare"
                                            type="submit"
                                            className="px-8 py-2 font-semibold text-center uppercase rounded-full cursor-pointer btn_primary "
                                        />
                                    </div>
                                    <div className="text-center sell md:text-start text-[20px] ">
                                        <span>
                                            {" "}
                                            <i class="bi bi-cart-fill"></i> Order in the next 14 hours
                                            09 minutes to get it by October 4, 2024
                                        </span>
                                        <br />
                                        <span>
                                            {" "}
                                            <i class="bi bi-people-fill"></i> Real Time{" "}
                                            <span className="text-[15px] p-1 bg-[#4f282b] text-white">
                                                10
                                            </span>{" "}
                                            Visitors Right Now{" "}
                                        </span>
                                    </div>
                                    <div className="text-center md:text-start addtocart">
                                        <input
                                            value="buy now"
                                            type="submit"
                                            className="px-8 py-2 font-semibold text-center uppercase rounded-full cursor-pointer btn_primary "
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Giftcardsection;
