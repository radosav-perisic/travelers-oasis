import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
      <h1>TRAVELER'S OASIS</h1>
      </div>
      <div>
        <div>
            <AiOutlineClockCircle />
            <p>9AM - 5AM</p>
        </div>
        <div>
            <AiFillPhone />
            <p>1-777-718-1234</p>
        </div>
        <button>Get A Free Quote</button>
      </div>
    </div>
  );
};

export default TopNav;
