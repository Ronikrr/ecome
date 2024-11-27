import React from "react";
import img1 from "../assets/img/about/Rectangle19.png";
// import { Link } from 'react-router-dom'
import img4 from "../assets/img/about/trans.png";
import { Link } from "react-router-dom";

const Aboutsection = () => {
  return (
    <section className="relative py-28 about section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full h-full md:flex-row">
          <div className="w-full h-full mx-2 md:w-6/12 images ">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
          <div className="w-full h-full p-3 mx-5 md:w-6/12 md:p-0 ">
            <span className="text-xl text-[#4f282b]  md:text-lg font-semibold">
              About Us
            </span>
            <div className="main_head">
              <span className="text-5xl text-[#4f282b] capitalize prociono-regular md:text-[75px] spacing font-semibold ">
                Innovative Skincare Products Exporter
              </span>
            </div>
            <div className=" pera">
              <p className="text-[#4f282b] text-[20px] ">
                Ridiculus mus mauris vitae ultricies. Vulputate eu scelerisque
                felis imperdiet. Mauris sit amet massa vitae tortor quis vel.The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to usingcontent here, making
                it look like readable English.
              </p>
            </div>

            <ul className="mt-10 ml-5">
              <li className='relative pl-7 before:content-["•"] before:text-5xl before:absolute before:left-0 before:text-[#4f282b]'>
                <p className="text-[22px] text-[#4f282b] list_set">
                  Vestibulum morbi blandit cursus risus
                </p>
              </li>
              <li className='relative pl-7 before:content-["•"] before:text-5xl before:absolute before:left-0 before:text-[#4f282b]'>
                <p className="text-[22px] text-[#4f282b] list_set">
                  Non consectetur a erat nam at lectus
                </p>
              </li>
              <li className='relative pl-7 before:content-["•"] before:text-5xl before:absolute before:left-0 before:text-[#4f282b]'>
                <p className="text-[22px] text-[#4f282b] list_set">
                  Libero id faucibus nisl tincidunt eget
                </p>
              </li>
              <li className='relative pl-7 before:content-["•"] before:text-5xl before:absolute before:left-0 before:text-[#4f282b]'>
                <p className="text-[22px] text-[#4f282b] list_set">
                  Auctor augue mauris augue neque
                </p>
              </li>
            </ul>

            <div className="mt-10 ml-10">
              <Link to="/about" className="px-6 py-4 text-xl uppercase btn_primary prociono-regular">
                about page
              </Link>
          </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[150px] xl:bottom-[276px] left-[-4%] w-32 h-16 xl:w-96 xl:h-80 z-[-1]">
        <img src={img4} alt="" className="w-full rotate-[-16.8deg] " />
      </div>
    </section>
  );
};

export default Aboutsection;
