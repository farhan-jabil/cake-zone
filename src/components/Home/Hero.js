import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero py-12 bg-cover">
        <div className="container py-12">
          <div className="pacifico-family text-[#E88F2F] font-bold text-[2.5rem] mb-4">
            Super Crispy
          </div>
          <div className="text-white font-bold text-[5rem] mb-4">CAKEZONE</div>
          <div className="text-white font-bold text-[2.5rem] mb-5">
            THE BEST CAKE IN LONDON
          </div>
          <div className="flex mt-12">
            <button className="mr-[3rem]">
              <div className="p-[10px] bg-[#E88F2A]">
                <div className="h-full px-10 py-2 border-white border-2 space-x-3 justify-center items-center">
                  <div className="font-bold text-white">Read More</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
