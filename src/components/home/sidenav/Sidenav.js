import React from 'react'
import SidenavTitle from './SidenavTitle';
import { Link } from 'react-router-dom';


const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
       
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Personal Portfolio</li>
        
      
      </ul>
  <SidenavTitle title="J" subTitle="ob Profiles"/>
      <ul>
        <li className='sidenavLi'><a href="www.linkedin.com/in/upendranath-reddy-katireddy-22b403179" target='_blank'>LinkedIn</a></li>
        <li className="sidenavLi">Naukri</li>
        <li className="sidenavLi">Indeed</li>
       
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91 9493 115 429</li>
        <li className="sidenavLi">upendrareddy021@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav