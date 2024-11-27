

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modeal from "./modeal";
import Regiter from './register'
import { Cartcontext } from "./cart/cartcontext";
import { WishlistContext } from "./wishlist/wishlistcontext";
import logo from '../assets/img/logo/download__4_-removebg-preview 1.png'
const Header = () => {
    const token = localStorage.getItem('accessToken');
    const { cart } = useContext(Cartcontext);
    const { wishlist } = useContext(WishlistContext)
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const [isExpanded, setIsExpanded] = useState(false);
    const [ismodelopen, setopenmodel] = useState(false)
    const [ismodelrgopen, setopenrgmodel] = useState(false)
    const toggleMenu = () => {
        setIsExpanded((prev) => !prev);
        console.log("Menu is now", !isExpanded ? "expanded" : "collapsed");
    };
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const storeduserprofile = JSON.parse(localStorage.getItem("currentUser"));
        if (!accessToken || !storeduserprofile) {
            navigate("/");
        }
        setUser(storeduserprofile);

    }, [navigate]);
    const userCart = user ? cart[user.id] || [] : [];
    const userWishlit = user ? wishlist[user.id] || [] : [];
    console.log(userCart)

    const isUserLoginIN = () => {
        return localStorage.getItem('accessToken') ? true : false;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const openmodel = () => {
        setopenmodel(true)
    }
    const closeModal = () => {
        setopenmodel(false)
    }
    const openmodelrg = () => {
        setopenrgmodel(true)
    }
    const closeModalrg = () => {
        setopenrgmodel(false)
    }

    return (
        <header className="fixed z-50 w-full py-2 bg-white border-b shadow-sm ">
            <div className="container flex items-center justify-between px-4 mx-auto md:px-8">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-16 h-16"
                    />
                </a>

                {/* Toggle Button for Mobile */}
                <button
                    className="text-black md:hidden focus:outline-none"
                    aria-label="Toggle Navigation"
                    aria-expanded={isExpanded}
                    onClick={toggleMenu}
                >
                    <i className={`bi ${isExpanded ? 'bi-x' : 'bi-list'} text-2xl`}></i>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`fixed top-0 right-0 h-full w-3/4 bg-white transform ${isExpanded ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out md:static md:w-auto md:transform-none md:flex items-center`}
                >
                    <ul className="flex flex-col items-center mt-10 space-y-5 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
                        <li>
                            <Link to="/" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/service" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={scrollToTop} className="hover:text-[#4f282b] capitalize">
                                Get in Touch
                            </Link>
                        </li>
                        <li>
                            <button
                                className="text-black md:hidden focus:outline-none"
                                aria-label="Toggle Navigation"
                                aria-expanded={isExpanded}
                                onClick={toggleMenu}
                            >
                                <i className={`bi ${isExpanded ? 'bi-x' : 'bi-list'} text-2xl`}></i>
                            </button>
                        </li>
                        <li className="flex items-center justify-end space-x-4 md:hidden wishlit full" >
                            <Link to="/wishlist" className="text-black  hover:text-[#4a282b]">
                                <i class="bi bi-heart"></i>
                            </Link>
                            <Link to="/cart" className="text-black  hover:text-[#4a282b]">
                                <i className="text-xl bi bi-bag"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="items-center justify-end space-x-4 md:flex wishlit md:w-1/12" >
                    {isUserLoginIN() ? (
                        <>
                            <Link to="/wishlist" onClick={scrollToTop} className="text-black relative  hover:text-[#4a282b]">
                                <i class="bi bi-heart text-xl "></i>
                                {userWishlit?.length === 0 ? ("") : (
                                    <div className="absolute bg-red-600 w-[15px] h-[15px] text-white text-[11px] rounded-full top-0 -right-[5px] flex justify-center items-center ">
                                        <span> {userWishlit?.length || 0} </span>
                                    </div>
                                )}
                            </Link>

                            <Link to="/cart" onClick={scrollToTop} className="text-black  relative hover:text-[#4a282b]">
                                <i className="text-xl bi bi-bag "></i>
                                {userCart?.length === 0 ? ('') : (
                                    <div className="absolute bg-red-600 w-[15px] h-[15px] text-white text-[11px] rounded-full top-0 -right-[5px] flex justify-center items-center ">
                                        <span> {userCart?.length || 0} </span>
                                    </div>
                                )}
                            </Link>
                            <Link to='/profile' onClick={scrollToTop} className="text-black  hover:text-[#4a282b]">
                                <i class="bi bi-person text-xl "></i>
                            </Link>
                        </>
                    ) : (

                        <div className="flex ">
                            <button className="p-2 bg-[#4f282b] text-white rounded-l-lg border border-[#4f282b] hover:bg-transparent hover:text-[#4f282b] " onClick={openmodel} >Login</button>
                            {ismodelopen && <Modeal closeModal={closeModal} openmodelrg={openmodelrg} />}
                            <button className="p-2 bg-[#4f282b] text-white rounded-r-lg border border-[#4f282b] hover:bg-transparent hover:text-[#4f282b]" onClick={openmodelrg} >Regi</button>
                            {ismodelrgopen && <Regiter closeModalrg={closeModalrg} openmodel={openmodel} />}
                        </div>
                    )}
                </div>
                {/* Right Icons */}
            </div>
        </header>
    );
};

export default Header;
