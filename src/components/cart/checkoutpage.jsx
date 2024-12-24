// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Loader from "../loader";

// const CheckoutPage = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate()
//     const { search } = useLocation();
//     const queryParams = new URLSearchParams(search);
//     const idsParam = queryParams.get("ids");
//     const namesParam = queryParams.get("names");
//     const total = queryParams.get("total");
//     const ids = idsParam ? idsParam.split(",") : [];
//     const names = namesParam ? namesParam.split(",").map(decodeURIComponent) : [];
//     useEffect(() => {
//         const accessToken = localStorage.getItem("accessToken");
//         const storedUserProfile = JSON.parse(localStorage.getItem("currentUser"));
//         if (!accessToken || !storedUserProfile) {
//             navigate("/");
//         }
//         setUser(storedUserProfile);
//         setLoading(false);
//     }, [navigate]);

//     const generateAWB = () => {
//         const prefix = "AWB";
//         const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // e.g., 20241128
//         const randomNumber = Math.floor(Math.random() * 1000000); // Shorter random number
//         return `${datePrefix}${prefix}${randomNumber.toString().padStart(6, "0")}`;
//     };
//     const payment = {
//         userid: user.id,
//         awb: generateAWB(),
//         idsParam,
//         namesParam,
//         total,
//     }
//     const status = {
//         orderStatus: "complted"
//     }
//     const onsubmit = () => {

//         try {
//             // Saving payment data to local storage
//             localStorage.setItem('paymentdata', JSON.stringify(payment));

//             // Saving status to local storage
//             localStorage.setItem("status", JSON.stringify(status));

//             console.log("Payment and status saved successfully!");
//             setTimeout(() => {
//                 navigate('/')
//             }, 500);
//         } catch (error) {
//             console.error("Error saving to localStorage", error);
//         }
//     }
//     if (loading) return <Loader />;
//     return (
//         <div className="flex items-center justify-center w-screen h-screen ">
//             <div className="bg-gradient-to-r from-[#FCEADE] via-[#F2D4D9] to-[#FCEADE] h-[600px] p-8 rounded-xl w-4/12 mx-auto shadow-xl flex flex-col justify-center">
//                 <h1 className="text-[#4F282B] text-4xl font-bold text-center mb-8 transform hover:scale-105 transition-all duration-300">Checkout</h1>
//                 <ul className="space-y-6">
//                     {ids.map((id, index) => (
//                         <li key={id} className="flex justify-between items-center bg-[#D9D9D9] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <span className="text-[#4F282B] font-semibold text-lg">{names[index]}</span>
//                             <span className="text-[#000000] font-medium">ID: {id}</span>
//                         </li>
//                     ))}
//                 </ul>
//                 <h2 className="text-[#4F282B] text-3xl font-bold text-center mt-8 transition-all duration-300">
//                     Total: <span className="text-[#000000]">${total}</span>
//                 </h2>
//                 <button onClick={onsubmit} className="mt-8 text-center w-full py-3 bg-[#4F282B] text-white rounded-full text-xl font-semibold hover:bg-[#000000] transition-all duration-300">
//                     Confirm Order
//                 </button>
//             </div>
//         </div>

//     );
// };

// export default CheckoutPage;
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../loader";

const CheckoutPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const idsParam = queryParams.get("ids");
    const namesParam = queryParams.get("names");
    const total = queryParams.get("total");
    const ids = idsParam ? idsParam.split(",") : [];
    const names = namesParam ? namesParam.split(",").map(decodeURIComponent) : [];

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const storedUserProfile = JSON.parse(localStorage.getItem("currentUser"));
        if (!accessToken || !storedUserProfile) {
            navigate("/"); // Redirect if no access token or user profile
        } else {
            setUser(storedUserProfile); // Set the user data
            setLoading(false); // Finish loading once the data is set
        }
    }, [navigate]);

    const generateAWB = () => {
        const prefix = "AWB";
        const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // e.g., 20241128
        const randomNumber = Math.floor(Math.random() * 1000000); // Shorter random number
        return `${datePrefix}${prefix}${randomNumber.toString().padStart(6, "0")}`;
    };

    // Don't create `payment` object until `user` is loaded
    const payment = user ? {
        userid: user.id,
        awb: generateAWB(),
        idsParam,
        namesParam,
        total,
    } : null;

    const status = { orderStatus: "completed" };

    const onsubmit = () => {
        try {
            if (payment) {
                // Saving payment data to local storage
                localStorage.setItem('paymentdata', JSON.stringify(payment));

                // Saving status to local storage
                localStorage.setItem("status", JSON.stringify(status));

                console.log("Payment and status saved successfully!");
                setTimeout(() => {
                    navigate('/'); // Redirect after successful order submission
                }, 500);
            } else {
                console.log("User data is not available, cannot proceed.");
            }
        } catch (error) {
            console.error("Error saving to localStorage", error);
        }
    };

    if (loading) return <Loader />;

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
                <button onClick={onsubmit} className="mt-8 text-center w-full py-3 bg-[#4F282B] text-white rounded-full text-xl font-semibold hover:bg-[#000000] transition-all duration-300">
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;

