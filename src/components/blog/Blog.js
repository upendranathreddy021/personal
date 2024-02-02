import React from "react";
import Title from "../home/Title";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
           
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
          
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
