import React from "react";
import Logo from "../assets/img/Logo2.png";
import Fb from "../assets/img/Facebook.png";
import Twit from "../assets/img/Twitter.png";
import Inst from "../assets/img/Instagram.png";
import Yt from "../assets/img/YouTube.png";
import { navItems } from "../constants";

const Footer = () => {
  return (
    <div className="ssm:px-6 ssm:py-4 md:px-20 md:py-20 bg-[#3037F7] mt-10">
      <div className="md:flex ssm:grid sm:grid-cols-1 ssm:gap-y-5 sm:text-base items-center justify-items-center justify-between lg:pb-[0px] text-white">
        <div className="sm:flex sm:flex-col lg:flex-row ssm:grid ssm:justify-items-center justify-center items-center ssm:text-center sm:text-start gap-x-4 gap-y-7">
          <a className="footer-nav relative" href="">
            <img
              className="ssm:w-[80%] md:w-[217px] md:h-10"
              src={Logo}
              alt=""
            />
          </a>
          <ul className="general-sans-regular uppercase flex gap-x-7 text-white">
            {navItems.map((item, index) => (
              <li className="" key={index}>
                <a href={item.href} className="footer-nav relative">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex font-urbanist font-normal text-base sm:justify-items-end ssm:justify-items-center ssm:mt-4 sm:mt-0 sn:gap-x-6 ssm:gap-x-3">
          <div>
            <a className="footer-nav relative" href="">
              <img src={Fb} alt="" />
            </a>
          </div>
          <div>
            <a className="footer-nav relative" href="">
              <img src={Twit} alt="" />
            </a>
          </div>
          <div>
            <a className="footer-nav relative" href="">
              <img src={Inst} alt="" />
            </a>
          </div>
          <div>
            <a className="footer-nav relative" href="">
              <img src={Yt} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
