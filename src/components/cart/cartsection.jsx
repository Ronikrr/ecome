import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "./cartcontext"; // Ensure this is correctly imported
import { useNavigate, Link } from "react-router-dom";
import Loader from "../loader"; // Ensure this loader component is available
import FeedbackMessage from "../successmessage";

const Cartsection = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { cart, removeformcart, increaceQuntity, decreaseQuantity } = useContext(Cartcontext);

    const [feedback, setfeedback] = useState({ message: '', type: '' })

    const handleClear = () => {
        setfeedback({ message: '', type: '' })
    }


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

    useEffect(() => {
        const fetchProductData = async () => {
            if (!user) return;

            const userCart = user ? cart[user.id] || [] : [];
            if (!Array.isArray(cart[user.id])) {
                console.error(`Cart for user ${user.id} is not an array`);
                return;
            }

            if (userCart.length === 0) {
                setProducts([]);
                return;
            }

            setLoading(true);
            const productPromises = userCart.map((item) => fetchProduct(item.id));

            try {
                const products = await Promise.all(productPromises);
                setProducts(products.filter((product) => product));

            } catch (error) {
                setfeedback({
                    message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
                    type: 'error',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProductData();
    }, [user, cart]);

    const fetchProduct = async (id) => {
        try {
            const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
            if (!response.ok) throw new Error('Failed to fetch');
            const product = await response.json();
            console.log("Fetched product:", product);
            return product || null;
        } catch (error) {
            setfeedback({
                message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
                type: 'error',
            });
            return null;
        }
    };

    if (loading) return <Loader />;



    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div>
            <div className="py-[170px]">
                <div className="container mx-auto">
                    <div className="z-10 flex flex-col w-full space-y-10 text-sm text-left small_head">
                        <div className="main_head">
                            <span className="text-5xl text-[#4f282b] capitalize prociono-regular leading-none font-semibold md:text-[40px]">
                                my cart
                            </span>
                            {feedback.message && (
                                <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />
                            )}
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        {products.length === 0 ? (
                            <table className="w-full border border-[#4f282b] ">
                                <thead className="w-full">
                                    <tr className="bg-[#4f282b] w-full *:py-4 text-white capitalize  ">
                                        <th>id</th>
                                        <th>name</th>
                                        <th>unit</th>
                                        <th>image</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    <tr className="w-full *:py-4 capitalize text-[#4f282b] ">
                                        <th colSpan={5}> your cart is empty</th>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table className="w-full border border-[#4f282b] ">
                                <thead className="w-full">
                                    <tr className="bg-[#4f282b] w-full *:py-4 text-white capitalize  ">
                                        <th>id</th>
                                        <th>name</th>
                                        <th>unit</th>
                                        <th>image</th>
                                        <th>price</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {products.map((item) => (
                                        <tr
                                            className="w-full *:py-4 capitalize text-[#4f282b] "
                                            key={item.id}
                                        >
                                            <td className="text-center border border-[#4f282b]">{item.id + 1}</td>
                                            <td className="text-center border border-[#4f282b]">{item.name}</td>
                                            <td className="text-center border border-[#4f282b]">
                                                <div className="flex items-center justify-center text-center btnbox_product">
                                                    <button
                                                        type="button"
                                                        className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b] hover:bg-transparent bg-[#4f282b] text-white rounded-l-full p-1"
                                                        onClick={() => decreaseQuantity(user.id, item.id)}
                                                    >
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                    <input
                                                        className="px-6 bg-[#4f282b] py-3 text-center text-[#fff]"
                                                        value={
                                                            cart[user.id]?.find(
                                                                (itemInCart) => itemInCart.id === item.id
                                                            )?.quantity || 1
                                                        }
                                                        readOnly
                                                    />
                                                    <button
                                                        type="button"
                                                        className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b] hover:bg-transparent bg-[#4f282b] text-white rounded-r-full p-1"
                                                        onClick={() => increaceQuntity(user.id, item.id)}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-center border border-[#4f282b]">
                                                <Link to={`/shop/${item.id}`}>
                                                    <img
                                                        src={item.api_featured_image}
                                                        alt=""
                                                        className="w-32 h-32 m-0 md:me-5 object-fit aspect-square"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="text-center border border-[#4f282b]">
                                                ${item?.price} X {cart[user.id]?.find(
                                                    (itemInCart) => itemInCart.id === item.id
                                                )?.quantity || 1}
                                            </td>
                                            <td className="text-center border border-[#4f282b]">
                                                <button
                                                    className="text-[25px] border-2 border-[#4f282b] hover:text-[#4f282b] hover:bg-transparent bg-[#4f282b] text-white rounded-full p-2"
                                                    onClick={() => removeformcart(user.id, item?.id)}
                                                >
                                                    <i className="bi bi-bag-x"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        <div className="flex items-center justify-center w-full mt-10 text-center">
                            {products.length === 0 ? (
                                <div className="flex items-center justify-around w-6/12 w-full">
                                    <Link
                                        to={`/shop`}
                                        className="px-6 py-2 uppercase rounded-full btn_primary"
                                        onClick={scrollToTop}
                                    >
                                        Buy product now
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center justify-around w-6/12 w-full">
                                        Total Amount: ${products.reduce((total, item) => total + item?.price * (cart[user.id]?.find(cartItem => cartItem.id === item.id)?.quantity || 1), 0)}
                                        <Link
                                            to={`/checkout?ids=${products.map((item) => item.id).join(",")}&names=${products.map((item) => encodeURIComponent(item.name)).join(",")}&total=${products.reduce(
                                                (total, item) =>
                                                    total + item?.price * (cart[user?._id]?.find((cartItem) => cartItem.id === item.id)?.quantity || 1),
                                                0
                                            )}`}
                                            className="px-6 py-2 uppercase rounded-full btn_primary"
                                            onClick={scrollToTop}
                                        >
                                            Buy now
                                        </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartsection;
