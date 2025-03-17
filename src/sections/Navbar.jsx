import React, { useState } from "react";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "../components/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="w-full  p-6 flex justify-between items-center bg-white/10 border border-[
#cbff8c33] backdrop-blur-[10px];

] rounded-3xl"
    >
      <img src={logo} className=" w-[120px] sm:w-[150px] md:w-[250px]" alt="" />
      <ul className="list-none sm:flex  sm:justify-center sm:whitespace-nowrap  sm:ml-2 hidden md:justify-end flex-1 items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-sans text-[12.5px]  md:text-[18px] lg:text-[20px] font-semibold cursor-pointer text-white leading-normal  sm:mr-2  ${
              index === navLinks.length - 1 ? "mr-0" : "md:mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div
        className="sm:hidden  flex flex-1 justify-end items-center ml-3"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <IoMdClose size={30} color="white" />
        ) : (
          <IoIosMenu size={30} color="white" />
        )}
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } bg-[#662D91] flex-col absolute top-[127px] right-2 mx-4 my-2 min-w-[250px] px-[20px] py-5 rounded-3xl`}
      >
        <ul className="list-none flex flex-col justify-center flex-1 items-start ">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`font-sans text-[16px]  font-semibold cursor-pointer leading-normal text-white  ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <div className="w-40 h-px bg-white/70 mt-5"></div>
            </li>
          ))}
        </ul>
        <div className="mt-5 ml-2">
          <Button bgColor="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
