import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col items-center gap-1 p-10">
      <div>
        <span className="text-2xl text-white">STAY </span>
        <span className="text-2xl text-gray-400">IN TOUCH</span>
      </div>
      <div className="flex">
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          className="w-64 h-6 text-xs text-center bg-gray-500 rounded-md xl:w-96 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Email;
