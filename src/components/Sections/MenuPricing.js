import React from "react";
import { images } from "../../utils/Images";

const MenuPricing = () => {
  return (
    <>
      <div className="menu-pricing pt-[3rem]">
        <div className="container">
          <div className="section-title relative mb-[3rem]">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              Menu & Pricing
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center pb-4">
              EXPLORE OUR CAKES
            </div>
          </div>
          <div className="menu-pricing">
            <div className="p-[10px] w-fit mb-12 mx-auto bg-[#2B2825]">
              <div className="p-[10px] h-full text-white flex border-white border-2 justify-center items-center">
                <div className="py-2 px-4 bg-[#E88F2A] font-sans cursor-pointer">
                  BIRTHDAY
                </div>
                <div className="py-2 px-4 font-sans cursor-pointer">
                  WEDDING
                </div>
                <div className="py-2 px-4 font-sans cursor-pointer">CUSTOM</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex">
                <div className="">
                  <div>
                    <img src={images.cakeBirthday} alt="" />
                  </div>
                  <div className="bg-[#2B2825] text-[#E88F2A] p-2 font-semibold text-2xl text-center">
                    $99.00
                  </div>
                </div>
                <div className="p-[10px] bg-[#FAF3EB]">
                  <div className="p-[10px] h-full text-white border-white border-2">
                    <div className="uppercase font-medium text-xl text-[#2B2825] mb-2">
                      Birthday Cake
                    </div>
                    <div className="text-[#656565] font-sans">
                      Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                      diam stet sit justo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPricing;
