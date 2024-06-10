import React from "react";
import { images } from "../../utils/Images";

const About = () => {
  return (
    <>
      <div className="about pt-[3rem]">
        <div className="container">
          <div className="section-title relative mb-[3rem]">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              About Us
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center pb-4">
              WELCOME TO CAKEZONE
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 lg:px-5">
              <img src={images.about} alt="" />
            </div>
            <div className="lg:col-span-6 lg:px-5">
              <div className="font-semibold text-xl lg:text-2xl mb-6">
                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
                sed stet labore lorem sit clita duo
              </div>
              <div className="mb-12 text-[#656565] leading-6 font-sans text-lg lg:text-base">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                erat amet magna
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="p-[10px] w-[90px] h-[90px] mb-6 bg-[#E88F2A]">
                    <div className="h-full flex border-white border-2 justify-center items-center">
                      <i className="fa-solid fa-heart-pulse text-white text-4xl"></i>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold mb-[8px]">
                    100% HEALTHY
                  </div>
                  <div className="mb-12 text-[#656565] leading-6 font-sans text-lg lg:text-base">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </div>
                </div>
                <div>
                  <div className="p-[10px] w-[90px] h-[90px] mb-6 bg-[#E88F2A]">
                    <div className="h-full flex border-white border-2 justify-center items-center">
                      <i className="fa-solid fa-award text-white text-4xl"></i>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold mb-[8px]">
                    AWARD WINNING
                  </div>
                  <div className="mb-12 text-[#656565] leading-6 font-sans text-lg lg:text-base">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1"></div>
          </div>
        </div>
        <div className="count p-12">
          <div className="container">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
