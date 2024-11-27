import React from "react";

const Ordertrakingsection = () => {
  return (
    <section className="py-[50px]  md:py-[100px]">
      <div className="container mx-auto text-[#4f282b]">
        <div className="flex justify-center w-full">
          <div className="w-full  md:w-[1223px] shadow-xl px-[25px] md:px-[75px] text-center py-[50px]">
            <div className="head text-[15px] md:text-[25px] ">
              <span>TRACK YOUR SHIPMENT</span>
            </div>
            <div className="head text-[25px] prociono-regular md:text-[70px] ">
              <span>Need To See Your Shipment?</span>
            </div>
            <div className="w-full form-group mt-[50px] ">
              <label className="capitalize text-[15px] md:text-[35px] " htmlFor="orderid">
                order iD
              </label>
              <input
                type="text"
                placeholder="Enter shipment ID No"
                className="mt-[20px] p-[15px] text-center w-full border-b border-[#4f282b] text-[15px] md:text-[25px] placeholder:text-[15px] placeholder:md:text-[25px] placeholder:text-[#4f282b]"
              />
            </div>
            <div className="w-full form-group  mt-[50px] md:mt-[100px] ">
              <label className="capitalize text-[15px] md:text-[35px] " htmlFor="orderid">
                Billing Email 
              </label>
              <input
                type="text"
                placeholder="Email you used During Checkout."
                className="mt-[20px] p-[15px] text-center w-full border-b border-[#4f282b] ttext-[15px] md:text-[25px] placeholder:text-[15px] placeholder:md:text-[25px] placeholder:text-[#4f282b]"
              />
            </div>
            <div className="btn mt-[75px] md:mt-[120px]">
              <button className="px-10 text-[30px] uppercase lato-thin rounded-3xl py-2 btn_primary" >track</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordertrakingsection;
