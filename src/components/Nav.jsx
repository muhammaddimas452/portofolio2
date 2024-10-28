import React, { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { navItems } from "../constants";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="sticky top-0 z-50 ssm:px-6 ssm:py-4 md:px-20 md:py-6 backdrop-blur-3xl">
      <div className="flex justify-between items-center">
        <div>
          <img className="ssm:w-[80%] md:w-[217px] md:h-10" src={Logo} alt="" />
        </div>
        <div>
          <ul className="hidden general-sans-medium uppercase lg:flex gap-x-8 text-black text-opacity-50">
            {navItems.map((item, index) => (
              <li className="nav relative" key={index}>
                <a href={item.href} className="hover:text-black">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-x-5">
          <button className="flex items-center text-white general-sans-medium uppercase ssm:text-[10px] sm:text-sm md:text-base ssm:px-4 ssm:py-3 sm:px-5 sm:py-4 md:px-6 md:py-[18px] bg-[#3037F7] rounded-[18px]">
            Register Now
          </button>
          <div className="lg:hidden ssm:flex ">
            <button onClick={toggleNavbar}>
              {navOpen ? (
                <IoClose className="text-3xl" />
              ) : (
                <SlMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="fixed right-0 ssm:top-[70px] sm:top-[84px] md:top-[108px] z-20 bg-white w-full px-12 py-10">
          <ul className="flex flex-col lg:hidden justify-center items-center gap-y-8 general-sans-medium uppercase text-black">
            {navItems.map((item, index) => (
              <li className="border-b w-full text-center" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
