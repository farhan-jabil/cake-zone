import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero mb-[3rem] py-12 !bg-cover">
        <div className="container py-12">
          <div className="pacifico-family text-[#E88F2F] text-center lg:text-left font-bold text-3xl lg:text-[2.5rem] mb-6">
            Super Crispy
          </div>
          <div className="text-white font-bold text-5xl text-center lg:text-left lg:text-[5rem] mb-8">CAKEZONE</div>
          <div className="text-white font-bold text-center lg:text-left text-3xl lg:text-[2.5rem] mb-[8px]">
            THE BEST CAKE IN LONDON
          </div>
          <div className="flex pt-12 items-center justify-center lg:justify-start">
            <button className="mr-[3rem]">
              <div className="p-[10px] bg-[#E88F2A]">
                <div className="h-full px-7 lg:px-10 py-1 lg:py-2 border-white border-2 space-x-3 justify-center items-center">
                  <div className="font-bold text-white">Read More</div>
                </div>
              </div>
            </button>
            <button className="btn-play relative flex items-center justify-center mr-[1.5rem] bg-white h-[16px] w-[16px] p-[32px] rounded-[100%]">
              <i className="fa-solid fa-play text-[22px] z-10 text-[#E88F2A]"></i>
            </button>
            <div className="hidden md:block text-white text-[1.25rem] font-bold">
              Play Video
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
