import React from "react";
import kotaku from "../assets/images/logo_site_kotaku.png";
import pcg from "../assets/images/PCG_Logo_HiRes.jpg";
import tr from "../assets/images/techradar-logo.png";

const Opinios = () => {
  return (
    <div className="p-10 bg-black">
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-3">
        <div className="">
          <img src={kotaku} className="self-center py-10" alt="kotaku" />
          <span className="text-white ">
            "Offering real-world performance data is a great idea, and makes the
            process of ordering a PC much less abstract for newcomers tha
            pick...
          </span>
        </div>
        <div className="">
          {" "}
          <img src={pcg} alt="pcg" className="self-center py-10" />
          <span className="text-white">
            "There's something lovely about having a PC that comes with a set of
            guaranteed predicted frames-per-second targets for the games i
            planned..."
          </span>
        </div>
        <div className="">
          {" "}
          <img src={tr} alt="tr" className="self-center py-10" />
          <span className="text-white">
            "This is certainly a very neat idea, and the company is putting its
            money where its mouth is redaring the frame-rate estimations."
          </span>
        </div>
      </div>
    </div>
  );
};

export default Opinios;
