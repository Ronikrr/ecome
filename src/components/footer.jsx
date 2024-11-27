import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from '../assets/img/logo/download__4_-removebg-preview 1.png'
const Footer = () => {
    const [email, setemail] = useState("");
    const [isSubcriberd, setsubscribed] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem("subscribeemail", email);
            setsubscribed(true);
            console.log("email in local :", email);
            setemail("");
        }
        else {
            // alert("please enter valid email")
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <footer className="footer bg-[#FCEADE] text-[#4F282B] px-6  md:px-0 py-[100px]">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap w-full  *:text-xl *:font-semibold *:mb-3 *:md:mb-0 ">
                        <div className="flex flex-col w-full md:w-5/12 xl:w-4/12 *:mb-3   ">
                            <Link className="mb-2 logos">
                                <img
                                    src={logo}
                                    alt=""
                                    className={`w-20 h-20`}
                                />
                            </Link>
                            <div className=" small_dis">
                                <p>An oasis of online beauty <br /> built specifically so your....</p>
                            </div>
                            <div className="phone">
                                <span> Phone: +912345567892 </span>

                                <br />

                                <span> Email: cosmetic123@gmail.com </span>
                            </div>
                            <div className="flex items-center space-x-3 social ">
                                <div className="flex items-center justify-center w-6 h-6 facebook ">
                                    <Link to="#" className="w-full h-full" >
                                        <i class="bi bi-facebook w-full h-full"></i>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center w-6 h-6 facebook ">
                                    <Link to="#" className="w-full h-full" >
                                        <i class="bi bi-twitter w-full h-full"></i>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center w-6 h-6 facebook ">
                                    <Link to="#" className="w-full h-full" >
                                        <i class="bi bi-instagram w-full h-full"></i>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center w-6 h-6 facebook ">
                                    <Link to="#" className="w-full h-full" >
                                        <i class="bi bi-pinterest w-full h-full"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-5/12 xl:w-2/12 *:mb-3">
                            <span className="text-xl uppercase ">company</span>

                            <ul className=" *:capitalize *:mb-3">
                                <li >
                                    <Link to="/" onClick={scrollToTop} className="cursor-pointer hover:underline" >home</Link>
                                </li>
                                <li >
                                    <Link to="/about" onClick={scrollToTop} className="cursor-pointer hover:underline" >about us</Link>
                                </li>
                                <li >
                                    <Link to="/blog" onClick={scrollToTop} className="cursor-pointer hover:underline" >blog</Link>
                                </li>
                                <li >
                                    <Link to="/giftcard" onClick={scrollToTop} className="cursor-pointer hover:underline" >gift card</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full md:w-5/12 xl:w-2/12 *:mb-3 ">
                            <span className="text-xl uppercase ">support</span>
                            <ul className=" *:capitalize *:mb-3">
                                <li className="" >
                                    <Link to="/faq" onClick={scrollToTop} className="cursor-pointer hover:underline" >faq</Link>
                                </li>
                                <li className="" >
                                    <Link to="/ordertraking" onClick={scrollToTop} className="cursor-pointer hover:underline" >ordertraking</Link>
                                </li>
                                <li className="" >
                                    <Link to="/ourteam" onClick={scrollToTop} className="cursor-pointer hover:underline" >our team</Link>
                                </li>
                                <li className="" >
                                    <Link to="/contact" onClick={scrollToTop} className="cursor-pointer hover:underline" >contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full md:w-5/12 xl:w-4/12 *:mb-3">
                            <span className="text-xl uppercase ">SUBSCRIBE</span>
                            <div className="maindis">Praesent semper feugiat nibh sed <br /> pulvinar proin gravida hendrerit.</div>


                                <form action="" onSubmit={handlesubmit} className="flex space-x-0 w-full *:px-3 *:py-2 " >
                                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="rounded-l-xl w-8/12 border-2 border-[#4F282B]  bg-[#FCEADE] placeholder-shown:text-[#4f282b] placeholder-shown: text-md " placeholder="enter your email" />
                                    <input type="submit" className="w-4/12 cursor-pointer border-1 rounded-r-xl btn_primary" />

                                </form>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
