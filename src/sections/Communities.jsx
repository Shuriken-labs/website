import React from "react";

const Communities = () => {
  return (
    <div className="pt-14 px-44 flex flex-col mb-28  space-y-4 justify-center">
      {" "}
      <h1 className="text-center font-sans text-[75px] font-bold leading-normal text-white">
        Connect.
        <span className="text-white/70"> Learn.</span>
        <span className="text-white/40"> Build.</span>{" "}
      </h1>
      <div className="w-full h-96 px-10 py-12 rounded-3xl bg-[#FFFFFF]/20  flex items-center">
        <p className="text-[#E0E0E0] justify-start">01</p>
      </div>
      <div className="w-full h-96 px-10 rounded-3xl bg-[#FFFFFF]/20 py-[50px] flex items-center"></div>
      <div className="w-full h-96 px-10 rounded-3xl bg-[#FFFFFF]/20 py-[50px] flex items-center"></div>
    </div>
  );
};

export default Communities;
