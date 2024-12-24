import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const CheckoutPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    // Get the query parameters, with fallback values in case they are missing
    const idsParam = queryParams.get("ids");
    const namesParam = queryParams.get("names");
    const total = queryParams.get("total");

    // Split ids and names only if they exist
    const ids = idsParam ? idsParam.split(",") : [];
    const names = namesParam ? namesParam.split(",").map(decodeURIComponent) : [];

    useEffect(() => {
        const generateAWB = () => {
            const prefix = "AWB";
            const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // e.g., 20241128
            const randomNumber = Math.floor(Math.random() * 1000000); // Shorter random number
            return `${datePrefix}${prefix}${randomNumber.toString().padStart(6, "0")}`;
        };
        const awb = generateAWB();
        console.log(awb);
    }, []);

    return (
        <div className="flex items-center justify-center w-screen h-screen ">
            <div className="bg-gradient-to-r from-[#FCEADE] via-[#F2D4D9] to-[#FCEADE] h-[600px] p-8 rounded-xl w-4/12 mx-auto shadow-xl flex flex-col justify-center">
                <h1 className="text-[#4F282B] text-4xl font-bold text-center mb-8 transform hover:scale-105 transition-all duration-300">Checkout</h1>
                <ul className="space-y-6">
                    {ids.map((id, index) => (
                        <li key={id} className="flex justify-between items-center bg-[#D9D9D9] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <span className="text-[#4F282B] font-semibold text-lg">{names[index]}</span>
                            <span className="text-[#000000] font-medium">ID: {id}</span>
                        </li>
                    ))}
                </ul>
                <h2 className="text-[#4F282B] text-3xl font-bold text-center mt-8 transition-all duration-300">
                    Total: <span className="text-[#000000]">${total}</span>
                </h2>
                <button className="mt-8 text-center w-full py-3 bg-[#4F282B] text-white rounded-full text-xl font-semibold hover:bg-[#000000] transition-all duration-300">
                    Confirm Order
                </button>
            </div>
        </div>

    );
};

export default CheckoutPage;
