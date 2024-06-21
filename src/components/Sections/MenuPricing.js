import React, { useState } from "react";
import { images } from "../../utils/Images";
import { Data } from "../../utils/Data";

const MenuPricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("birthday");
  const [fade, setFade] = useState(false);

  const handleCategoryChange = (category) => {
    setFade(true); // Start the fade-out transition
    setTimeout(() => {
      setSelectedCategory(category);
      setFade(false); // Start the fade-in transition
    }, 300); // Duration should match the transition duration in CSS
  };

  return (
    <>
      <div className="menu-pricing pt-[3rem] mb-36">
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
              <div className="p-[10px] h-full text-white flex flex-col lg:flex-row border-white border-2 justify-center items-center">
                <div
                  className={`py-2 px-4 font-sans cursor-pointer ${
                    selectedCategory === "birthday" ? "bg-[#E88F2A]" : ""
                  }`}
                  onClick={() => handleCategoryChange("birthday")}
                >
                  BIRTHDAY
                </div>
                <div
                  className={`py-2 px-4 font-sans cursor-pointer ${
                    selectedCategory === "wedding" ? "bg-[#E88F2A]" : ""
                  }`}
                  onClick={() => handleCategoryChange("wedding")}
                >
                  WEDDING
                </div>
                <div
                  className={`py-2 px-4 font-sans cursor-pointer ${
                    selectedCategory === "custom" ? "bg-[#E88F2A]" : ""
                  }`}
                  onClick={() => handleCategoryChange("custom")}
                >
                  CUSTOM
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-4 transition-opacity duration-500 ease-in-out ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {Data.menu_pricing[selectedCategory].map((x, y) => (
                <div className="flex flex-col md:flex-row" key={y}>
                  <div className="">
                    <div className="">
                      <img src={x.image} className="w-full h-full" alt="" />
                    </div>
                    <div className="bg-[#2B2825] text-[#E88F2A] p-2 font-semibold text-2xl text-center">
                      ${x.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-[10px] bg-[#FAF3EB]">
                    <div className="p-[10px] h-full text-white border-white border-2">
                      <div className="uppercase font-medium text-xl text-[#2B2825] mb-2">
                        {x.type}
                      </div>
                      <div className="text-[#656565] font-sans">{x.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="menu-pricing-discounts relative px-12 mt-32">
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-3 bg-[#E88F2A] text-center">
              <div className="h-full border-white border-2 p-9 space-y-4 justify-center items-center">
                <div className="uppercase font-semibold text-2xl">
                  Birthday Cake
                </div>
                <div className="text-white font-sans">
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
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
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
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
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
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
      </div>
    </>
  );
};

export default MenuPricing;
