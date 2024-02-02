import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
  
        <ResumeTitle title="Trainings" icon={<MdWork />} />
        
        <ResumeCard
          badge="Mar 2023 - Sep 2023"
          title="MERN full stack Web Developer"
          subTitle="Vector India"
          des="Completed MERN full stack training vector India with certification. What i learned in Training Frontend html,css,javascript,ReactJS,BootStrap. 
          Backend like Nodejs and expressJS. DBMS like Mysql and MongoDB. Languages like Python."
        />
       
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2022"
          title="B.Tech"
          subTitle="GPCET, Kurnool"
          des="Completed My btech in mechanical engineering in G.Pullaiah College Of Engineering and Technology in the year 2022 with cgpa of 8.05."
        />
        <ResumeCard
          badge="2016 - 2019"
          title="Diploma"
          subTitle="ESC govt polytechnic, Nandyal"
          des="Completed My diploma in mechanical in ESC govt polytechnic in the year 2019 with percentage of 69.26"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="10th"
          subTitle="sri vijayanikethan high school, Panyam"
          des="Completed my 10th in sri vijayanikethan high school in the year 2016 with cgpa of 8.3"
        />
        
      </div>
    </div>
  );
};

export default Education;
