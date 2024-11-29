import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "./cartcontext"; // Ensure this is correctly imported
import { useNavigate, Link } from "react-router-dom";
import Loader from "../loader"; // Ensure this loader component is available

const Cartsection = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { cart, removeformcart, increaceQuntity, decreaseQuantity } = useContext(Cartcontext);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const storedUserProfile = JSON.parse(localStorage.getItem("currentUser"));
        if (!accessToken || !storedUserProfile) {
            navigate("/");
        }
        setUser(storedUserProfile);
        setLoading(false);
    }, [navigate]);

    useEffect(() => {
        const fetchProductData = async () => {
            if (!user) return;

            const userCart = user ? cart[user.id] || [] : [];
            if (!Array.isArray(cart[user.id])) {
                console.error(`Cart for user ${user.id} is not an array`);
                return;
            }
            console.log("User :", user);
            console.log("Cart:", cart);
            console.log("User  ID:", user?.id);
            console.log("User  cart items:", userCart);

            if (userCart.length === 0) {
                setProducts([]);
                return;
            }

            setLoading(true);
            const productPromises = userCart.map((item) => fetchProduct(item.id));

            try {
                const products = await Promise.all(productPromises);
                setProducts(products.filter((product) => product));
                setError(null);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Error fetching products: " + error.message);
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
            setError(null);
            return product || null;
        } catch (error) {
            console.error('Error fetching product:', error);
            setError("Error fetching product: " + error.message);
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
                            {error && (
                                <div className="p-2 mb-4 text-red-500 bg-red-200 border border-red-600 rounded">
                                    <p style={{ color: "red" }}>{error}</p>
                                </div>
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
                                                    total + item?.price * (cart[user.id]?.find((cartItem) => cartItem.id === item.id)?.quantity || 1),
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
