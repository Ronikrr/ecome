import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";

const Register = () => {
    const [formdata, setformdata] = useState({});
    const [ishowpss, setishowpss] = useState(false);
    const [ishowrepss, setishowrepss] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();
    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const onsubmit = async (e) => {
        e.preventDefault();
        if (
            !formdata.name ||
            !formdata.email ||
            !formdata.password ||
            !formdata.confirmPassword
        ) {
            setErrorMessage("All fields are required!");
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            return;
        }

        if (formdata.password !== formdata.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            return;
        }

        try {
            const res = await fetch("http://localhost:8000/users", {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                setErrorMessage("An error occurred while submitting the form.", res.message);
                setShowError(true);
                setTimeout(() => setShowError(false), 3000);
            }
            else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setErrorMessage("An error occurred while submitting the form.");
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };

    // const registerUser = async (userData) => {
    //     // Add user to the database with 'is_approved' set to false
    //     await db.collection('users').add({
    //         ...userData,
    //         is_approved: false,
    //     });
    // };


    return (
        <div className='flex items-center justify-center w-screen h-screen' >
            <div
                className={`fixed top-4 left-0 transform -translate-x-1/2 bg-red-500 text-white px-10 py-6 rounded shadow-lg transition-transform duration-500 ${showError ? "translate-x-0  opacity-100" : "-translate-x-[500px] opacity-0"
                    }`}
            >
                {errorMessage}
            </div>

            <div className="border rounded-sm border-[--border-color] bg-[#fceade] w-[600px] shadow-sm ">
                <div className="flex flex-wrap items-center w-full">

                    <div className="w-full ">
                        <div className="w-full p-4 sm:p-12 xl:p-17">
                            <span className="mb-1.5 block font-medium capitalize "> </span>
                            <h2 className="text-2xl text-black mb-9 font-blod">Cosmatic</h2>
                            <form action="" onSubmit={onsubmit}>
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >name</label>
                                    <div className="relative">

                                        <input
                                            type={`text`}
                                            name={`name`}
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            onChange={handlechange}
                                            placeholder='enter your name'
                                        />
                                        <span className='absolute right-4 top-4' >
                                            <AiOutlineUser className='text-[22px] text-[var(--icon-color)] ' />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >email</label>
                                    <div className="relative">

                                        <input
                                            type={`email`}
                                            name={`email`}
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            onChange={handlechange}
                                            placeholder='enter your email'
                                        />
                                        <span className='absolute right-4 top-4' >
                                            <HiOutlineMail className='text-[22px] text-[var(--icon-color)] ' />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >password</label>
                                    <div className="relative">

                                        <input
                                            type={`${ishowpss ? 'text' : 'password'}`}
                                            name="password"
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            onChange={handlechange}
                                            placeholder='enter your password'
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowpss((prev) => !prev)}  >
                                            {ishowpss ?
                                                (<ImEye className='text-[22px] text-[var(--icon-color)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[var(--icon-color)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >re-type password</label>
                                    <div className="relative">

                                        <input
                                            type={`${ishowrepss ? 'text' : 'password'}`}
                                            name="confirmPassword"
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            onChange={handlechange}
                                            placeholder='enter your password'
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowrepss((prev) => !prev)}  >
                                            {ishowrepss ?
                                                (<ImEye className='text-[22px] text-[var(--icon-color)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[var(--icon-color)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full mb-5 text-center">
                                    <button
                                        className='px-4 py-2 uppercase rounded-full btn_primary'
                                    >submit </button>
                                </div>
                                <div className="mt-6 text-center">
                                    <p>Already have an account? <Link to='/login' className='text-[var(--primary-color)]' >Sign in</Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
