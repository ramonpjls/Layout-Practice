import React from "react";

import logoBlack from "../assets/images/logo-nzxt-black.png";

const Header = () => {
  return (
    <div className="flex pt-5 bg-white xl:justify-between lg:justify-between md:justify-between">
      <img src={logoBlack} className="w-20 mx-10 mb-2" alt="logoBlack" />
      <div className="flex gap-4 ml-10 xl:mr-10 lg:mr-10 md:mr-10">
        <button className="text-[#3DAEAC] text-xs xl:text-md font-extralight">
          LOG IN
        </button>
        <button className="text-[#3DAEAC] text-xs xl:text-md  font-extralight">
          SING UP
        </button>
      </div>
    </div>
  );
};

export default Header;
