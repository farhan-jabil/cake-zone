import React from "react";
import { Data } from "../../utils/Data";

const MasterPages = () => {
  return (
    <>
      <div className="master-pages py-12">
        <div className="container">
          <div className="section-title relative mb-[3rem]">
            <div className="text-center text-2xl lg:text-[2rem] font-bold text-[#E88F2F] pacifico-family">
              Team Members
            </div>
            <div className="text-[40px] lg:text-[3.5rem] font-bold text-center pb-4 uppercase">
              Our Master Chefs
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {Data.chefs.map((x, y) => (
              <div>
                <div>
                  <img src={x.img} alt="" />
                </div>
                <div className="p-[10px] w-full mb-12 mx-auto bg-[#2B2825]">
                  <div className="p-[10px] h-full border-white border-2 text-center">
                    <div className="text-[#E88F2A] text-2xl font-semibold mb-2 uppercase">
                      {x.name}
                    </div>
                    <div className="text-white font-sans">
                      {x.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterPages;
