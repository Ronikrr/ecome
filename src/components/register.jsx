import React, { useState } from "react";

function Modeal({ closeModalrg, openmodel }) {
    const switchtologinmodal = () => {
        closeModalrg();
        openmodel();
    };
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [emailid, setemailid] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpass, setconfirmpass] = useState("");
    const [error, seterror] = useState({});

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handlesubmit = () => {
        const newError = {};

        if (!firstname.trim()) newError.firstname = "first name is required";
        if (!username.trim()) newError.username = "username is required";
        if (!emailid.trim()) newError.emailid = "Email ID is required";
        else if (!isValidEmail(emailid)) newError.emailid = "Invalid email format";
        if (!password.trim()) newError.password = "please confim your password";
        else if (password !== confirmpass)
            newError.confirmpass = "Password do not match";

        if (Object.keys(newError).length > 0) {
            seterror(newError);
            return;
        }
        let currentId = parseInt(localStorage.getItem("currentId")) || 1;

        const formdata = {
            id: currentId,
            firstname,
            lastname,
            username,
            emailid,
            password,
        };
        const existingdata = JSON.parse(localStorage.getItem("userDataList")) || [];
        localStorage.setItem(
            "userdatalist",
            JSON.stringify([...existingdata, formdata])
        );
        localStorage.setItem("currentId", currentId + 1);
        seterror({});
        switchtologinmodal();
    };

    // return (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //         <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg md:w-80">
    //             <h2 className="mb-4 text-2xl font-blod">Login</h2>
    //             {error && (
    //                 <div className="text-red-500 bg-red-200 border border-red-600">

    //                     {error}
    //                 </div>
    //             )}
    //             <input
    //                 type="text"
    //                 placeholder="firstname *"
    //                 id="firstname"
    //                 value={firstname}
    //                 onChange={(e) => setfirstname(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
           
    //             <input
    //                 type="text"
    //                 placeholder="lastname"
    //                 id="lastname"
    //                 value={lastname}
    //                 onChange={(e) => setlastname(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
    //             <input
    //                 type="text"
    //                 placeholder="username *"
    //                 id="username"
    //                 value={username}
    //                 onChange={(e) => setusername(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
             
    //             <input
    //                 type="text"
    //                 placeholder="emailid *"
    //                 id="emailid"
    //                 onChange={(e)=>setemailid(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
            
    //             <input
    //                 type="password"
    //                 placeholder="password *"
    //                 id="password"
    //                 onChange={(e) => setpassword(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
            
    //             <input
    //                 type="password"
    //                 placeholder="confirm password *"
    //                 id="confirmpass"
    //                 onChange={(e) => setconfirmpass(e.target.value)}
    //                 className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
    //             />
          
    //             <div className="mb-4 register">
    //                 <span>
                        
    //                     already have an account?
    //                     <button
    //                         className="text-blue-500 hover:underline"
    //                         onClick={switchtologinmodal}
    //                     >
    //                         login
    //                     </button>
    //                 </span>
    //             </div>
    //             <div className="flex justify-center space-x-3 ">
    //                 <button className="px-4 py-2 uppercase rounded-full btn_primary" onClick={handlesubmit} >
    //                     submit
    //                 </button>
    //                 <button
    //                     className="w-full py-2 text-white capitalize bg-red-600 border border-red-600 rounded-full px- p- md:w-3/12 hover:bg-transparent hover:text-red-700"
    //                     onClick={closeModalrg}
    //                 >
    //                     close
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg md:w-80">
                <h2 className="mb-4 text-2xl font-bold">Login</h2>
                {Object.keys(error).length > 0 && (
                    <div className="p-2 mb-4 text-red-500 bg-red-200 border border-red-600 rounded">
                        {Object.values(error).map((errMsg, index) => (
                            <p key={index}>{errMsg}</p>
                        ))}
                    </div>
                )}
                <input
                    type="text"
                    placeholder="firstname *"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="username *"
                    id="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="emailid *"
                    id="emailid"
                    value={emailid}
                    onChange={(e) => setemailid(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="password"
                    placeholder="password *"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="password"
                    placeholder="confirm password *"
                    id="confirmpass"
                    value={confirmpass}
                    onChange={(e) => setconfirmpass(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <div className="mb-4 register">
                    <span>
                        already have an account?
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={switchtologinmodal}
                        >
                            login
                        </button>
                    </span>
                </div>
                <div className="flex justify-center space-x-3">
                    <button className="px-4 py-2 uppercase rounded-full btn_primary" onClick={handlesubmit}>
                        submit
                    </button>
                    <button
                        className="w-full py-2 text-white capitalize bg-red-600 border border-red-600 rounded-full md:w-3/12 hover:bg-transparent hover:text-red-700"
                        onClick={closeModalrg}
                    >
                        close
                    </button>
                </div>
            </div>
        </div>
    );


}

export default Modeal;
