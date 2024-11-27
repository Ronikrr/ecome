import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Modeal({ closeModal, openmodelrg }) {
    const [emailid, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const navigate = useNavigate()
    const switchtoregister = () => {
        closeModal();
        openmodelrg();
    }
    const isValidEmail = (email) => {
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const generateToken = () => {
        return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    };
    const handleLogin = () => {
        seterror('')


        if (!emailid.trim() || !password.trim) {
            seterror('Email and password is reqired')
            return
        }
        if (!isValidEmail(emailid)) {
            seterror('Invaild email format')
        }
        const storedata = JSON.parse(localStorage.getItem('userdatalist')) || [];
        const user = storedata.find(user => user.emailid === emailid)

        if (!user) {
            seterror('user not found')
        } else if (user.password !== password) {
            seterror('Incorrect  password')
        } else {
            const token = generateToken();
            localStorage.setItem('accessToken', token);
            localStorage.setItem('currentUser', JSON.stringify({ ...user, token }));
            seterror('login successful')
            closeModal()
            setTimeout(() => {
                navigate('/profile')
            }, 2000)
        }
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' >
            <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg md:w-80">
                <h2 className="mb-4 text-2xl font-blod">Login</h2>
                <input type="text"
                    placeholder='username'
                    id='emailid'
                    value={emailid}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                />
                <input type="text"
                    placeholder='password'
                    id='password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className='w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4'
                />
                {error && <div className="text-red-500 bg-red-200 border border-red-600">

                    {error}
                </div>}
                <div className="mb-4 register">
                    <span> if you not <button className='text-blue-500 hover:underline' onClick={switchtoregister} >register</button></span>
                </div>
                <div className="flex justify-center space-x-3 ">
                    <button className='px-4 py-2 uppercase rounded-full btn_primary' onClick={handleLogin} >submit</button>
                    <button className='w-full py-2 text-white capitalize bg-red-600 border border-red-600 rounded-full px- p- md:w-3/12 hover:bg-transparent hover:text-red-700' onClick={closeModal} >close</button>
                </div>
            </div>
        </div>
    )
}

export default Modeal