import React from "react";
import Vector from "../assets/img/Vector.png";

const Join = () => {
  return (
    <div className="relative ssm:px-6 ssm:py-20 md:px-20 md:py-10">
      <img className="group-1 md:block ssm:hidden" src={Vector} alt="" />
      <div className="lg:flex px-11 bg-[#3037F7] rounded-3xl">
        <div className="grid gap-y-4 text-white ssm:py-16 lg:py-28 lg:w-[900px]">
          <h1 className="uppercase clash-display-semibold ssm:text-center lg:text-start ssm:text-3xl sm:text-5xl md:text-6xl ssm:leading-normal md:leading-normal">
            What are you waiting for, join now!!!
          </h1>
          <span className="general-sans-light ssm:text-center lg:text-start text-lg">
            And create the future of your dreams
          </span>
        </div>
        <div className="group-2 grid grid-cols-1 ssm:gap-y-3 md:gap-y-5 lg:my-28 lg:gap-y-5 lg:absolute lg:right-[118px] lg:top-[-99px] items-center justify-center p-[18px] bg-white border-[1px] border-[#ACACAC] rounded-3xl">
          <div className="ssm:col-span-4">
            <label className="block general-sans-medium text-xl leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#EAEAEA] focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-700 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block general-sans-light text-base ssm:w-full lg:w-[364px] h-[46px] rounded-lg border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EAEAEA] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Name"
                ></input>
              </div>
            </div>
          </div>
          <div className="ssm:col-span-4">
            <label className="block general-sans-medium text-xl leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#EAEAEA] focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-700 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block general-sans-light text-base ssm:w-full lg:w-[364px] h-[46px] rounded-lg border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EAEAEA] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Email Address"
                ></input>
              </div>
            </div>
          </div>
          <div className="ssm:col-span-4">
            <label className="block general-sans-medium text-xl leading-6 text-gray-900">
              Phone Number
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#EAEAEA] focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-700 sm:max-w-md">
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  className="block general-sans-light text-base ssm:w-full lg:w-[364px] h-[46px] rounded-lg border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#EAEAEA] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Phone Number"
                ></input>
              </div>
            </div>
          </div>
          <div className="ssm:col-span-4">
            <label className="block general-sans-medium text-xl leading-6 text-gray-900">
              What Do You Do
            </label>
            <div className="mt-2">
              <select
                id="profession"
                name="country"
                className="block general-sans-light ssm:w-full lg:w-[364px] h-[46px] text-base rounded-lg border-0 py-1.5 px-2 text-gray-400 shadow-sm ring-1 ring-inset ring-[#EAEAEA] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Select a profession</option>
                <option>UI/UX Designer</option>
                <option>Web Designer</option>
              </select>
            </div>
          </div>
          <button className="flex items-center justify-center mt-4 col-span-4 w-full text-white uppercase px-6 py-[18px] bg-[#3037F7] rounded-[18px]">
            join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
