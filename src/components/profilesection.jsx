import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feedback from './successmessage';

const Profilesection = () => {
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        username: '',
        emailid: '',
        address: '',
    });
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const token = localStorage.getItem('userToken');

    // Clears feedback messages
    const handleClear = () => {
        setFeedback({ message: "", type: "" });
    };

    // Fetch Profile Data
    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const res = await fetch("http://localhost:8000/api/v1/user/profile", {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch profile data');
                }

                const data = await res.json();
                setProfile(data.user);
                setProfileImage(data.user.profileImage);
            } catch (error) {
                setFeedback({ message: `Error: ${error.message}`, type: 'error' });
            }
        };

        fetchProfile();
    }, [token, navigate]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProfile((prev) => ({ ...prev, [id]: value }));
    };

    // Handle Profile Image Upload
    const handleImageChange = (e) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfile((prev) => ({ ...prev, profileImage: imageUrl }));
            setProfileImage(imageUrl);
        }
    };

    // Handle Profile Update
    const handleUpdate = async () => {
        if (!token) {
            console.log('No token available');
            return;
        }

        const updatedProfile = {
            firstname: profile.firstname,
            lastname: profile.lastname,
            username: profile.username,
            emailid: profile.emailid,
            address: profile.address,
            profileImage: profileImage || profile.profileImage,
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            setFeedback({ message: 'Profile updated successfully!', type: 'success' });
        } catch (error) {
            setFeedback({ message: `Error: ${error.message}`, type: 'error' });
        }
    };

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/');
    };

    return (
        <section className="py-[100px]">
            {feedback.message && <Feedback message={feedback.message} type={feedback.type} onClear={handleClear} />}

            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center w-full text-[#4f282b] p-5 md:p-0">

                    {/* Profile Image */}
                    <div className="flex flex-col items-center justify-center w-6/12 space-x-3 md:w-2/12 profileImage">
                        <img
                            src={profileImage || 'default-profile-image-url'}
                            alt="Profile"
                            className="object-cover w-32 rounded-full md:w-16 md:h-16 aspect-square"
                        />
                        <input type="file" className="w-full my-4" onChange={handleImageChange} />
                    </div>

                    {/* First Name */}
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="firstname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            value={profile.firstname}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="lastname">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            value={profile.lastname}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Username */}
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={profile.username}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="emailid">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="emailid"
                            value={profile.emailid}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Address */}
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={profile.address}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-around w-6/12 my-5">
                        <button className="px-6 py-2 uppercase rounded-full btn_primary" onClick={handleUpdate}>
                            Update
                        </button>
                        <button
                            className="px-6 py-2 text-white uppercase bg-red-500 border border-red-500 rounded-full hover:bg-transparent hover:text-red-500"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profilesection;

