// import React, { useState } from "react";

// function Modeal({ closeModalrg, openmodel }) {
//     const switchtologinmodal = () => {
//         closeModalrg();
//         openmodel();
//     };

//     const [firstname, setfirstname] = useState("");
//     const [lastname, setlastname] = useState("");
//     const [username, setusername] = useState("");
//     const [emailid, setemailid] = useState("");
//     const [password, setpassword] = useState("");
//     const [confirmpass, setconfirmpass] = useState("");
//     const [error, seterror] = useState({}); // Stores error messages for specific fields

//     const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//     const handlesubmit = () => {
//         const newError = {};

//         if (!firstname.trim()) {
//             newError.firstname = "First name is required";
//         }
//         if (!username.trim()) {
//             newError.username = "Username is required";
//         }
//         if (!emailid.trim()) {
//             newError.emailid = "Email ID is required";
//         } else if (!isValidEmail(emailid)) {
//             newError.emailid = "Invalid email format";
//         }
//         if (!password.trim()) {
//             newError.password = "Password is required";
//         } else if (password !== confirmpass) {
//             newError.confirmpass = "Passwords do not match";
//         }

//         if (Object.keys(newError).length > 0) {
//             seterror(newError); // Update state with validation errors
//             return;
//         }

//         let currentId = parseInt(localStorage.getItem("currentId")) || 1;

//         const formdata = {
//             id: currentId,
//             firstname,
//             lastname,
//             username,
//             emailid,
//             password,
//         };

//         const existingdata = JSON.parse(localStorage.getItem("userdatalist")) || [];
//         localStorage.setItem(
//             "userdatalist",
//             JSON.stringify([...existingdata, formdata])
//         );
//         localStorage.setItem("currentId", currentId + 1);

//         seterror({}); // Clear errors after successful submission
//         switchtologinmodal();
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg md:w-80">
//                 <h2 className="mb-4 text-2xl font-bold">Register</h2>
//                 {Object.keys(error).length > 0 && (
//                     <div className="p-2 mb-4 text-red-500 bg-red-200 border border-red-600 rounded">
//                         {Object.values(error).map((err, index) => (
//                             <p key={index}>{err}</p>
//                         ))}
//                     </div>
//                 )}
//                 <input
//                     type="text"
//                     placeholder="First name *"
//                     value={firstname}
//                     onChange={(e) => setfirstname(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last name"
//                     value={lastname}
//                     onChange={(e) => setlastname(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username *"
//                     value={username}
//                     onChange={(e) => setusername(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Email ID *"
//                     value={emailid}
//                     onChange={(e) => setemailid(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password *"
//                     value={password}
//                     onChange={(e) => setpassword(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm Password *"
//                     value={confirmpass}
//                     onChange={(e) => setconfirmpass(e.target.value)}
//                     className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
//                 />
//                 <div className="mb-4 register">
//                     <span>
//                         Already have an account?{" "}
//                         <button
//                             className="text-blue-500 hover:underline"
//                             onClick={switchtologinmodal}
//                         >
//                             Login
//                         </button>
//                     </span>
//                 </div>
//                 <div className="flex justify-center space-x-3">
//                     <button
//                         className="px-4 py-2 uppercase rounded-full btn_primary"
//                         onClick={handlesubmit}
//                     >
//                         Submit
//                     </button>
//                     <button
//                         className="w-full py-2 text-white capitalize bg-red-600 border border-red-600 rounded-full md:w-3/12 hover:bg-transparent hover:text-red-700"
//                         onClick={closeModalrg}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Modeal;
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
    const [error, seterror] = useState([]); // Initialize as an array

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handlesubmit = () => {
        const newError = [];

        // Validation checks
        if (!firstname.trim()) {
            newError.push("First name is required");
        }
        if (!username.trim()) {
            newError.push("Username is required");
        }
        if (!emailid.trim()) {
            newError.push("Email ID is required");
        } else if (!isValidEmail(emailid)) {
            newError.push("Invalid email format");
        }
        if (!password.trim()) {
            newError.push("Password is required");
        } else if (password !== confirmpass) {
            newError.push("Passwords do not match");
        }

        if (newError.length > 0) {
            seterror(newError);  // Update errors in state
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

        const existingdata = JSON.parse(localStorage.getItem("userdatalist")) || [];
        localStorage.setItem(
            "userdatalist",
            JSON.stringify([...existingdata, formdata])
        );
        localStorage.setItem("currentId", currentId + 1);

        seterror([]); // Clear errors after successful submission
        switchtologinmodal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg md:w-80">
                <h2 className="mb-4 text-2xl font-bold">Register</h2>

                {/* Display error messages */}
                {error.length > 0 && (
                    <div className="p-2 mb-4 text-red-500 bg-red-200 border border-red-600 rounded">
                        {error.map((err, index) => (
                            <p key={index}>{err}</p>
                        ))}
                    </div>
                )}

                <input
                    type="text"
                    placeholder="First name *"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="Username *"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="Email ID *"
                    value={emailid}
                    onChange={(e) => setemailid(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="password"
                    placeholder="Password *"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />
                <input
                    type="password"
                    placeholder="Confirm Password *"
                    value={confirmpass}
                    onChange={(e) => setconfirmpass(e.target.value)}
                    className="w-full placeholder:capitalize border-b text-md md:text-xl border-[#4f282b] p-2 mb-4"
                />

                <div className="mb-4 register">
                    <span>
                        Already have an account?{" "}
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={switchtologinmodal}
                        >
                            Login
                        </button>
                    </span>
                </div>

                <div className="flex justify-center space-x-3">
                    <button
                        className="px-4 py-2 uppercase rounded-full btn_primary"
                        onClick={handlesubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="w-full py-2 text-white capitalize bg-red-600 border border-red-600 rounded-full md:w-3/12 hover:bg-transparent hover:text-red-700"
                        onClick={closeModalrg}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modeal;
