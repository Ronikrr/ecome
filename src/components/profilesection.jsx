import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feedback from './successmessage';

const Profilesection = () => {
    const [User, setUser] = useState({
        name: "",
        email: "",
        phoneNo: "",
        username: "",
        profileImage: "",
        address: {
            street: "",
            city: "",
            state: "",
            zip: "",
            country: ""
        }
    })
    const [profileImage, setprofileImage] = useState(null);
    const navigate = useNavigate();
    const [feedback, setfeedback] = useState({ message: '', type: '' })

    const handleClear = () => {
        setfeedback({ message: '', type: '' })
    }
    const logout = () => {
        localStorage.removeItem('cosmtictoken')
        navigate('/')
    }
    const handleChange = (e, field, isNested = false) => {
        const { name, value } = e.target;

        if (isNested) {
            setUser((prevUser) => ({
                ...prevUser,
                address: {
                    ...prevUser.address,
                    [field]: value
                }
            }));
        } else {
            setUser((prevUser) => ({
                ...prevUser,
                [name]: value
            }));
        }
    };
    const handlefilechange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
                alert("Only PNG, JPG, or GIF files are allowed.");
                return;
            }
            setprofileImage(file)
        }
        else {
            setfeedback({
                message: `No file selected`,
                type: 'error',
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('cosmtictoken');
        if (!token) {
            navigate('/');
            return;
        }
        try {
            const fromdata = new FormData()
            fromdata.append('name', User.name)
            fromdata.append('phoneNo', User.phoneNo)
            fromdata.append('email', User.email)
            fromdata.append('password', User.password)
            fromdata.append('username', User.username)
            fromdata.append('address', User.address)
            if (profileImage) {
                fromdata.append('profileImage', profileImage)
            }
            const res = await fetch("http://localhost:8000/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token} `
                },
                body: fromdata,
            })
            if (!res.ok) {
                setfeedback({
                    message: `Error updating profile:${res.statusText}`,
                    type: 'error',
                });
            }

            setfeedback({
                message: `Profile updated successfully!!`,
                type: 'success',
            });
        } catch (error) {
            setfeedback({
                message: `Error updating profile: ${error.response ? error.response.data : error.message}`,
                type: 'error',
            });
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const adminToken = localStorage.getItem('cosmtictoken');
            if (!adminToken) {
                navigate('/');
                return;
            }

            try {
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
            } catch (error) {
                setfeedback({
                    message: `Failed to add lead. Please try again.${error.response ? error.response.data : error.message}`,
                    type: 'error',
                });
            }
        };

        fetchData();
    }, [navigate]);


    console.log(User)
    return (
        <section className="py-[100px]">
            {feedback.message && (
                <Feedback message={feedback.message} type={feedback.type} onClear={handleClear} />
            )}
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full text-[#4f282b] p-5 md:p-0">

                    {/* Profile Image */}
                    <div className="flex flex-col items-center justify-center w-6/12 space-x-3 md:w-2/12 profileImage">
                        {
                            User.profileImage ? (
                                <img
                                    src={User?.profileImage}
                                    alt="Profile"
                                    className="object-cover w-32 rounded-full md:w-16 md:h-16 aspect-square"
                                />
                            ) : (
                                <img
                                    src={'https://www.t3bucket.com/f/0-user.svg'}
                                    alt="Profile"
                                    className="object-cover w-32 rounded-full md:w-16 md:h-16 aspect-square"
                                />
                            )
                        }

                        <input
                            type="file"
                            className="w-full my-4"
                            name='profileImage'
                            accept='image/*'
                            onChange={handlefilechange}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-5 lg:flex-row">

                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="firstname">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={User?.name}
                                onChange={handleChange}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>
                        {/* Username */}
                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="username">
                                phoneNo:
                            </label>
                            <input
                                type="text"
                                id="phoneNo"
                                name='phoneNo'
                                value={User?.phoneNo}
                                onChange={handleChange}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>
                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="username">
                                username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                name='username'
                                value={User?.username}
                                onChange={handleChange}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>
                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="emailid">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={User?.email}
                                onChange={handleChange}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>
                    </div>

                    <h3 className="mt-6 mb-2 text-lg font-semibold">Address</h3>
                    <div className="flex flex-col items-center gap-5 lg:flex-row">
                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="street">Street:</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={User?.address?.street}
                                onChange={(e) => handleChange(e, "street", true)}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>

                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={User?.address?.city}
                                onChange={(e) => handleChange(e, "city", true)}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>

                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="state">State:</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={User?.address?.state}
                                onChange={(e) => handleChange(e, "state", true)}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>

                        <div className="w-full my-4 md:w-4/12">
                            <label className="capitalize text-[15px] md:text-[20px]" htmlFor="zip">ZIP Code:</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={User?.address?.zip}
                                onChange={(e) => handleChange(e, "zip", true)}
                                className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                            />
                        </div>

                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={User?.address?.country}
                            onChange={(e) => handleChange(e, "country", true)}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-around w-6/12 my-5">
                        <button className="px-6 py-2 uppercase rounded-full btn_primary">
                            Update
                        </button>
                        <button
                            className="px-6 py-2 text-white uppercase bg-red-500 border border-red-500 rounded-full hover:bg-transparent hover:text-red-500"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Profilesection;

