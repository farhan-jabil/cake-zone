import React from "react";
import { Data } from "../../utils/Data";

const MasterPages = () => {
  return (
    <>
      <div className="master-chefs py-12">
        <div className="container">
          <div className="section-title relative mb-[3rem]">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              Team Members
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center pb-4 uppercase">
              Our Master Chefs
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {Data.chefs.map((x, y) => (
              <div key={y}>
                <div className="chef-image relative">
                  <div className="overflow-hidden">
                    <img src={x.img} className="w-full" alt="" />
                  </div>
                  <div className="chef-social-icons hidden space-x-3 justify-center absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="p-[10px] w-[50px] h-[50px] bg-[#E88F2A] cursor-pointer">
                      <div className="h-full flex border-white border-2 justify-center items-center">
                        <i className="fa-brands fa-twitter text-sm lg:text-base text-white"></i>
                      </div>
                    </div>
                    <div className="p-[10px] w-[50px] h-[50px] bg-[#E88F2A] cursor-pointer">
                      <div className="h-full flex border-white border-2 justify-center items-center">
                        <i className="fa-brands fa-facebook-f text-sm lg:text-base text-white"></i>
                      </div>
                    </div>
                    <div className="p-[10px] w-[50px] h-[50px] bg-[#E88F2A] cursor-pointer">
                      <div className="h-full flex border-white border-2 justify-center items-center">
                        <i className="fa-brands fa-linkedin-in text-sm lg:text-base text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-[10px] w-full mb-12 mx-auto bg-[#2B2825]">
                  <div className="p-[10px] h-full border-white border-2 text-center">
                    <div className="text-[#E88F2A] text-2xl font-semibold mb-2 uppercase">
                      {x.name}
                    </div>
                    <div className="text-white font-sans">{x.designation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="special-combo my-12 py-12">
          <div className="container py-12">
            <div className="section-title relative mb-6">
              <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
                Special Combo Pack
              </div>
              <div className="text-[40px] lg:text-[3.5rem] font-bold text-center text-white pb-4">
                SUPER CRISPY CAKES
              </div>
            </div>
            <div className="text-center lg:w-[55%] mx-auto">
              <div className="text-white font-sans">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </div>
              <div className="mt-10 lg:mt-6 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                <button>
                  <div className="p-[10px] bg-[#E88F2A]">
                    <div className="h-full px-7 lg:px-10 py-1 lg:py-2 border-white border-2 space-x-3 justify-center items-center">
                      <div className="font-bold text-white">Shop Now</div>
                    </div>
                  </div>
                </button>
                <button>
                  <div className="p-[10px] bg-[#2B2825]">
                    <div className="h-full px-7 lg:px-10 py-1 lg:py-2 border-white border-2 space-x-3 justify-center items-center">
                      <div className="font-bold text-white">Read More</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterPages;
