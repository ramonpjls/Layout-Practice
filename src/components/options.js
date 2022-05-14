import React from "react";
import bg from "../assets/images/polygon-bg.jpeg";
import buildIcon from "../assets/images/build-ico.png";
import glass from "../assets/images/glass.png";
import twoYears from "../assets/images/2year-ico.png";
import shipping from "../assets/images/shipping-ico.png";
import { IoIosArrowForward } from "react-icons/io";

const Options = () => {
  return (
    <div className="mb-10">
      <img
        className="absolute w-full h-full xl:h-1/2 lg:h-1/2"
        src={bg}
        alt="bgPoligon"
      />
      <div className="relative grid grid-cols-1 gap-4 pt-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 place-items-center">
        <div className="flex flex-col items-center justify-center gap-4 xl:w-48 ">
          <img className="w-20" src={buildIcon} alt="buildIcon" />
          <span className="text-2xl font-bold text-white">
            TAILORED FOR GAMES
          </span>
          <span className="hidden text-sm text-white xl:flex">
            We've done the research and our algorithm takes care of the rest.
          </span>
          <button className="flex flex-row items-center text-white text-sms">
            LEARN MORE <IoIosArrowForward />{" "}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xl:w-48">
          <img className="w-20" src={glass} alt="glass" />
          <span className="text-2xl font-bold text-white">
            TRANSPARENT PRICING
          </span>
          <span className="hidden text-sm text-white xl:flex">
            Customiza your build with our curated parts with straight forward
            pricing and a flat $99 assembly fee
          </span>
          <button className="flex flex-row items-center text-sm text-white">
            LEARN MORE <IoIosArrowForward />{" "}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xl:w-48">
          <img className="w-20" src={twoYears} alt="twoYears" />
          <span className="text-2xl font-bold text-white">
            ALL-IN-ONE WARRANTY
          </span>
          <span className="hidden text-sm text-white xl:flex">
            All components under one warranty plan - NZXT will manage nay
            problems for you
          </span>
          <button className="flex flex-row items-center text-sm text-white">
            LEARN MORE <IoIosArrowForward />{" "}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xl:w-48">
          <img className="w-20" src={shipping} alt="shipping" />
          <span className="text-2xl font-bold text-white">
            48-HOUR TURNAROUND
          </span>
          <span className="hidden text-sm text-white xl:flex">
            Get in the game quickly
          </span>
          <button className="flex flex-row items-center text-sm text-white">
            LEARN MORE <IoIosArrowForward />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
