import React from "react";
import avatars from "../assets/Avatars.png";
import logo from "../assets/logo.png";
import shuriken from '../assets/shuriken.svg'

const About = () => {
  return (
    <div className="flex flex-col  gap-7 pt-6 mb-10">
      <div className="flex flex-col justify-center items-start  sm:flex-row relative ">
        <div className="py-[2px] px-[17px] rounded-full bg-[#cbff8c] inline-flex flex-col absolute -left-9 -top-16  items-start rotate-[-8deg] pink-shadow">
          <img src={shuriken} className="-rotate-[-8deg]"  alt="" />
        </div>
        <h1 className="flex-1 md:w-full w-1/2 text-left  whitespace-nowrap text-[40px] md:text-[75px] font-sans text-[#e0e0e0]  font-bold leading-none md:mb-0 mb-4">
          Who We Are{" "}
        </h1>
        <div className="flex-1 md:w-full w-1/2 text-start  text-[#e0e0e0] text-[20px] md:text-3xl font-normal font-sans leading-normal ">
          At Shuriken Labs, we're creating a Web3 ecosystem that connects,
          educates, and empowers communities through{" "}
          <span className="text-[#e0e0e0] text-[20px] md:text-3xl font-semibold font-sans leading-normal">
            {" "}
            innovation
          </span>{" "}
          and{" "}
          <span className="text-[#e0e0e0] text-[20px]  md:text-3xl font-semibold font-sans leading-normal">
            collaboration
          </span>
          .
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-y-7 sm:gap-x-7 md:gap-x-7 ">
        <div className="md:w-[520px] w-[484px] flex-1 h-[494px] bg-white/5 rounded-3xl py-3 px-14 space-y-3">
          <div className="md:w-[88px] w-[66px] h-[66px] md:h-[88px] bg-[#662D91] rounded-full flex items-center justify-center text-white font-sans font-bold box-shadow">
            1
          </div>
          <p className="md:text-[50px] text-[35px] font-sans font-semibold leading-normal text-[#CBFF8C]">
            Communities by Shuriken Labs
          </p>
          <p className="text-[#fff] font-sans text-[16px] md:text-xl font-normal leading-normal">
            Building networks of passionate blockchain enthusiasts, from
            universities to local hubs.
          </p>
          <div className="h-px w-full bg-white/20"></div>
          <img src={avatars} className="md:w-[125px]" alt="" />
          <div className="text-[#e0e0e0] font-sans text-[12px] md:text-[16px] font-bold  leading-normal mb-2">
            1,000+{" "}
            <span className="text-[#e0e0e0] font-sans text-[12px] md:text-[16px] font-semibold leading-normal ">
              Community Members
            </span>
          </div>
        </div>
        <div className="md:w-[520px] w-[484px] flex-1 h-[494px] bg-white/5 rounded-3xl py-3 px-14 space-y-3 flex-shrink-0">
          <div className="md:w-[88px] w-[66px] h-[66px] md:h-[88px] bg-[#662D91] rounded-full flex items-center justify-center text-white font-sans font-bold box-shadow">
            2
          </div>
          <p className="md:text-[50px] text-[35px] font-sans font-semibold leading-normal text-[#CBFF8C]">
            First Light: Chain Reaction
          </p>
          <p className="text-[#fff] font-sans text-[16px]  md:text-xl font-normal leading-normal">
            Delivering the latest in crypto and Web3 through engaging content
            and discussions.
          </p>
          <div className="h-px w-full bg-white/20"></div>
          <div className="flex items-center">
            <div className="mr-6">
              <p className="text-[#CBFF8C] text-[20px] md:text-3xl font-bold font-sans leading-normal">
                5,000+
              </p>
              <p className="md:text-[16px] text-[12px] font-sans font-semibold leading-normal text-[#e0e0e0]">
                Monthly Readers
              </p>
            </div>
            <div className="w-px h-[62px] bg-gray-400 mr-6"></div>
            <div>
              <p className="text-[#CBFF8C] text-[20px] md:text-3xl font-bold font-sans leading-normal">
                50+
              </p>
              <p className="md:text-[16px] text-[12px] font-sans font-semibold leading-normal text-[#e0e0e0]">
                Industry Partnership
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
