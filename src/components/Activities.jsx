import React from "react";
import resort1 from '../assets/resort1.jpg'
import resort2 from '../assets/resort2.jpg'
import resort3 from '../assets/resort3.jpg'



const Activities = () => {
  return (  
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div>
        <h3>Resorts</h3>
        <img src={resort1} alt="/"/>
      </div>
      <div>
        <h3>Resorts</h3>
        <img src={resort2} alt="/" />
      </div>
      <div>
        <h3>Resorts</h3>
        <img src={resort3} alt="/" />
      </div>
    </div>
  );
};

export default Activities;
