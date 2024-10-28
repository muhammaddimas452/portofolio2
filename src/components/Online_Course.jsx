import React from "react";
import { courseList } from "../constants";

const Online_Course = () => {
  return (
    <div className="ssm:px-6 ssm:py-12 md:px-20 md:py-16">
      <div className="grid justify-items-center text-center">
        <h1 className="uppercase clash-display-semibold lg:w-[850px] ssm:text-3xl md:text-4xl lg:text-5xl">
          Elevate Your Skills with Our Comprehensive IT Courses
        </h1>
        <div className="ssm:grid sm:flex ssm:grid-cols-2 sm:flex-row gap-y-4 ssm:gap-x-2 md:gap-x-10 mt-9">
          <button className="uppercase clash-display-medium ssm:text-xs md:text-sm lg:text-base ssm:px-5 ssm:py-4 sm:px-6 sm:py-[18px] bg-[#DCE8FF] rounded-full">
            all course
          </button>
          <button className="uppercase clash-display-medium ssm:text-xs md:text-sm lg:text-base ssm:px-5 ssm:py-4 sm:px-6 sm:py-[18px] bg-[#DCE8FF] rounded-full">
            programmer
          </button>
          <button className="uppercase clash-display-medium ssm:text-xs md:text-sm lg:text-base ssm:px-5 ssm:py-4 sm:px-6 sm:py-[18px] bg-[#DCE8FF] rounded-full">
            ui/ux designer
          </button>
          <button className="uppercase clash-display-medium ssm:text-xs md:text-sm lg:text-base ssm:px-5 ssm:py-4 sm:px-6 sm:py-[18px] bg-[#DCE8FF] rounded-full">
            qa
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ssm:grid-cols-1 justify-items-center gap-x-5 gap-y-10 py-12">
        {courseList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-6 md:w-fit ssm:w-[80%]"
          >
            <img src={item.image} alt="" />
            <div>
              <h1 className="clash-display-medium ssm:text-[26px] sm:text-[32px]">
                {item.title}
              </h1>
              <span className="clash-display-medium text-base">
                by <span className="text-[#3037F7]">{item.text}</span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="clash-display-medium ssm:text-[26px] sm:text-[32px]">
                {item.cost}
              </h1>
              <button className="uppercase general-sans-medium ssm:text-sm sm:text-base text-white ssm:px-4 ssm:py-[14px] sm:px-6 sm:py-[18px] bg-[#3037F7] rounded-[18px]">
                enroll now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online_Course;
