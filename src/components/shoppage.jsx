import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from './loader'
import { Cartcontext } from "./cart/cartcontext";

const Shoppage = () => {
    const [user, setuser] = useState(null);
    const navigate = useNavigate()
    const resultPage = 12;
    const { cart, addtocart, increaceQuntity, decreaseQuantity } =
        useContext(Cartcontext);
    const [current, setCurrent] = useState(1);
    const [criteria, setCriteria] = useState("id");
    const [product, setProduct] = useState([]);
    const [productType, setProductType] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
                if (!response.ok) throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);

                const data = await response.json();
                const validProducts = data.filter((prod) => prod && prod.id).slice(0, 100);

                setProduct(validProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {

        const storeduserprofile = JSON.parse(localStorage.getItem("currentUser"));

        setuser(storeduserprofile);
        setLoading(false);
    }, [navigate]);
    const handleAddToCart = (product) => {
        const { id } = product;
        if (!id) {
            console.error("Product is missing required fields:", product);
            // setError("Failed to add to cart. Product is missing required fields.") 
            return;

        }
        try {
            addtocart(user.id, { id });
            console.log(product);
            // setTimeout(() => {
            //     setShowNotification(true);
            // }, 2000);
            // setmessage('Product added to cart successfully!' );
        } catch (error) {
            console.error("Error adding to cart:", error);
            // setError('Failed to add to cart. Please try again.');
        }
    };
    const filteredProduct = product.filter(
        (prod) => productType.length === 0 || productType.includes(prod.category)
    );

    const sortedProduct = filteredProduct.sort((a, b) => {
        if (criteria === "name") return a.name?.localeCompare(b.name);
        if (criteria === "price") return a.price - b.price;
        return a.id - b.id;
    });

    const pages = Math.ceil(filteredProduct.length / resultPage);
    const startIndex = (current - 1) * resultPage;
    const endIndex = Math.min(startIndex + resultPage, filteredProduct.length);
    const currentProduct = sortedProduct.slice(startIndex, endIndex);

    const handleSortChange = (e) => {
        setCriteria(e.target.value);
        setCurrent(1);
    };

    const handlePageChange = (page) => {
        setCurrent(page);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const renderStar = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStar = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <i key={`full-${index}`} className="bi bi-star-fill"></i>
                ))}
                {halfStar && <i className="bi bi-star-half"></i>}
                {[...Array(emptyStar)].map((_, index) => (
                    <i key={`empty-${index}`} className="bi bi-star"></i>
                ))}
            </>
        );
    };

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;
    return (
        <section className="shopsection py-[100px]  text-[#4f282b] ">
            <div className="container mx-auto">
                <div className="flex w-full">
                    <div className="flex flex-wrap w-full justify-evenly  mt-[50px]  ">
                        <div className="flex flex-wrap justify-center w-full md:justify-between">
                            <div className="text-[15px] md:text-[25px]">
                                Showing {startIndex + 1} - {endIndex} of {product.length} result
                            </div>
                            <div className="text-[15px] md:text-[25px] border-2 border-[#4f282b] px-4 py-2 ">
                                <select
                                    onChange={handleSortChange}
                                    value={criteria}
                                    name=""
                                    id=""
                                >
                                    <option value="select">select</option>
                                    <option value="id">Sort by ID</option>
                                    <option value="name">Sort by Name</option>
                                    <option value="price">Sort by Price</option>
                                    <option value="category">Sort by Category</option>

                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full mt-[36px]">
                            {currentProduct.map((items) => (
                                <Link
                                    onClick={scrollToTop}
                                    to={`/shop/${items.id}`}
                                    className="w-full 2xl:w-4/12 md:w-5/12  overflow-hidden h-auto  mb-[50px] group relative "
                                    key={items.id}
                                >
                                    <div className="main-image">
                                        <img
                                            src={items.api_featured_image}
                                            alt=""
                                            className="w-full h-full m-0 md:me-5 object-fit aspect-square "
                                        />
                                        <div className="absolute flex flex-col space-y-[30px] left-[-50px] top-[30px] group-hover:left-[30px] transition-all ">
                                            {/* <Link to="path" onClick={() => handleAddToCart(user.id, product.id)} ><i class="bi bi-heart text-[30px] font-semibold flex "></i></Link>
                                            <Link to="path"><i class="bi bi-recycle text-[30px] font-semibold flex "></i></Link>
                                            <Link><i class="bi bi-search text-[30px] font-semibold flex "></i></Link> */}
                                            <button><i class="bi bi-heart text-[30px] font-semibold flex "></i></button>
                                            <button><i class="bi bi-recycle text-[30px] font-semibold flex "></i></button>
                                            <button><i class="bi bi-search text-[30px] font-semibold flex "></i></button>
                                        </div>
                                    </div>
                                    <div className="main_dis py-[25px] text-center px-[30px] space-y-[10px] text-[#4f282b] space-y-[20px] ">
                                        <div className="flex items-center justify-center ">
                                            <span className="font-semibold text-[#FFD700] text-[10px] md:text-[40px]  ">

                                                {renderStar(items.rating || 4)}

                                            </span>
                                            {items.rating}
                                        </div>
                                        <div className="text-[25px]  md:text-[40px]  capitalize lato-thin leading-none ">
                                            <span> {items?.name} </span>
                                        </div>
                                        <div className=" leading-none capitalize lato-thin text-[15px] text-[#9D9D9D]  md:text-[40px] ">
                                            <span> {items?.category} </span>
                                        </div>
                                        <div className=" leading-none capitalize lato-thin text-[15px]  md:text-[40px] ">
                                            {/* <span> ${items?.price} </span> */}
                                            {/* {items.discountedPrice ? (
                                                <>
                                                    <span className="line-through text-[#9D9D9D]">${items.price}</span>
                                                    <span className="text-[25px] md:text-[40px] font-semibold text-[#4f282b]"> ${items.discountedPrice}</span>
                                                </>
                                            ) : ( */}
                                            <span>${items?.price}</span>
                                            {/* )} */}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex justify-around w-full pagination ">
                            <button
                                onClick={() => handlePageChange(current - 1)}
                                disabled={current === 1}
                                className="w-[80px] h-[80px] mx-1 border border-[#4f282b] rounded-full text-[40px]"
                            >
                                <i class="bi bi-arrow-left"></i>
                            </button>
                            <div className="">
                                {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        type="button"
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        disabled={page === current}
                                        className={` w-[80px] h-[80px] mx-1 border border-[#4f282b] ${page === current ? "bg-[#4f282b] text-[#FCEADE]" : ""
                                            } rounded-full text-[40px]`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => handlePageChange(current + 1)}
                                disabled={current === pages}
                                className="w-[80px] h-[80px] mx-1 border border-[#4f282b] rounded-full text-[40px]"
                            >
                                <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shoppage;
