import React from "react";
import ninjaLogo from "../assets/images/Group 99.png";
import ninjaMedia from "../assets/images/ninjaMedia.jpeg";
import { IoIosArrowForward } from "react-icons/io";

const Ninja = () => {
  return (
    <div className="relative z-50 flex w-full place-content-center">
      <div className="absolute flex flex-col items-center mt-10">
        <span className="text-2xl font-light text-white">
          NINJAS FORTNITE BUILD
        </span>
        <button className="flex flex-row items-center text-sm text-white">
          LEARN MORE <IoIosArrowForward />{" "}
        </button>
        <img src={ninjaLogo} alt="imageALT" />
      </div>
      <img className="w-full h-[313px]" src={ninjaMedia} alt="imageALT" />
    </div>
  );
};

export default Ninja;
