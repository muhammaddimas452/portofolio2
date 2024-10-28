import React from "react";
import Faq from "./Faq";
import { faq } from "../constants";

const Accordion = () => {
  return (
    <div className="ssm:px-6 ssm:py-12 md:px-20 md:py-16">
      <div className="grid justify-items-center text-center mb-16">
        <h1 className="uppercase clash-display-semibold lg:w-[850px] ssm:text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Question
        </h1>
      </div>
      {faq.map((item, index) => (
        <div key={index}>
          <Faq name={item.title} answer={item.text} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
