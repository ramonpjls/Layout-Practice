import React from "react";
import pc from "../assets/images/footer-pc.png";

const Banner = () => {
  return (
    <div className="m-10 bg-white xl:p-10 xl:flex-row xl:flex lg:p-10 lg:flex-row lg:flex">
      <div className="flex flex-col mb-5 xl:gap-10 xl:self-center xl:pl-16 lg:gap-10 lg:self-center lg:pl-16">
        <span className="text-4xl font-thin">
          BUILT BY EXPERTS. WITH A EYE FOR DESIGN
        </span>
        <span className="w-auto text-sm font-thin">
          NZXT has more than 12 years of experience developing awarc winning.
          high-qualitv PC components. By using the ver best components,
          assembled by highly-trained builders, we can deliver a meticulously
          crafted gaming PC, backed by a comprehensive 2-year warranty
        </span>
        <button className="bg-[#3DAEAC] mt-5 text-white text-sm font-extralight h-10 w-48 rounded-sm">
          LEARN MORE
        </button>
      </div>
      <img src={pc} alt="imageALT" />
    </div>
  );
};

export default Banner;
