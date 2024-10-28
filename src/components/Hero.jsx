import React from "react";
import HeroImg from "../assets/img/heroimg.png";

const Hero = () => {
  return (
    <div className="ssm:px-6 ssm:py-4 md:px-20 md:py-8">
      <div className="flex ssm:flex-col lg:flex-row ssm:justify-items-center lg:justify-between items-center">
        <div className="grid md:w-[600px] lg:w-[800px] gap-y-10 lg:gap-y-20">
          <div className="grid ssm:justify-items-center ssm:text-center lg:text-start lg:justify-items-start">
            <h1 className="uppercase clash-display-semibold ssm:text-3xl md:text-5xl md:leading-snug lg:text-[64px] lg:leading-snug">
              Master IT Skills with Our{" "}
              <span className="text-[#3037F7]"> Expert-Led </span> Online
              Courses
            </h1>
            <h2 className="general-sans-light ssm:text-base md:text-lg mt-3">
              Elevate Your Career with Comprehensive Training in the Latest
              Technologies
            </h2>
            <button className="flex items-center mt-6 text-white general-sans-medium uppercase ssm:text-[10px] sm:text-sm md:text-base ssm:px-4 ssm:py-3 sm:px-5 sm:py-4 md:px-6 md:py-[18px] bg-[#3037F7] rounded-[18px]">
              Start Learning Now
            </button>
          </div>
          <div>
            <p className="ssm:text-base md:text-lg clash-display-light ssm:text-center lg:text-start">
              “Great people are not formed from comfort, pleasure and ease. They
              are formed through tears and challenges.”
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="ssm:w-fit md:w-[640px] lg:w-[745px]"
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
