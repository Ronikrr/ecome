
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "./breadcrumb";
import { Cartcontext } from "./cart/cartcontext";
import Reviews from "./reviewview";
import StarRating from "./Starrating";
import Loader from "./loader";
import { WishlistContext } from "./wishlist/wishlistcontext";
import { useNavigate } from 'react-router-dom';
import FeedbackMessage from "./successmessage";

const Shopview = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const { cart, addtocart, increaceQuntity, decreaseQuantity } = useContext(Cartcontext);
    const { addwishlist } = useContext(WishlistContext);
    const { productid } = useParams();
    const [post, setPost] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [showReviewForm, setShowReviewForm] = useState(false);

    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [activetab, setActiveTab] = useState('review');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [Product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setfeedback] = useState({ message: '', type: '' })

    const handleClear = () => {
        setfeedback({ message: '', type: '' })
    }

    const toggle = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (!rating || !review || !name || !email) {

            setfeedback({
                message: `all fields are reqi`,
                type: 'error',
            });
        }
        else {
            const reviewdata = {
                rating,
                review,
                name,
                email,
            }
            localStorage.setItem('userReview', JSON.stringify(reviewdata))
            console.log('Review data saved to localStorage:', reviewdata);
        }
    };
    const onchangereview = (e) => {
        const { name, value } = e.target;
        setRating(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
        setActiveTab('review');
        setShowQuestionForm(false);
    };

    const toggleQuestionForm = () => {
        setShowQuestionForm(!showQuestionForm);
        setActiveTab('question');
        setShowReviewForm(false);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${productid}.json`);
                if (!res.ok) {
                    console.log(`Error fetching product: ${res.status}`);
                    return; // Early return on error
                }
                const data = await res.json();
                setPost(data);
            } catch (error) {
                console.error(`Error fetching product: ${error}`);
                setfeedback({
                    message: `Error fetching product: ${error}`,
                    type: 'error',
                });
            }
        };
        fetchProduct();
    }, [productid]);

    useEffect(() => {
        const fetchData = async () => {
            const adminToken = localStorage.getItem('cosmtictoken');
            if (!adminToken) {
                navigate('/');
                return;
            }

            try {
                setLoading(true);
                const res = await fetch('http://localhost:8000/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (res.status === 401) {
                    navigate("/");
                    return;
                } else if (res.status === 500) {
                    setfeedback({
                        message: `Server error. Please try again later.`,
                        type: 'error',
                    });
                }

                if (!res.ok) {
                    setfeedback({
                        message: `Error fetching profile: ${res.status}`,
                        type: 'error',
                    });
                }
                const data = await res.json();
                setUser(data.user);
                setLoading(false);
            } catch (error) {
                setfeedback({
                    message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
                    type: 'error',
                });
            }
        };

        fetchData();
    }, [navigate]);
    const handleAddToCart = (product) => {
        const { id } = product;
        if (!id) {
            console.error("Product is missing required fields:", product);
            return;
        }
        try {
            addtocart(user.id, { id });
            console.log(product);
            setfeedback({
                message: `Add to cart Successfully`,
                type: 'success',
            });
        } catch (error) {
            setfeedback({
                message: `Error adding to cart: ${error}`,
                type: 'error',
            });
        }
    };

    const handleAddToWishlist = (product) => {
        const { id } = product;
        if (!id) {
            setfeedback({
                message: `Error adding to cart: ${product}`,
                type: 'error',
            });
            return;
        }
        try {
            addwishlist(user.id, { id });
            console.log(product);
            setfeedback({
                message: `Add to wishlist Successfully`,
                type: 'success',
            });
        } catch (error) {
            setfeedback({
                message: `Error adding to wishlist: ${error}`,
                type: 'error',
            });
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
                if (!response.ok) throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);

                const data = await response.json();
                const validProducts = data.filter((prod) => prod && prod.id).slice(0, 4);
                setProduct(validProducts);
            } catch (err) {
                setfeedback({
                    message: `Error fetch product: ${err.message}`,
                    type: 'error',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <Loader />;
    if (!post) {
        return <p>Loading...</p>;
    }


    const renderStar = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStar = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <i key={`full-${i}`} className="bi bi-star-fill"></i>
                ))}
                {halfStar && <i className="bi bi-star-half"></i>}
                {[...Array(emptyStar)].map((_, i) => (
                    <i key={`empty-${i}`} className="bi bi-star"></i>
                ))}
            </>
        );
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    console.log(post?.id)

    return (
        <section className="pt-20">
            <Breadcrumb />
            {feedback.message && (
                <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />
            )}
            <div className="container mx-auto">
                <div className="w-full py-[100px] flex flex-col md:flex-row ">
                    <div className="flex justify-center w-full md:w-6/12">
                        <img
                            src={post?.api_featured_image}
                            className="w-full object-fit aspect-square h-auto md:w-[663px] md:h-[663px]"
                            alt={post?.name}
                        />
                    </div>
                    <div className="flex flex-col p-2 md:p-0 w-full md:w-6/12 text-[#4f282b]">
                        <div className="main_heading">
                            <span className="text-[30px] md:text-[70px] prociono-regular font-semibold">
                                {post.name}
                            </span>
                        </div>
                        <div className="price">
                            <span className="text-[16px] lora leading-none">
                                {post.currency}{post.price}
                            </span>
                        </div>
                        <div className="flex border-b items-center pb-2 space-x-[10px] border-[#4f282b]">
                            <div className="flex rating">
                                <span className="font-semibold text-[#FFD700] text-[20px] md:text-[40px]">
                                    {renderStar(Number(post?.rating || 4))}
                                </span>
                            </div>
                            <div className="review">
                                <span className="text-[20px] md:text-[50px] capitalize lora">
                                    (product rating {post?.rating})
                                </span>
                            </div>
                        </div>
                        <div className="dis">
                            <span className="text-[15px] font-semibold md:text-[25px] capitalize lora pt-[20px]">
                                {post.description}
                            </span>
                        </div>
                        <div className="sizecart flex-col md:flex-row lora capitalize flex items-center text-[20px] md:text-[40px] mt-[42px]">
                            <span className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between">
                                <span>Colors</span>
                                {post?.product_colors?.length > 0 ? (
                                    <select className="w-6/12 ms-0 md:ms-3" name="colors" id="colorSelect">
                                        {post?.product_colors.map((color, index) => (
                                            <option key={index} value={color?.colour_name} style={{ backgroundColor: color?.hex_value }}>
                                                {color?.colour_name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (<p>No color available</p>)}
                                <span className="text-[15px] md:text-[25px] border-b border-[#4f282b]">
                                    File size chart
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col mt-[50px] md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-[30px] btngroup mb-[50px]">
                            <div className="flex items-center btnbox_product">
                                <button className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b] hover:bg-transparent bg-[#4f282b] text-white rounded-l-full p-1" onClick={() => decreaseQuantity(user?._id, post?.id)}>
                                    <i className="bi bi-dash"></i>
                                </button>
                                <span className="px-6 bg-[#4f282b] py-3 text-[#fff]">{cart[user?._id]?.find(itemInCart => itemInCart.id === post?.id)?.quantity || 1}</span>
                                <button className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b] hover:bg-transparent bg-[#4f282b] text-white rounded-r-full p-1" onClick={() => increaceQuntity(user?._id, post?.id)}>
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                            <div className="addtocart">
                                <button onClick={() => handleAddToCart(post)} className="px-6 py-2 font-semibold uppercase rounded-full btn_primary lora">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="addtocart w-[50px] h-[50px] flex items-center justify-center transition-all">
                                <button className="text-[30px] text-[#4f282b] bg-transparent transition-all" onClick={() => handleAddToWishlist(post)}>
                                    <i className="bi bi-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="dis">
                            <div className="text-[15px] md:text-[25px] lora font-semibold">
                                <span>
                                    Worldwide Shipping on all orders over $200, Delivery in 2-5 working days.
                                </span>
                            </div>
                            <div className="mt-[10px] text-[15px] md:text-[25px] lora font-semibold mb-[40px]">
                                <span>
                                    {post?.product_type}
                                </span>
                            </div>
                            <div className="my-2 bg-[#4f282b] h-[1px]" />
                            <div className="text-[15px] md:text-[25px] lora font-semibold">
                                <span>
                                    Our exclusive Day Night Cream provides vital nutrients and powerful hydration for skin that looks younger. It helps fill in lines and wrinkles and gives smooth skin.
                                </span>
                            </div>
                            <div className="specification mt-[50px]">
                                <div className="head text-[25px] md:text-[30px] lora font-semibold">
                                    Specifications:
                                </div>
                                <ul>
                                    <li className="flex items-center lora text-[20px] md:text-[30px] font-semibold">
                                        <i className="bi bi-dot me-2 text-[40px]"></i>
                                        {post?.specifications}
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full mt-[100px]">
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(0)}
                                    >
                                        About The {post?.category}
                                        {activeIndex === 0 ? (
                                            <i className="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i className="bi bi-arrow-down-circle"></i>
                                        )}
                                    </button>
                                    {activeIndex === 0 && (
                                        <ul className="px-5 py-3 space-y-[25px]">
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Highlighting Glow
                                            </li>
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Natural Ingredients
                                            </li>
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
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
                                            <i className="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i className="bi bi-arrow-down-circle"></i>
                                        )}
                                    </button>
                                    {activeIndex
                                        === 1 && (
                                            <span className="text-[25px] lato-thin font-semibold">
                                                {post?.description}
                                        </span>
                                        )}
                                </div>
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(2)}
                                    >
                                        Additional Details
                                        {activeIndex === 2 ? (
                                            <i className="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i className="bi bi-arrow-down-circle"></i>
                                        )}
                                    </button>
                                    {activeIndex === 2 && (
                                        <table className="w-full">
                                            <tbody>
                                                <tr className="w-full text-center">
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize">Weight</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]">{post?.weight}</td>
                                                </tr>
                                                <tr className="w-full text-center">
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize">Dimensions</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]">{post?.dimensions}</td>
                                                </tr>
                                                <tr className="w-full text-center">
                                                    <th className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px] capitalize">Size</th>
                                                    <td className="w-6/12 h-auto md:h-[58px] border border-[#4f282b] text-[15px] md:text-[30px]">{post?.size}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                                <div className="border-b w-full border-[#4f282b]">
                                    <button
                                        className="flex justify-between w-full text-[35px] md:text-[70px] prociono-regular font-semibold transition-all"
                                        onClick={() => toggle(3)}
                                    >
                                        Product Certificate
                                        {activeIndex === 3 ? (
                                            <i className="bi bi-arrow-up-circle"></i>
                                        ) : (
                                            <i className="bi bi-arrow-down-circle"></i>
                                        )}
                                    </button>
                                    {activeIndex === 3 && (
                                        <div className="px-5 py-3 space-y-[25px]">
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Helps in Blurring
                                            </li>
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Minimizes The Pores
                                            </li>
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Suitable For all types of skin
                                            </li>
                                            <li>
                                                <i className="bi bi-dot me-2"></i>
                                                Flawless finish
                                            </li>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full pb-[100px] flex flex-wrap text-[#4f282b] text-center md:text-left">
                    <div className="w-full lato-thin">
                        <span>Occasion Sale!</span>
                    </div>
                    <div className="w-full text-[40px] md:text-[70px] prociono-regular font-semibold">
                        <span>Upcoming Products</span>
                    </div>
                    {Product.map((items) => (
                        <Link
                            onClick={scrollToTop}
                            to={`/shop/${items.id}`}
                            className="w-full md:w-3/12 overflow-hidden h-auto mb-[50px] group relative"
                            key={items.id}
                        >
                            <div className="w-full main-image md:w-11/12">
                                <img
                                    src={items.api_featured_image}
                                    alt={items.name}
                                    className="w-full h-full object-fit aspect-square"
                                />

                                <div className="absolute flex flex-col space-y-[30px] left-[-50px] top-[20px] group-hover:left-[20px] transition-all">
                                    <Link to="path"><i className="bi bi-heart text-[30px] font-semibold flex"></i></Link>
                                    <Link to="path"><i className="bi bi-recycle text-[30px] font-semibold flex"></i></Link>
                                    <Link to="path"><i className="bi bi-search text-[30px] font-semibold flex"></i></Link>
                                </div>
                            </div>
                            <div className="main_dis py-[25px] text-center px-[30px] space-y-[10px] text-[#4f282b] space-y-[20px]">
                                <div className="text-[25px] md:text-[40px] capitalize lato-thin leading-none">
                                    <span>{items?.name}</span>
                                </div>
                                <div className="leading-none capitalize lato-thin text-[15px] md:text-[40px]">
                                    <span>${items?.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
                <div className="w-full pb-[50px] flex flex-wrap text-[#4f282b] text-center md:text-left">
                    <div className="w-full product-details">
                        <div className="flex mt-6 flex-col md:flex-row md:space-x-[80px] action-buttons border-b border-[#4f282b] prociono-regular font-bold">
                            <button
                                onClick={toggleReviewForm}
                                className={`btn btn-primary active:border-b-2 ${activetab === 'review' ? 'border-b-[#4f282b]' : ''} text-[40px] py-3`}
                            >
                                Review
                            </button>
                            <button
                                onClick={toggleQuestionForm}
                                className={`btn btn-primary active:border-b-2 ${activetab === 'question' ? 'border-b-[#4f282b]' : ''} text-[40px] py-3`}
                            >
                                Question
                            </button>
                        </div>

                        {showReviewForm && <Reviews />}
                        {showQuestionForm && (
                            <div className="mt-6 question-form">
                                <h3>Ask a Question</h3>
                                <textarea
                                    placeholder="Ask something about this product"
                                    className="w-full p-4 border rounded"
                                    rows="4"
                                />
                                <button className="px-4 py-2 mt-2 rounded-full btn btn_primary">Submit Question</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-[#4f282b] pb-[75px] px-[30px] md:px-[0px]">
                    <div className="w-full text-[40px] md:text-[70px] prociono-regular font-semibold text-center md:text-left">
                        <span>Add a review</span>
                    </div>
                    <div className="w-full text-[20px] md:text-[40px] lato-thin font-semibold text-center md:text-left">
                        <span>Your email address will not be published. Required fields are marked *</span>
                    </div>
                    <div className="w-full mt-[20px] space-y-[30px] text-[20px] md:text-[40px] text-center md:text-left lato-thin font-semibold capitalize">
                        <span>Your rating</span>
                        <StarRating rating={rating} setRating={setRating} onchange={onchangereview} />
                        <textarea
                            value={review}
                            onChange={onchangereview}
                            name="review"
                            placeholder="Share your experience"
                            className="w-full placeholder:text-[#4f282b] p-4 mt-4 border-b border-b-[#4f282b] rounded"
                            rows="4"
                        />
                        <div className="flex flex-col justify-between w-full space-x-0 md:space-x-10 md:flex-row email_name">
                            <input type="text" name="name" placeholder="Name" onChange={onchangereview} className="w-full md:w-6/12 placeholder:text-[#4f282b] border-b border-b-[#4f282b] rounded" />
                            <input type="text" name="email" placeholder="Email" onChange={onchangereview} className="w-full md:w-6/12 placeholder:text-[#4f282b] border-b border-b-[#4f282b] rounded" />
                        </div>
                        <div className="">
                            <div className="w-full text-[15px] md:text-[30px] lato-thin font-semibold">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#4f262b] bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-[#4f262b]"
                                />
                                <span> Save my name, email, and website in this browser for the next time I comment.</span>
                            </div>
                        </div>
                        <button className="px-6 uppercase py-2 mt-2 rounded-full btn btn_primary text-[20px]" onClick={handleReviewSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Shopview;
