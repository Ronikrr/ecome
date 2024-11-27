import React, { useEffect, useState } from 'react'
import SuccessNotification from './successmessage';
import { useNavigate } from 'react-router-dom';

const Profilesection = () => {
    const [profile, setprofile] = useState({
        firstname: '',
        lastname: '',
        username: '',
        emailid: '',
        password: '',
        address: '',
    })
    const [profileImage, setprofileImage] = useState(null);
    const [shownotification, setshownotification] = useState(false)
    const [isPasswordVisible , setpasswordvisible]=useState(false)
    const navigate = useNavigate();

    const togglepasswordvisible = () => {
        setpasswordvisible(!isPasswordVisible)
    }
    const handleinputchange = (e) => {
        const { id, value } = e.value;
        setprofile((prex) => ({
            ...prex,
            [id]: value,
        }))
    }
    useEffect(() => {
        const storeduserprofile = JSON.parse(localStorage.getItem('currentUser'));
        if (storeduserprofile) {
            setprofile(storeduserprofile);
            setprofileImage(storeduserprofile.profileImage || '');
        }
    }, [])

    const handleinagechange = (e) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setprofileImage(imageUrl); // Update state with the image URL

            const reader = new FileReader();
            reader.onload = () => {
                localStorage.setItem("profileImage", reader.result); // Store base64 image in local storage
            };
            reader.readAsDataURL(selectedFile);

            console.log("File selected:", selectedFile);
        } else {
            console.log("No file selected");
        }
    };
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        setprofile({
            firstname: '',
            lastname: '',
            username: '',
            emailid: '',
            password: '',
            address: '',
        });
        setshownotification(false);
        navigate('/')
    }

    const handleUpdate = () => {
        const updateprofile = {
            ...profile,
            profileImage: profileImage ? URL.createObjectURL(profileImage) : profile.profileImage,
        };
        localStorage.setItem('currentUser', JSON.stringify(updateprofile))
        setTimeout(() => {
            setshownotification(true)
        }, 2000);
    }
    return (
        <section className='py-[100px]' >
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center w-full text-[#4f282b] p-5 md:p-0">
                    {shownotification && (
                        <SuccessNotification message='profile updated successfully!'
                            onClose={() => setshownotification(false)} />
                    )}
                    <div className="flex flex-col items-center justify-center w-6/12 space-x-3 md:w-2/12 profileImage ">
                        <img src={profileImage || "default-profile-image-url"} className='object-cover w-32 rounded-full md:w-16 md:h-16 aspect-square' alt="" />
                        <input type="file" className='w-full my-4' onChange={handleinagechange} />
                    </div>
                    <div className="w-full my-4 md:w-4/12 "  >
                        <label className='capitalize text-[15px] md:text-[20px]' htmlFor="">first name:</label>
                        <input type="text" id='firstname' value={profile.firstname} onChange={handleinputchange} className='p-2 border-b text-[15px] md:text-[20px] border-[#4f282b] w-full' />
                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className='capitalize text-[15px] md:text-[20px]' htmlFor="">
                            Last name
                        </label>
                        <input type="text" id='Lastname' value={profile.lastname} onChange={handleinputchange} className=' text-[15px] md:text-[20px] p-2 border-b border-[#4f282b] w-full' />
                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className='capitalize text-[15px] md:text-[20px]' htmlFor="">
                            username
                        </label>
                        <input type="text" id='username' value={profile.username} onChange={handleinputchange} className=' text-[15px] md:text-[20px] p-2 border-b border-[#4f282b] w-full' />
                    </div>
                    <div className="w-full my-4 md:w-4/12">
                        <label className='capitalize text-[15px] md:text-[20px]' htmlFor="">
                            email
                        </label>
                        <input type="email" id='emailid' value={profile.emailid} onChange={handleinputchange} className=' text-[15px] md:text-[20px] p-2 border-b border-[#4f282b] w-full' />
                    </div>
                    <div className="relative w-full my-4 md:w-4/12 ">
                        <label className='capitalize text-[15px] md:text-[20px]' htmlFor="">
                            password
                        </label>
                        <input type={isPasswordVisible?'text':'password'} id='password' value={profile.password} onChange={handleinputchange} className=' text-[15px] md:text-[20px] p-2 border-b border-[#4f282b] w-full' />
                        <button className='absolute bottom-1 right-1' onClick={togglepasswordvisible} ><i class={`bi bi-eye${isPasswordVisible ?'-slash':''} text-xl`}></i></button>
                    </div>
                    <div className="flex items-center justify-around w-6/12 my-5 ">

                        <button className='px-6 py-2 uppercase rounded-full btn_primary' onClick={handleUpdate} >update</button>
                        <button className='px-6 py-2 text-white uppercase bg-red-500 border border-red-500 rounded-full hover:bg-transparent hover:text-red-500' onClick={handleLogout} >logout</button>
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default Profilesection
