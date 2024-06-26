import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../utils/Data";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "custom-dots", // Custom class for the dots
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // Show and scroll 2 slides at this breakpoint
        },
      },
      {
        breakpoint: 767, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Show and scroll 1 slide at this breakpoint
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonial pb-12">
        <div>
          <div className="section-title relative mb-12">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              Testimonial
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center text-[#2B2825] pb-4">
              OUR CLIENTS SAY!!!
            </div>
          </div>
          <div className="container">
            <div>
              <Slider {...settings}>
                {Data.testimonial.map((x, y) => (
                  <div key={y} className="p-[10px] !w-[400px] mb-[30px] bg-[#2B2825]">
                    <div className="p-[10px] h-full border-white border-2">
                      <div className="flex">
                        <div>
                          <img
                            className="w-[60px] h-[60px]"
                            src={x.img}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-[#E88F2A] text-2xl font-semibold uppercase">
                            {x.name}
                          </div>
                          <div className="text-white font-sans">
                            {x.profession}
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-sans mt-4 w-[90%]">{x.desc}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
