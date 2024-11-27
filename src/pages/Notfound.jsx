import React from 'react'
import Maintitle from '../components/maintitle'
import bgerror from '../assets/img/404/404-bg (1).png'
import { Link } from 'react-router-dom'
const Notfound = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    Maintitle("page not found")
  return (
      <section className='pagenotfouund' >
          <div className="relative bgimage ">
              <img src={bgerror} className='w-full h-full overflow-hidden aspect-video' alt="" />
              <div className="absolute top-0 w-full h-full left-0  overflow-hidden overlay bg-[rgb(107,92,76,0.7)] ">
                  <div className="container flex px-[15px] md:px-0 flex-col mt-[-100px] items-center  w-screen h-screen m-auto">
                      <div className="heading text-[300px] text-[#F9D2B3] prociono-regular " style={{fontWeight:700}} >
                          <span>404</span>
                      </div>
                      <div className="problem text-[50px] text-white my-[40px] ">
                          <span>Opps ! The Page Not Found.</span>
                      </div>
                      <div className="w-full text-center text-white lato-thin md:w-6/12 mb-[40px]">
                          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quaerat, eius architecto vero qui recusandae sapiente repellat numquam quasi, dolores quidem doloribus doloremque maxime ut vel, ab accusamus magnam exercitationem.</span>
                      </div>
                      <div className="">
                          <Link to={`/`} onClick={scrollToTop} className='border-2 rounded-full bg-transparent hover:bg-[#f9d2b3] hover:text-white border-[#f9d2b3] px-6 py-4 text-[#f9d2b3] text-[16px] uppercase' > back to home </Link>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Notfound