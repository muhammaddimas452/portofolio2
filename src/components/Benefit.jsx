import React from "react";
import BenefitBg from "../assets/img/BenefitBg.png";
import BenefitImg from "../assets/img/BenefitImg.png";
import { ListBenefit } from "../constants";

const Benefit = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat rounded-3xl"
      style={{
        backgroundImage: `url(${BenefitBg})`,
      }}
    >
      <div className="absolute inset-0 bg-[#3037F7] opacity-90 rounded-3xl"></div>
      <div className="relative flex ssm:flex-col lg:flex-row ssm:px-6 ssm:py-20 md:px-20 md:py-20 ssm:justify-items-center lg:justify-between items-center">
        <div className="ssm:hidden lg:block">
          <img src={BenefitImg} alt="" />
        </div>
        <div className="grid gap-y-12 text-white lg:w-[784px]">
          <h1 className="uppercase ssm:text-center lg:text-start clash-display-semibold ssm:text-4xl sm:text-5xl">
            Why choose us?
          </h1>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            {ListBenefit.map((item, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <img src={item.image} alt="" />
                <div>
                  <h1 className="clash-display-semibold ssm:text-lg sm:text-2xl">
                    {item.name}
                  </h1>
                  <span className="font-urbanist font-medium ssm:text-sm sm:text-base mt-2">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
