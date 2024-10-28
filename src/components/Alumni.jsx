import React from "react";
import { testimonials } from "../constants";

const Alumni = () => {
  return (
    <div className="ssm:px-6 ssm:py-12 md:px-20 md:py-16">
      <div className="grid justify-items-center text-center">
        <h1 className="uppercase clash-display-semibold lg:w-[850px] ssm:text-3xl md:text-4xl lg:text-5xl">
          What our alumni say
        </h1>
      </div>
      <div className="grid ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-8 gap-y-10 py-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-7 p-6 md:w-fit ssm:w-[80%] border-[1px] border-[#B5B5B5] rounded-3xl"
          >
            <div className="flex gap-x-5 items-center">
              <img src={item.image} alt="" />
              <div className="grid uppercase">
                <h1 className="clash-display-medium text-2xl">{item.name}</h1>
                <span className="clash-display-medium text-base text-[#3037F7]">
                  {item.role}
                </span>
              </div>
            </div>
            <span className="clash-display-light text-xl">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
