import React from "react";
import { Data } from "../../utils/Data";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <>
      <div className="contact mt-[90px]">
        <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="p-3 bg-[#E88F2A] h-full">
            <div className="h-full p-3 flex flex-col items-center justify-center border-white border-2">
              <div className="flex text-[2.5rem]">
                <div>
                  <i class="fa-solid fa-cake-candles"></i>
                </div>
                <div className="font-bold text-white">CAKEZONE</div>
              </div>
              <div className="text-white text-center font-sans my-4">
                Lorem diam sit erat dolor elitr et, diam lorem justo labore amet
                clita labore stet eos magna sit. Elitr dolor eirmod duo tempor
                lorem, elitr clita ipsum sea. Nonumy rebum et takimata ea
                takimata amet gubergren, erat rebum magna lorem stet eos. Diam
                amet et kasd eos duo dolore no.
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="py-12">
              <div className="text-[#E88F2A] mb-6 font-semibold text-2xl">
                GET IN TOUCH
              </div>
              <div className="font-sans space-y-[.5rem]">
                <div className="flex space-x-2">
                  <div>
                    <i class="fa-solid fa-location-dot text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">{Data.contact.location}</div>
                </div>
                <div className="flex space-x-2">
                  <div>
                    <i class="fa-solid fa-envelope text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">{Data.contact.mail}</div>
                </div>
                <div className="flex space-x-2">
                  <div>
                    <i class="fa-solid fa-phone text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">{Data.contact.phone}</div>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
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
            <div className="py-12">
              <div className="text-[#E88F2A] mb-6 font-semibold text-2xl">
                QUICK LINKS
              </div>
              <div className="font-sans space-y-[.5rem]">
                <Link
                  to="hero"
                  smooth={true}
                  className="flex space-x-2 cursor-pointer"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">Home</div>
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  className="flex space-x-2 cursor-pointer"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">About Us</div>
                </Link>
                <Link
                  to="menu-pricing"
                  smooth={true}
                  className="flex space-x-2 cursor-pointer"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">Our Services</div>
                </Link>
                <Link
                  to="master-chefs"
                  smooth={true}
                  className="flex space-x-2 cursor-pointer"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">Meet The Team</div>
                </Link>
                <Link
                  to="testimonial"
                  smooth={true}
                  className="flex space-x-2 cursor-pointer"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E88F2A]"></i>
                  </div>
                  <div className="text-white">Reviews</div>
                </Link>
              </div>
            </div>
            <div className="py-12">
              <div className="text-[#E88F2A] mb-6 font-semibold text-2xl">
                NEWSLETTER
              </div>
              <div className="font-sans text-white mb-4">
                Amet justo diam dolor rebum lorem sit stet sea justo kasd
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none rounded-tl-lg rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 h-full w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="text-white bg-[#E88F2A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-tr-lg rounded-br-lg h-full w-full text-sm sm:w-auto px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
