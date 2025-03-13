import React from "react";
import avatars from "../assets/Avatars.png";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="flex flex-col pt-12 space-y-28 px-48">
      <button
        className="w-64 h-14 absolute top-28 left-24 rotate-[-10deg] px-[17px] py-[10px] bg-[#cbff8c] rounded-full"
        alt=""
      >
        <img src={logo} className="invert" alt="" />
      </button>
      <div className="flex justify-between">
        <h1 className="flex-1 text-[75px] font-sans text-[#e0e0e0] font-bold leading-none">
          Who We Are{" "}
        </h1>
        <div className="flex-1 text-[#e0e0e0] text-3xl font-normal font-sans leading-normal ">
          At Shuriken Labs, we're creating a Web3 ecosystem that connects,
          educates, and empowers communities through{" "}
          <span className="text-[#e0e0e0] text-3xl font-semibold font-sans leading-normal">
            {" "}
            innovation
          </span>{" "}
          and{" "}
          <span className="text-[#e0e0e0] text-3xl font-semibold font-sans leading-normal">
            collaboration
          </span>
          .
        </div>
      </div>

      <div className="flex gap-x-7 ">
        <div className="w-[494px] flex-1 h-[500px] bg-white/5 rounded-3xl py-8 px-14 space-y-3">
          <div className="w-[88px] h-[88px] bg-[#662D91] rounded-full flex items-center justify-center text-white font-sans font-bold">
            1
          </div>
          <p className="text-[50px] font-sans font-normal leading-normal text-[#CBFF8C]">
            Communities by Shuriken Labs
          </p>
          <p className="text-[#fff] font-sans text-xl font-normal leading-normal">
            Building networks of passionate blockchain enthusiasts, from
            universities to local hubs.
          </p>
          <div className="h-px w-full bg-white/20"></div>
          <img src={avatars} alt="" />
          <div className="text-[#e0e0e0] font-sans text-[16px] font-bold  leading-normal">
            1,000+{" "}
            <span className="text-[#e0e0e0] font-sans text-[16px] font-semibold leading-normal">
              Community Members
            </span>
          </div>
        </div>
        <div className="w-[494px] flex-1 h-[500px] bg-white/5 rounded-3xl py-8 px-14 space-y-3">
          <div className="w-[88px] h-[88px] bg-[#662D91] rounded-full flex items-center justify-center text-white font-sans font-bold">
            2
          </div>
          <p className="text-[50px] font-sans font-normal leading-normal text-[#CBFF8C]">
            First Light: Chain Reaction
          </p>
          <p className="text-[#fff] font-sans text-xl font-normal leading-normal">
            Delivering the latest in crypto and Web3 through engaging content
            and discussions.
          </p>
          <div className="h-px w-full bg-white/20"></div>
          <div className="flex items-center">
            <div className="mr-6">
              <p className="text-[#CBFF8C] text-3xl font-bold font-sans leading-normal">
                5,000+
              </p>
              <p className="text-[16px] font-sans font-semibold leading-normal text-[#e0e0e0]">
                Monthly Readers
              </p>
            </div>
            <div className="w-px h-[62px] bg-gray-400 mr-6"></div>
            <div>
              <p className="text-[#CBFF8C] text-3xl font-bold font-sans leading-normal">
                50+
              </p>
              <p className="text-[16px] font-sans font-semibold leading-normal text-[#e0e0e0]">
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
