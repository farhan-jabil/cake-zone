import React from "react";

const Service = () => {
  return (
    <>
      <div className="service relative px-12 mt-24 mb-36">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="p-3 bg-[#E88F2A] text-center">
            <div className="h-full border-white border-2 p-9 space-y-4 justify-center items-center">
              <div className="uppercase font-semibold text-2xl">
                Birthday Cake
              </div>
              <div className="text-white font-sans">
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="font-sans">Read More</div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#E88F2A] text-center">
            <div className="h-full border-white border-2 p-9 space-y-4 justify-center items-center">
              <div className="uppercase font-semibold text-2xl">
                Wedding Cake
              </div>
              <div className="text-white font-sans">
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="font-sans">Read More</div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#E88F2A] text-center">
            <div className="h-full border-white border-2 p-9 space-y-4 justify-center items-center">
              <div className="uppercase font-semibold text-2xl">
                Custom Cake
              </div>
              <div className="text-white font-sans">
                Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                sit justo amet tempor amet kasd lorem dolor ipsum
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="font-sans">Read More</div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="uppercase text-white font-bold text-2xl lg:text-[2.5rem]">
            30% Discount For This Summer
          </div>
          <div className="mt-6">
            <button>
              <div className="p-[10px] bg-[#E88F2A]">
                <div className="h-full px-7 lg:px-10 py-1 lg:py-2 border-white border-2 space-x-3 justify-center items-center">
                  <div className="font-bold text-white">Order Now</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
