import React from "react";
import logoWhite from "../assets/images/logo-nzxt.png";
import usa from "../assets/images/Flag_of_the_United_States.svg";
import { IoMdArrowDropup } from "react-icons/io";

import { BsYoutube } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSteamSymbol } from "react-icons/fa";

const InfoFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 px-16 pb-4 xl:pt-10 lg:flex-row lg:pt-10">
      <div className="flex flex-row items-baseline">
        <img className="w-24" src={logoWhite} alt="logowhite" />
        <span className="text-xs text-gray-500">
          2018. All Rights Reserved.
        </span>
      </div>
      <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-3 ">
        <button className="text-xs font-bold text-yellow-200">
          Privacy Policy
        </button>
        <button className="text-xs font-bold text-yellow-200">
          Terms of Service
        </button>
        <div className="flex flex-row items-center gap-2">
          <img src={usa} alt="FLAG" className="w-14" />
          <span className="text-xs font-bold text-yellow-200">English</span>
          <IoMdArrowDropup className="text-2xl font-bold text-yellow-200" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <FaFacebookSquare className="text-xl font-bold text-yellow-200" />
        <BsTwitter className="text-xl font-bold text-yellow-200" />
        <BsInstagram className="text-xl font-bold text-yellow-200" />
        <BsYoutube className="text-xl font-bold text-yellow-200" />
        <BsTwitch className="text-xl font-bold text-yellow-200" />
        <FaSteamSymbol className="text-xl font-bold text-yellow-200" />
        <BsReddit className="text-xl font-bold text-yellow-200" />
        <BsDiscord className="text-xl font-bold text-yellow-200" />
      </div>
    </div>
  );
};

export default InfoFooter;
