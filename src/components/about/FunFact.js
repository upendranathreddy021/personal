import React from "react";

import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      
      <FunFactCard icon={<SiAntdesign />} des="5+ Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="8+ hours of coding / day" />
    
    </div>
  );
};

export default FunFact;
