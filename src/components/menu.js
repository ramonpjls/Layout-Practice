import React from "react";

import bldLogo from "../assets/images/logo-white.png";

const Menu = () => {
  return (
    <div className="xl:flex xl:justify-between lg:flex lg:justify-between md:flex md:justify-between   bg-[#3DAEAC]">
      <div className="gap-10 xl:ml-10 xl:flex lg:ml-10 lg:flex md:flex">
        <img src={bldLogo} className="p-5 w-15" alt="logoBlack" />
        <div className="flex gap-4 mx-4 xl:ml-10 xl:gap-10 lg:ml-10 lg:gap-10 md:justify-end">
          <button className="text-sm text-white">WHAT IS BLD</button>
          <button className="text-sm text-white">CUSTOMER REVIEWS</button>
          <button className="text-sm text-white">SUPPORT</button>
          <button className="text-sm text-white">FAQ</button>
        </div>
      </div>
      <div className="hidden mr-10 xl:flex xl:items-center lg:flex lg:items-center">
        <button className="h-10 text-white border-2 rounded-md w-52">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Menu;
