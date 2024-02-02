import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="FrontEnd Developer"
        subTitle="Specializing in crafting engaging user interfaces
         with React OR with HTML, CSS, and JavaScript. 
        My focus is on delivering responsive and interactive web experiences 
        that are both functional and visually appealing."

        />
        <ServicesCard
        icons={<SiAntdesign />}
        title="Backend Developer"
        subTitle="Experienced in developing robust back-end solutions using Node.js
         and Express.js. I excel in building efficient APIs, managing server-side logic,
          and ensuring seamless data integration for dynamic web applications."
      />
      <ServicesCard
       
        title="Tutor"
        subTitle=" I offer personalized and interactive learning experiences
         in Python, Java, HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MySQL, and MongoDB.
          My approach focuses on practical skills and real-world applications, empowering students
           to confidently build and develop their programming abilities."
      />
     
    </div>
  );
};

export default MyServices;


