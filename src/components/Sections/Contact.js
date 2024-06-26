import React from "react";
import { Data } from "../../utils/Data";

const Contact = () => {
  return (
    <>
      <div className="contact mt-[90px]">
        <div className="container grid grid-cols-3 gap-6">
          <div className="p-3 bg-[#E88F2A]">
            <div className="h-full p-3 flex flex-col items-center justify-center border-white border-2">
              <div className="flex text-[2.5rem]">
                <div>
                  <i class="fa-solid fa-cake-candles"></i>
                </div>
                <div className="font-bold text-white">CAKEZONE</div>
              </div>
              <div className="text-white text-center">
                Lorem diam sit erat dolor elitr et, diam lorem justo labore amet
                clita labore stet eos magna sit. Elitr dolor eirmod duo tempor
                lorem, elitr clita ipsum sea. Nonumy rebum et takimata ea
                takimata amet gubergren, erat rebum magna lorem stet eos. Diam
                amet et kasd eos duo dolore no.
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div className="text-[#E88F2A] mb-6 font-semibold text-2xl">
                GET IN TOUCH
              </div>
              <div className="font-sans">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
