import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import pubgBg from "../assets/images/Group 9.jpg";
import pubgLogo from "../assets/images/Player-Unknown-Battlegrounds-Logo.png";

const Pubg = () => {
  return (
    <div className="relative z-50 flex w-full place-content-center">
      <div className="absolute flex flex-col items-center mt-10">
        <span className="text-2xl font-light text-white">
          LIMITED EDITION PUBG CASE{" "}
        </span>
        <button className="flex flex-row items-center text-sm text-white">
          LEARN MORE <IoIosArrowForward />{" "}
        </button>
        <img className="pt-4 " src={pubgLogo} alt="imageALT" />
      </div>
      <img className="w-full h-[313px]" src={pubgBg} alt="imageALT" />
    </div>
  );
};

export default Pubg;
