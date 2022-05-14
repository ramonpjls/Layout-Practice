import React from "react";

import bg from "../assets/images/bg.png";
import pc from "../assets/images/H500i_White Black new- hGPU-Purplelight.png";
import bldLogo from "../assets/images/logo-white.png";
import nzxtWhite from "../assets/images/logo-nzxt.png";

const Landing = () => {
  return (
    <div className="flex flex-col h-full">
      <img
        className="absolute w-full bg-black h-fit -z-0"
        src={bg}
        alt="bglanding"
      />
      <div className="z-0 flex flex-col justify-center">
        <div className="flex flex-row pt-10 md:self-center xl:gap-10 xl:flex-row xl:pl-32 lg:gap-10 lg:flex-row lg:pl-32">
          <img
            className="relative h-40 xl:items-center xl:h-96 lg:items-center lg:h-96 md:items-center md:h-96"
            src={pc}
            alt="pc"
          />
          <div className="z-0 flex flex-col gap-10 mt-5">
            <div className="flex flex-col items-start w-40">
              <img
                src={bldLogo}
                className="xl:h-12 lg:h-12 md:h-12"
                alt="logoBlack"
              />
              <div className="flex items-center self-center gap-1 md:self-end xl:self-end lg:self-end">
                <span className="text-xs text-white font-extralight">By</span>
                <img src={nzxtWhite} className="h-2" alt="logoBlack" />
              </div>
            </div>
            <div className="z-10 flex flex-col xl:gap-4 lg:gap-4 md:gap-6">
              <span className="xl:text-4xl lg:text-3xl md:text-2xl text-white font-extralight xl:w-[305px]">
                GAMING PC'S MADE SIMPLE
              </span>
              <span className="w-40 text-sm text-white xl:w-auto lg:w-auto md:w-auto font-extralight">
                Choose a game, set a budget and we'll BLD it
              </span>
              <button className="bg-[#3DAEAC] m-5  text-white text-sm font-extralight h-10 xl:w-48 rounded-sm">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
