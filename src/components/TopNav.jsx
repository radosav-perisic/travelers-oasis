import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopNav = () => {
  return (
    <div>
      <div><BsChatSquareDots />
      <h1>TRAVELER'S OASIS</h1>
      </div>
      <div>
        <div>
            <AiOutlineClockCircle />
            <p>9AM - 5AM</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
