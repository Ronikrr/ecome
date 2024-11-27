import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./breadcrumb";
import { Cartcontext } from "./cart/cartcontext";
import Reviews from "./reviewview";
import StarRating from "./Starrating";
import Loader from "./loader";
import { WishlistContext } from "./wishlist/wishlistcontext";
import { useNavigate } from 'react-router-dom';

const Shopview = () => {
    const [user, setuser] = useState(null);
    const navigate = useNavigate();
    const { cart, addtocart, increaceQuntity, decreaseQuantity } =
        useContext(Cartcontext);
    const [message ,setmessage]=useState(null)
    const { addwishlist } = useContext(WishlistContext);
    const { productid } = useParams();
    const [post, setpost] = useState(null);
    const [activeIndex, setactiveindex] = useState(null);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [activetab, setactivetab] = useState('review');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [Product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    

    const toggle = (i) => {
        setactiveindex(activeIndex === 1 ? null : i);
    };
    const handleReviewSubmit = () => {
        console.log('Review', review)
        console.log('Review', rating)
    }

    // Handle review form visibility toggle
    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
        setactivetab('review')
        setShowQuestionForm(false); // Hide question form when review form is opened
    };

    // Handle question form visibility toggle
    const toggleQuestionForm = () => {
        setShowQuestionForm(!showQuestionForm);
        setactivetab('question')
        setShowReviewForm(false); // Hide review form when question form is opened
    };
    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${productid}.json`)
                if (!res.ok) {
                    setmessage( `Error to featch product: ${res.status} ` )
                    // throw new Error(`Error: ${res.status}`)
                }
                const data = await res.json();
                setpost(data);
            } catch (error) {
                console.error(`Error to featch product: ${error} `);
                setmessage( `Error to featch product: ${error} ` )
            }
        }
        fetchproduct();
    }, [productid]);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const storeduserprofile = JSON.parse(localStorage.getItem("currentUser"));
        if (!accessToken || !storeduserprofile) {
            navigate("/");
        }
        setuser(storeduserprofile);
        setLoading(false);
    }, [navigate]);
    const handleAddToCart = (product) => {
        const { id } = product;
        if (!id) {
            console.error("Product is missing required fields:", product);
            setmessage("Failed to add to cart. Product is missing required fields.")
            return;
        }
        try {
            addtocart(user.id, { id });
            console.log(product);
            setmessage('Product added to cart successfully!' );
        } catch (error) {
            console.error("Error adding to cart:", error);
            setmessage( 'Failed to add to cart. Please try again.' );
        }
    };
    const handleAddTowishlist = (product) => {
        const { id } = product;
        if (!id) {
            console.error("Product is missing required fields:", product);
            setmessage( 'Failed to add to wishlist. Product is missing required fields.' );
            return;
        }
        try {
            addwishlist(user.id, { id });
            console.log(product);
            setmessage('Product added to wishlist successfully!' );
        } catch (error) {
            console.error("Error adding to wishlist:", error);
            setmessage( 'Failed to add to wishlist. Please try again.' );
        }
    };
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setmessage(null), 3000);
            return () => clearTimeout(timer)
        }
    })
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
                if (!response.ok) throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);

                const data = await response.json();
                console.log(data);

                const validProducts = data
                    .filter((prod) => prod && prod.id) // Ensure valid products
                    .slice(0, 4); // Get only the first 5 products

                console.log(validProducts);
                setProduct(validProducts);



            } catch (err) {
                setmessage( `${err.message}` );
               
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {
        console.log(post?.product_colors);
    }, [post]);

    // Display loading or error message
    if (loading) return <Loader />
    if (message) return <p>Error: {message}</p>;
    if (!post) {
        return <p>Loading...</p>;
    }
    const renderStar = (rating) => {
        const fullStars = Math.floor(rating);
        const halfstar = rating % 1 !== 0;
        const emptystart = 5 - fullStars - (halfstar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <i key={`full-${i}`} className="bi bi-star-fill"></i>
                ))}
                {halfstar && <i className="bi bi-star-half"></i>}
                {[...Array(emptystart)].map((_, i) => (
                    <i key={`full-${i}`} className="bi bi-star"></i>
                ))}
            </>
        );
    };

    // const sortsize = post?.size?.sort((a, b) => a - b);
    const scrollToTop = () => {
        window.screenY({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <section className="pt-20">
            <Breadcrumb />
            {message && (
                <div className={message.type === 'success' ? 'success-message' : 'error-message'}>
                    {message?.text}
                </div>
            )}
            <div className="container mx-auto">
                <div className="w-full py-[100px] flex flex-col md:flex-row ">
                   
                    <div className="flex justify-center w-full md:w-6/12">
                        <img
                            src={post?.api_featured_image}
                            className="w-full object-fit aspect-square h-auto md:w-[663px] md:h-[663px]"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col p-2 md:p-0 w-full md:w-6/12 text-[#4f282b]">
                        <div className="main_heading">
                            <span className="text-[30px] md:text-[70px] prociono-regular font-semibold">
                                {" "}
                                {post.name}{" "}
                            </span>
                        </div>
                        <div className="price">
                            <span className="text-[16px] lora leading-none">
                                {post.currency}{post.price}
                            </span>
                        </div>
                        <div className="flex border-b items-center pb-2 space-x-[10px] border-[#4f282b]">
                            <div className="flex rating">
                                <span className="font-semibold text-[#FFD700] text-[20px] md:text-[40px]  ">
                                    {renderStar(Number(post?.rating)|| 0)}
                                </span>
                            </div>
                            <div className="rewiew">
                                <span className=" text-[20px] md:text-[50px] capitalize lora ">
                                    (prodcut rating {post?.rating} )
                                </span>
                            </div>
                        </div>
                        <div className="dis">
                            <span className="text-[15px] font-semibold md:text-[25px] capitalize lora pt-[20px] ">
                                {post.description}
                            </span>
                        </div>
                        <div className="sizecart flex-col md:flex-row lora capitalize   flex items-center text-[20px] md:text-[40px] mt-[42px]">
                            <span className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between " >
                                <span>colors</span>
                                {post.product_colors.length === 0 && post.product_colors.length === 'null' ? (
                                    <select className="w-6/12 ms-0 md:ms-3" name="colors" id="colorSelect">
                                        {post.product_colors?.map((color, index) => (
                                            <option key={index} value={color.colour_name} style={{ backgroundColor: color.hex_value }}>
                                                {color.colour_name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (<p>no color</p>)}


                                <span className="text-[15px] md:text-[25px] border-b border-[#4f282b]">
                                    file size chart
                                </span>
                            </span>
                        </div>

                        <div className="flex flex-col mt-[50px] md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-[30px] btngroup mb-[50px]">
                            <div className="flex items-center btnbox_product ">
                                <button className=" text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b]  hover:bg-transparent bg-[#4f282b] text-white rounded-l-full p-1" onClick={decreaseQuantity} >
                                    <i class="bi bi-dash"></i>
                                </button>
                                <span className="px-6 bg-[#4f282b] py-3 text-[#fff] ">{cart[user.id]?.find(
                                    (itemInCart) => itemInCart.id === post.id
                                )?.quantity || 1}</span>
                                <button className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b]  hover:bg-transparent bg-[#4f282b] text-white rounded-r-full p-1" onClick={increaceQuntity} >
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                            <div className="addtocart">
                                <button onClick={() => handleAddToCart(post)} className="px-6 py-2 font-semibold uppercase rounded-full btn_primary lora">
                                    add cart
                                </button>
                            </div>
                            <div className="addtocart  w-[50px] h-[50px]  flex items-center justify-center   transition-all">
                                <button className="text-[30px]  text-[#4f282b] bg-transparent transition-all" onClick={() => handleAddTowishlist(post)} >
                                    <i class="bi bi-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="dis">
                            <div className="text-[15px]  md:text-[25px] lora font-semibold ">
                                <span>
                                    Worldwide Shipping in all order $200, Delivery in 2-5 working
                                    days Shipping & Return
                                </span>
                            </div>
                            <div className="mt-[10px] text-[15px] md:text-[25px] lora font-semibold mb-[40px]">
                                <span>
                                    {post.product_type}
                                </span>
                            </div>
                            <div className="my-2 bg-[#4f282b] h-[1px]" />
                            <div className="text-[15px]  md:text-[25px] lora font-semibold">
                                <span>
                                    Our exclusive Day Night Cream provides vital nutrients and
                                    powerful hydration for skin that looks younger. It helps fill
                                    in lines and wrinkles and Gives smooth skin.
                                </span>
                            </div>
                            <div className="spacification mt-[50px]">
                                <div className="head text-[25px] md:text-[30px] lora font-semibold">
                                    {" "}
                                    Specifications:{" "}
                                </div>
                                <ul>
                                    <li className="flex items-center lora text-[20px] md:text-[30px] font-semibold">
                                        <i className="bi bi-dot me-2 text-[40px]"></i>
                                        {post?.specifications}
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full mt-[100px] ">
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(0)}
                                    >
                                        About The {post?.category}
                                        {activeIndex === 0 ? (
                                            <i class="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i class="bi bi-arrow-down-circle"></i>
                                        )}{" "}
                                    </button>
                                    {activeIndex === 0 && (
                                        <ul className="px-5 py-3 space-y-[25px] *:flex *:items-center *:text-[20px] *:prociono-regular *:font-semibold *:md:text-[40px]  ">
                                            <li className="">
                                                <i className="bi bi-dot me-2 "></i>
                                                Highlighting Glow
                                            </li>
                                            <li className="">
                                                <i className="bi bi-dot me-2 "></i>
                                                Natural Ingredients
                                            </li>
                                            <li className="">
                                                <i className="bi bi-dot me-2 "></i>
                                                Brightens Skin
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(1)}
                                    >
                                        Description
                                        {activeIndex === 1 ? (
                                            <i class="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i class="bi bi-arrow-down-circle"></i>
                                        )}{" "}
                                    </button>
                                    {activeIndex === 1 && (
                                        <>
                                            <span className="text-[25px] lato-thin font-semibold" >
                                                {post?.description}
                                            </span>

                                        </>
                                    )}
                                </div>
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(2)}
                                    >
                                        Additional Details
                                        {activeIndex === 2 ? (
                                            <i class="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i class="bi bi-arrow-down-circle"></i>
                                        )}{" "}
                                    </button>
                                    {activeIndex === 2 && (
                                        <>

                                            <table className="w-full" >
                                                <tr className="w-full text-center" >
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize " >weight</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]" > {post?.weight} </td>
                                                </tr>
                                                <tr className="w-full text-center" >
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize " >dimensions</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]" >{post?.dimensions}</td>
                                                </tr>
                                                <tr className="w-full text-center" >
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize " >size</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]" >{post?.size}</td>
                                                </tr>
                                            </table>

                                        </>
                                    )}
                                </div>
                                <div className="border-b w-full border-[#4f282b] ">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(3)}
                                    >
                                        Product Certificate
                                        {activeIndex === 3 ? (
                                            <i class="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i class="bi bi-arrow-down-circle"></i>
                                        )}{" "}
                                    </button>
                                    {activeIndex === 3 && (
                                        <>
                                            <div className="px-5 py-3 space-y-[25px] *:flex *:items-center *:text-[20px] *:prociono-regular *:font-semibold *:md:text-[40px]  ">
                                                <li className="">
                                                    <i className="bi bi-dot me-2 "></i>
                                                    Helps in Blurring
                                                </li>
                                                <li className="">
                                                    <i className="bi bi-dot me-2 "></i>
                                                    Minimizes The Pores
                                                </li>
                                                <li className="">
                                                    <i className="bi bi-dot me-2 "></i>
                                                    Suitable For all types of skin
                                                </li>
                                                <li className="">
                                                    <i className="bi bi-dot me-2 "></i>
                                                    flawless finish
                                                </li>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full pb-[100px] flex flex-wrap text-[#4f282b] text-center md:text-left">
                    <div className="w-full lato-thin ">
                        <span>Occasion Sale!</span>
                    </div>
                    <div className="w-full text-[40px] md:text-[70px] prociono-regular font-semibold ">
                        <span>Upcoming Products</span>
                    </div>
                    {Product.map((items) => (
                        <Link
                            onClick={scrollToTop}
                            to={`/shop/${items.id}`}
                            className="w-full md:w-3/12  overflow-hidden h-auto  mb-[50px] group relative "
                            key={items.id}
                        >
                            <div className="w-full main-image md:w-11/12 ">
                                <img
                                    src={items.api_featured_image}
                                    alt=""
                                    className="w-full h-full object-fit aspect-square "
                                />
                                <div className="absolute flex flex-col space-y-[30px] left-[-50px] top-[20px] group-hover:left-[20px] transition-all ">
                                    <Link to="path"><i class="bi bi-heart text-[30px] font-semibold flex "></i></Link>
                                    <Link to="path"><i class="bi bi-recycle text-[30px] font-semibold flex "></i></Link>
                                    <Link to="path"><i class="bi bi-search text-[30px] font-semibold flex "></i></Link>
                                </div>
                            </div>
                            <div className="main_dis py-[25px] text-center px-[30px] space-y-[10px] text-[#4f282b] space-y-[20px] ">

                                <div className="text-[25px]  md:text-[40px]  capitalize lato-thin leading-none ">
                                    <span> {items?.name} </span>
                                </div>

                                <div className=" leading-none capitalize lato-thin text-[15px]  md:text-[40px] ">
                                    <span> ${items?.price} </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
                <div className="w-full pb-[50px] flex flex-wrap text-[#4f282b] text-center md:text-left">
                    <div className="w-full product-details">


                        {/* Buttons for review and question */}
                        <div className="flex mt-6 flex-col md:flex-row md:space-x-[80px] action-buttons border-b border-[#4f282b] prociono-regular font-bold ">
                            <button
                                onClick={toggleReviewForm}
                                className={`btn btn-primary active:border-b-2 
                                ${activetab === 'review' ? 'border-b-[#4f282b]' : ''}     text-[40px] py-3`}
                            >
                                Review
                            </button>
                            <button
                                onClick={toggleQuestionForm}
                                className={`btn btn-primary active:border-b-2 
                                ${activetab === 'question' ? 'border-b-[#4f282b]' : ''}     text-[40px] py-3`}
                            >
                                Question
                            </button>
                        </div>

                        {/* Conditionally render review form */}
                        {showReviewForm && (
                            <Reviews />
                        )}

                        {/* Conditionally render question form */}
                        {showQuestionForm && (
                            <div className="mt-6 question-form">
                                <h3>Ask a Question</h3>
                                <textarea
                                    placeholder="Ask something about this product"
                                    className="w-full p-4 border rounded"
                                    rows="4"
                                />
                                <button className="px-4 py-2 mt-2 rounded-full btn btn_primary ">Submit Question</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className=" text-[#4f282b] pb-[75px] px-[30px] md:px-[0px] ">
                    <div className="w-full text-[40px] md:text-[70px] prociono-regular font-semibold text-center md:text-left ">
                        <span>Add a review</span>
                    </div>
                    <div className="w-full text-[20px] md:text-[40px] lato-thin font-semibold text-center md:text-left ">
                        <span>Your email address will not be published.Required fields are marked *</span>
                    </div>
                    <div className="w-full mt-[20px] space-y-[30px] text-[20px] md:text-[40px] text-center md:text-left lato-thin font-semibold capitalize ">
                        <span>your rating </span>
                        <StarRating rating={rating} setrating={setRating} />
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Share your experience"
                            className="w-full placeholder:text-[#4f282b] p-4 mt-4 border-b border-b-[#4f282b] rounded"
                            rows="4"
                        />
                        <div className="flex flex-col justify-between w-full space-x-0 md:space-x-10 md:flex-row email_name ">
                            <input type="text" placeholder="Name" className="w-full md:w-6/12 placeholder:text-[#4f282b] border-b border-b-[#4f282b] rounded" />
                            <input type="text" placeholder="Email" className="w-full md:w-6/12 placeholder:text-[#4f282b] border-b border-b-[#4f282b] rounded" />
                        </div>
                        <div className="">
                            <div className="w-full text-[15px] md:text-[30px] lato-thin font-semibold ">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#4f262b] bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-[#4f262b]"
                                />

                                <span> Save my name, email, and website in this browser for the next time I comment.</span>
                            </div>
                        </div>
                        <button className=" px-6 uppercase py-2 mt-2 rounded-full btn btn_primary text-[20px]" onClick={handleReviewSubmit} >submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shopview;
