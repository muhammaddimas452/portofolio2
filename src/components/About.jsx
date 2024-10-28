import React from "react";
import { about } from "../constants";

const About = () => {
  return (
    <div className="ssm:px-6 ssm:py-4 md:px-20 md:py-8">
      <div className="text-center">
        <h1 className="uppercase clash-display-semibold ssm:text-3xl md:text-5xl">
          Your Gateway to a <span className="text-[#3037F7]"> Brighter </span>
          Future in IT
        </h1>
        <div className="ssm:px-4 md:px-12 lg:px-32 mt-8">
          <span className="ssm:text-base md:text-lg clash-display-light">
            At <span className="clash-display-medium">Creatif Course</span>, we
            are dedicated to providing high-quality online IT education that is
            accessible to everyone. The bootcamps we provide include UI/UX
            Designer, DevOps Engineer, Full Stack Engineer, SQA Engineer
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 ssm:grid-cols-1 justify-items-center gap-x-5 gap-y-10 py-12">
        {about.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-7 p-4 md:w-fit ssm:w-[80%] border-[1px] border-[#B5B5B5] rounded-3xl"
          >
            <img className="" src={item.image} alt="" />
            <h1 className="clash-display-medium text-[32px]">{item.name}</h1>
            <span className="clash-display-light text-base">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
