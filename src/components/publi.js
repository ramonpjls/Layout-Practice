import React from "react";
import Ninja from "./ninja";
import Pubg from "./pubg";

const Publi = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
      <Ninja />
      <Pubg />
    </div>
  );
};

export default Publi;
