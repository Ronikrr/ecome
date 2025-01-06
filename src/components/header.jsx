

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modeal from "./login";
import Regiter from './register'
import { Cartcontext } from "./cart/cartcontext";
import { WishlistContext } from "./wishlist/wishlistcontext";
import logo from '../assets/img/logo/download__4_-removebg-preview 1.png'
const Header = () => {
    const { cart } = useContext(Cartcontext);
    const { wishlist } = useContext(WishlistContext)
    const [user, setUser] = useState(null);
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();

    const [isExpanded, setIsExpanded] = useState(false);
    const [ismodelopen, setopenmodel] = useState(false)
    const [ismodelrgopen, setopenrgmodel] = useState(false)
    const toggleMenu = () => {
        setIsExpanded((prev) => !prev);
        console.log("Menu is now", !isExpanded ? "expanded" : "collapsed");
    };
    useEffect(() => {
        const storeduserprofile = JSON.parse(localStorage.getItem("currentUser"));
        setUser(storeduserprofile);

    }, [navigate]);
    const userCart = user ? cart[user.id] || [] : [];
    const userWishlit = user ? wishlist[user.id] || [] : [];
    console.log(userCart)

    const isUserLoginIN = () => {
        return localStorage.getItem('userToken') ? true : false;
    }


    const handleLinkClick = (path) => {
        setActiveLink(path); // Set the active link
        scrollToTop(); // Scroll to top on link click
    };
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
    const header_link_name = [
        {
            id: 1,
            name: 'home',
            path: '/'
        }, {
            id: 2,
            name: 'about',
            path: '/aboutus'
        }, {
            id: 3,
            name: 'blog',
            path: '/blog'
        }, {
            id: 4,
            name: 'shop',
            path: '/shop'
        }, {
            id: 5,
            name: 'service',
            path: '/service'
        }, {
            id: 6,
            name: 'Get in Touch',
            path: '/contact'
        }
    ]
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
                        {header_link_name.map((item, id) => (
                            <li key={id} >
                                <Link to={item.path} onClick={() => handleLinkClick(item.path)} className={` mb-2 capitalize transition-colors duration-200 
                            ${activeLink === item.path ? 'font-bold border-b-2 border-[#4f282b]' : 'text-[#4f282b]'} 
                            hover:border-b-2 hover:border-[#4f282b]'`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}

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
                                <Link className="p-2 bg-[#4f282b] text-white rounded-l-lg border border-[#4f282b] hover:bg-transparent hover:text-[#4f282b] " to={'/login'}  >Login</Link>

                                <Link className="p-2 bg-[#4f282b] text-white rounded-r-lg border border-[#4f282b] hover:bg-transparent hover:text-[#4f282b]" to={'/regi'} >Regi</Link>

                        </div>
                    )}
                </div>
                {/* Right Icons */}
            </div>
        </header>
    );
};

export default Header;
