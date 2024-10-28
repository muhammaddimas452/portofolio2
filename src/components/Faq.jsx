import React, { useState } from "react";

const Faq = ({ name, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between items-center px-6 py-8 w-full border-[1px] border-[#AAA] rounded-3xl ${
          accordionOpen && "border-b-0 rounded-b-none pb-0"
        }
        `}
      >
        <span className="general-sans-medium text-start ssm:text-xl md:text-[26px] lg:text-[32px]">
          {name}
        </span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <div className="bg-[#3037F7] flex justify-center items-center w-[26px] h-[26px] rounded-full">
          <svg
            className="fill-white shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-xl px-6 pb-8 w-full border-b-[1px] border-x-[1px] border-[#AAA] rounded-b-3xl  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden clash-display-light ssm:text-sm md:text-lg lg:text-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Faq;
