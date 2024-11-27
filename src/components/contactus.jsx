import React, { useEffect, useState } from "react";

const Contactus = () => {
  const [formsubmit, setformdata] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    phone: "",
    message: "",
  });
  const [userloginedemail, setuserloginedemail] = useState(false);

  useEffect(() => {
    const isloggedin = localStorage.getItem('currentUser');
    let userEmail = null;
    if (isloggedin) {
      const parsedUser = JSON.parse(isloggedin);
      userEmail = parsedUser.emailid 
    }
    

    console.log("User logged in:", isloggedin);  // Check if the user is logged in
    console.log("User email from localStorage:", userEmail);  // Check what email is in localStorage

    // If the user is logged in, set the email from localStorage
    if (isloggedin && userEmail) {
      setformdata((prev) => ({
        ...prev,
        emailid: userEmail,  // Set email from localStorage
      }));
      setuserloginedemail(true);  // Mark the user as logged in
    }
  }, []);  // Empty dependency array ensures this runs once after component mounts

  const handlechangecheckbox = (e) => {
    setuserloginedemail(e.target.checked);  // Use checked, not value
    if (e.target.checked) {
      const userEmail = localStorage.getItem('emailid');
      setformdata((prev) => ({
        ...prev,
        emailid: userEmail || '',  // Set the email to the value from localStorage
      }));
    } else {
      setformdata((prev) => ({
        ...prev,
        email: '',  // Clear email if checkbox is unchecked
      }));
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();  // Prevent form default submit behavior
    localStorage.setItem("contactformdata", JSON.stringify(formsubmit));  // Save form data to localStorage
    setformdata({
      firstname: "",
      lastname: "",
      emailid: userloginedemail ? localStorage.getItem('emailid') : '',  // If logged in, keep the email
      phone: "",
      message: "",
    });
  };

  return (
    <section className="relative contactusform py-[100px] text-[#4f282b]">
      <div className="container mx-auto">
        <div className="z-10 flex flex-col w-full space-y-5 text-sm text-center small_head">
          <div className="contact">
            <span className="text-[25px] uppercase font-semibold">Contact us</span>
          </div>
          <div className="main_head">
            <span className="text-5xl capitalize prociono-regular leading-none font-semibold md:text-[60px]">Send Us Message</span>
          </div>
          <span className="text-xl w-full lato-thin font-normal md:w-6/12 mx-auto font-semibold md:text-[25px] leading-none">
            Nulla malesuada pellentesque venenatis. Donec et <br /> pellentesque risus. Sed porta auctor vestibulum pharetra.
          </span>
        </div>

        <form onSubmit={handlesubmit} className="bg-[#FCEADE] py-[110px] px-[51px] mt-[50px] rounded-[50px] space-y-[50px] w-full md:w-[1296px] mx-auto">
          <div className="flex justify-between w-full form-group flex-col md:flex-row space-x-0 md:space-x-[60px] space-y-5 md:space-y-0">
            <div className="w-full md:w-6/12 firstname">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formsubmit.firstname}
                onChange={handlechange}
                className="w-full bg-[#fceade] border-b border-b-[#4f282b] placeholder:text-[#4f252b] placeholder:text-[30px] py-[10px] capitalize"
                placeholder="first name"
              />
            </div>
            <div className="w-full md:w-6/12 secondname">
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formsubmit.lastname}
                onChange={handlechange}
                className="w-full bg-[#fceade] border-b border-b-[#4f282b] placeholder:text-[#4f252b] placeholder:text-[30px] py-[10px] capitalize"
                placeholder="last name"
              />
            </div>
          </div>

          <div className="flex justify-between w-full form-group flex-col md:flex-row space-x-0 md:space-x-[60px]">
            <div className="w-full md:w-6/12 firstname">
              <input
                type="text"
                id="email"
                name="email"
                value={formsubmit.emailid}
                onChange={handlechange}
                className="w-full bg-[#fceade] border-b border-b-[#4f282b] placeholder:text-[#4f252b] placeholder:text-[30px] py-[10px] capitalize"
                placeholder="Email"
              />
              <div className="flex items-center my-4 space-x-2">
                <input
                  type="checkbox"
                  checked={userloginedemail}
                  onChange={handlechangecheckbox}
                  id="userloginedemail"
                />
                <label htmlFor="userloginedemail" className="text-[#4f282b] text-[20px]">
                  Use logged-in email
                </label>
              </div>
            </div>

            <div className="w-full md:w-6/12 secondname">
              <input
                type="text"
                className="w-full bg-[#fceade] border-b border-b-[#4f282b] placeholder:text-[#4f252b] placeholder:text-[30px] py-[10px] capitalize"
                placeholder="phone no"
              />
            </div>
          </div>

          <div className="flex justify-between w-full form-group">
            <div className="w-full firstname">
              <textarea
                name="message"
                value={formsubmit.message}
                onChange={handlechange}
                className="w-full bg-[#fceade] border-b border-b-[#4f282b] placeholder:text-[#4f252b] placeholder:text-[30px] py-[10px] capitalize"
                placeholder="your message"
              />
            </div>
          </div>

          <div className="flex justify-between w-full form-group">
            <div className="w-full firstname">
              <input
                type="submit"
                className="w-full bg-[#fceade] border-2 border-[#4f282b] py-[10px] capitalize rounded-full font-semibold text-[25px] hover:bg-[#4f282b] hover:text-[#fceade] cursor-pointer"
                value="send message"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
