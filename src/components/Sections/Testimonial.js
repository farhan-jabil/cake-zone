import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const responsiveSettings = [
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
  ];

  return (
    <>
      <div className="testimonial">
        <div>
          <div className="section-title relative mb-6">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              Testimonial
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center text-[#2B2825] pb-4">
              OUR CLIENTS SAY!!!
            </div>
          </div>
          <div className="container">
            <div>
              <Slider {...settings} responsive={responsiveSettings}>
                <div className="testimonial-elements card">
                  <div className="text-1">
                    <span className="fw-bold fst-italic fs-1">"</span> It's
                    great to be able to work out from home and be helped by the
                    gymbaran. My day feels fresher when I regularly participate
                    in this fun sport. Good luck to the coaches.
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="testimonial-info-dp">
                    </div>
                    <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                      <div className="testimonial-info-name text-3">
                        Suketi Mantapo
                      </div>
                      <div className="testimonial-info-desc text-1">
                        Designer Graphic
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-elements card">
                  <div className="text-1">
                    <span className="fw-bold fst-italic fs-1">"</span> My
                    attitude toward exercise completely transformed after
                    discovering Gymbaran. What used to be a dull routine is now
                    a vibrant and invigorating part of my life.
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="testimonial-info-dp">
                    </div>
                    <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                      <div className="testimonial-info-name text-3">
                        Max Wayne
                      </div>
                      <div className="testimonial-info-desc text-1">
                        Designer Graphic
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-elements card">
                  <div className="text-1">
                    <span className="fw-bold fst-italic fs-1">"</span> Exercise
                    used to be a boring thing for me, but after following the
                    gymbaran I became fond of sports and sports became my new
                    hobby. I participate in sports 5 times a week.
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="testimonial-info-dp">
                    </div>
                    <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                      <div className="testimonial-info-name text-3">
                        Ada Apose
                      </div>
                      <div className="testimonial-info-desc text-1">
                        Designer Graphic
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
