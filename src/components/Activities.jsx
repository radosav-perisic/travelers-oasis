import React from "react";
import resort1 from '../assets/resort1.jpg'
import resort2 from '../assets/resort2.jpg'
import resort3 from '../assets/resort3.jpg'



const Activities = () => {
  return (  
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 ">
        <h3 className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={resort1} alt="/"/>
      </div>
      <div className="relative p-4 ">
        <h3 className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Cruises</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={resort2} alt="/" />
      </div>
      <div className="relative p-4 ">
        <h3 className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Excursions</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={resort3} alt="/" />
      </div>
    </div>
  );
};

export default Activities;
