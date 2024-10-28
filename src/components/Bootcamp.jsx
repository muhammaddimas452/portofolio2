import React from "react";
import BootcampI from "../assets/img/BootcampI.png";

const Bootcamp = () => {
  return (
    <div>
      <div className="flex ssm:flex-col lg:flex-row ssm:px-6 ssm:py-20 md:px-20 md:py-0 ssm:justify-items-center lg:justify-between items-center">
        <div className="ssm:hidden lg:block">
          <img src={BootcampI} alt="" />
        </div>
        <div className="grid gap-y-12 lg:w-[681px]">
          <h1 className="uppercase ssm:text-center lg:text-start clash-display-semibold ssm:text-4xl sm:text-5xl">
            We help you develop until you <span> get a job</span>
          </h1>
          <div className="grid gap-y-8">
            <div className="flex gap-x-5">
              <div className="flex general-sans-medium items-center justify-center text-white text-2xl w-12 h-12 px-5 py-5 bg-[#5366FF] rounded-lg">
                1
              </div>
              <div className="grid gap-y-4">
                <h1 className="general-sans-semibold text-2xl">
                  Join Bootcamp
                </h1>
                <span className="general-sans-light text-base">
                  Choose one of the bootcamps that you want to join.
                </span>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="flex general-sans-medium items-center justify-center text-white text-2xl w-12 h-12 px-5 py-5 bg-[#5366FF] rounded-lg">
                2
              </div>
              <div className="grid gap-y-4">
                <h1 className="general-sans-semibold text-2xl">
                  Carrying out assigned tasks
                </h1>
                <span className="general-sans-light text-base">
                  Later you will be given assignments that you must complete and
                  complete, these assignments will be corrected and assessed by
                  your respective mentors.
                </span>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="flex general-sans-medium items-center justify-center text-white text-2xl w-12 h-12 px-5 py-5 bg-[#5366FF] rounded-lg">
                3
              </div>
              <div className="grid gap-y-4">
                <h1 className="general-sans-semibold text-2xl">
                  Distributed to the company
                </h1>
                <span className="general-sans-light text-base">
                  If you get a very good assessment, you will get the
                  opportunity to be transferred to a company that suits your
                  studies.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
