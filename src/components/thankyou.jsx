import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-[#000000cc] text-[#4f282b] ">
            <div className="w-[400px] h-[400px] bg-white  rounded-xl  flex items-center justify-center flex-col border-2 border-[#4f282b]">
                <h1 className="mb-4 text-5xl font-bold drop-shadow-md">Thank You!</h1>
                <p className="max-w-md mb-8 text-lg leading-relaxed ">
                    We appreciate you reaching out to us! Your message has been successfully submitted,
                    and we’ll get back to you shortly. Have a great day!
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 text-lg font-semibold transition duration-300 rounded-full shadow-lg hover:text-white btn_primary "
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
