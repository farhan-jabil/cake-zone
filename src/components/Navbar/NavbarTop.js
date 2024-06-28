import React from "react";

const NavbarTop = () => {
  return (
    <>
      <div className="navbar-top hidden lg:flex justify-between bg-[#FAF3EB]">
        <div className="flex-1">
          <div className="flex justify-center items-center space-x-5 py-5">
            <div className="">
              <i className="fa-regular fa-envelope text-[#E88F2F] text-[2.5rem]"></i>
            </div>
            <div>
              <div className="font-[500] text-xl">EMAIL US</div>
              <div className="text-gray-600 font-sans">info@example.com</div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-3 bg-[#E88F2A]">
          <div className="flex h-full border-white border-2 text-[2.5rem] space-x-3 justify-center items-center">
            <div>
              <i className="fa-solid fa-cake-candles"></i>
            </div>
            <div className="font-bold text-white">
              CAKEZONE
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center items-center space-x-5 py-5">
            <div>
              <i className="fa-solid fa-phone-volume text-[#E88F2F] text-[2.5rem]"></i>
            </div>
            <div>
              <div className="font-[500] text-xl">CALL US</div>
              <div className="text-gray-600 font-sans">+012 345 6789</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
