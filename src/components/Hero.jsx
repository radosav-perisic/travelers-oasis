import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src='https://images.unsplash.com/photo-1612545796532-9acb762c09e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Traveler's Oasis</h2>
          <p>
            Looking for a unique and unforgettable travel experience? Look no
            further than Traveler's Oasis! Our team of travel experts is
            dedicated to helping you find your perfect trip, whether you're
            seeking adventure, relaxation, or something in between. With
            Traveler's Oasis, you'll discover new destinations, create lasting
            memories, and have the time of your life. Start planning your dream
            trip today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
