import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = ["About Us", "Our services", "Testimonial", "Contact Us"];
  return (
    <div className="max-w-[998px]  w-full flex items-center  justify-between px-6  h-20 border  border-[rgba(203,255,140,0.20)] bg-white/10 rounded-3xl backdrop-blur-[10px] mx-auto">
      <div className="w-56 h-9">
        <img src={logo} alt="" />
      </div>
      <ul className="flex gap-[30px]">
        {navLinks.map((link, index) => (
          <li className="font-sans text-xl leading-normal  font-semibold text-white" key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
