import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessNotification from './successmessage';

const Profilesection = () => {
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        username: '',
        emailid: '',
        password: '',
        address: '',
    });
    const [profileImage, setProfileImage] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target; 
        setProfile((prev) => ({
            ...prev,
            [id]: value, 
        }));
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfileImage(imageUrl);
        }
    };

    useEffect(() => {
        const storedUserProfile = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUserProfile) {
            setProfile(storedUserProfile);
            setProfileImage(storedUserProfile.profileImage || '');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        setProfile({
            firstname: '',
            lastname: '',
            username: '',
            emailid: '',
            password: '',
            address: '',
        });
        setShowNotification(false);
        navigate('/');
    };

    const handleUpdate = () => {
        const userDataList = JSON.parse(localStorage.getItem('userdatalist')) || [];
        const userId = profile.userId;
        const updatedUserList = userDataList.map(user =>
            user.userId === userId
                ? { ...user, ...profile, profileImage: profileImage || user.profileImage }
                : user
        );
        localStorage.setItem('userdatalist', JSON.stringify(updatedUserList));
        localStorage.setItem('currentUser', JSON.stringify(profile));
        setTimeout(() => {
            setShowNotification(true);
        }, 2000);
    };


    return (
        <section className="py-[100px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center w-full text-[#4f282b] p-5 md:p-0">
                    {showNotification && (
                        <SuccessNotification
                            message="Profile updated successfully!"
                            onClose={() => setShowNotification(false)}
                        />
                    )}
                    <div className="flex flex-col items-center justify-center w-6/12 space-x-3 md:w-2/12 profileImage">
                        <img
                            src={profileImage || 'default-profile-image-url'}
                            className="object-cover w-32 rounded-full md:w-16 md:h-16 aspect-square"
                            alt=""
                        />
                        <input type="file" className="w-full my-4" onChange={handleImageChange} />
                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="firstname">
                            First name:
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            value={profile.firstname}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="lastname">
                            Last name:
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            value={profile.lastname}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                    </div>
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
                    <div className="relative w-full my-4 md:w-4/12">
                        <label className="capitalize text-[15px] md:text-[20px]" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            id="password"
                            value={profile.password}
                            onChange={handleInputChange}
                            className="p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full"
                        />
                        <button className="absolute bottom-1 right-1" onClick={togglePasswordVisibility}>
                            <i className={`bi bi-eye${isPasswordVisible ? '-slash' : ''} text-xl`}></i>
                        </button>
                    </div>
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
