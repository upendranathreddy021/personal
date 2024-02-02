import React from "react";
import {
  
  circlecart,ecommerce,online_tutor,startuphub,personal_portfolio
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="StartUpHub"
            category="Website"
            image={startuphub}
          />
          <ProjectsCard
          title="CircleCart"
          category="website"
          image={circlecart}
          />
          <ProjectsCard
          title="E-commerce Application"
          category="website"
          image={ecommerce}
          />
          <ProjectsCard
          title="Online Tutor Application"
          category="website"
          image={online_tutor}
          />
          <ProjectsCard
  title="Personal Portfolio"
  category="website"
  image={personal_portfolio}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
