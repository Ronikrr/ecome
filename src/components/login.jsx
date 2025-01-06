import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [ishowpss, setishowpss] = useState(false);
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!formdata.email || !formdata.password) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            setError('Both fields are required!');
            return;
        }

        try {
            const res = await fetch('http://localhost:8000/login', {
                method: 'POST',
                body: JSON.stringify(formdata),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if (res.ok) {

                localStorage.setItem('userToken', data.token);
                navigate('/');
            } else {
                setError(data.message || 'Login failed. Please try again.');
                setShowError(true);
                setTimeout(() => setShowError(false), 3000);
            }
        } catch (error) {
            console.error('Error during login:', error);
            // More descriptive error message
            setError('An error occurred while submitting the form. Please check your network connection or server status.', error);
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };
    return (
        <div className='flex items-center justify-center w-screen h-screen' >
            <div
                className={`fixed top-4 left-0 transform -translate-x-1/2 bg-red-500 text-white px-10 py-6 rounded shadow-lg transition-transform duration-500 ${showError ? "translate-x-0  opacity-100" : "-translate-x-[500px] opacity-0"
                    }`}
            >
                {error}
            </div>
            <div className="border rounded-sm border-[--border-color] bg-[#fceade] w-[600px] shadow-sm ">
                <div className="flex flex-wrap items-center w-full">

                    <div className="w-full ">
                        <div className="w-full p-4 sm:p-12 xl:p-17">
                            <span className="mb-1.5 block font-medium capitalize "> start for free </span>
                            <h2 className="text-2xl text-black mb-9 font-blod">Sign In to TailAdmin</h2>
                            <form onSubmit={onSubmit} >
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >email</label>
                                    <div className="relative">

                                        <input
                                            type={'email'}
                                            name={`email`}
                                            value={formdata.email}
                                            onChange={handleChange}
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            placeholder={'enter your email'}
                                        />
                                        <span className='absolute right-4 top-4' ><HiOutlineMail className='text-[22px] text-[var(--icon-color)] ' />  </span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >password</label>
                                    <div className="relative">

                                        <input
                                            type={`${ishowpss ? 'text' : 'password'}`}
                                            name={`password`}
                                            className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                                            value={formdata.password}
                                            onChange={handleChange}
                                            placeholder={'enter your password'}
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowpss((prev) => !prev)}  >
                                            {ishowpss ?
                                                (<ImEye className='text-[22px] text-[var(--icon-color)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[var(--icon-color)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full mb-5 text-center ">
                                    <button
                                        className='px-4 py-2 uppercase rounded-full btn_primary'
                                    >login </button>
                                </div>
                                <div className="mt-6 text-center">
                                    <p>Don’t have any account? <Link to='/regi' className='text-[var(--primary-color)]' >Sign Up</Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login