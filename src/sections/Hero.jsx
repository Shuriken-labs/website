import React, { useEffect, useState } from "react";
import circle from '../assets/circle.svg'
import shuriken from '../assets/shuriken.svg'
import thrive from "../assets/thrive.png";
import thrive1 from "../assets/thrive1.png";
import Innovate from "../assets/Innovate.png";
import Button from "../components/Button";


const ImageSwitcher = () => {
  const images = [thrive , thrive1 , Innovate]
  const [currentIndex , setCurrentIndex] = useState(0)

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length  )
    },500)

    return () => clearInterval(interval)
  },[])


  return <img src={images[currentIndex]} alt={images[currentIndex]} className="w-1/2" />

}

const Hero = () => {
  return (
    <div className="py-6 mb-20">
      <div className="relative">
        <img src={circle} className="absolute -top-2 md:top-4 left-1/2  md:left-[610px] w-[49px] h-[49px] md:w-[88px] md:h-[88px] p-5  bg-[#662D91] flex justify-center items-center rounded-full box-shadow" alt="" />
      </div>
      <h1 className="font-sans font-semibold text-[50px] md:justify-center justify-start sm:text-[110px] text-primary leading-normal">
        Empowering <span className="text-[#e0e0e066]">Communities</span> to
      </h1>
      <div className="flex flex-col md:w-full sm:flex-row items-start">
        <ImageSwitcher />
        <span  className="text-primary font-bold text-[50px] sm:text-[110px] sm:whitespace-nowrap leading-normal  font-sans w-full sm:w-1/2">
          in Web3
        </span>
      </div>
      <p className="flex justify-start font-semibold font-sans text-[14px] text-primary leading-normal mt-3">
        Your gateway to blockchain education, insights, and <br /> real-world
        innovation.
      </p>
      <div className="mt-3">
        <Button bgColor="bg-[#662d91]"/>
      </div>
    </div>
  );
};

export default Hero;
