import React from "react";
import pic from "../../assets/roundPic.svg";
import { PiQuotesFill } from "react-icons/pi";
import {} from "swiper/react";

const PeopleComment = () => {
  return (
    //Container
    <div className="w-full  m-0">
      {/* Wrapper */}
      <div className="px-10 xl:p-0  w-full xl:w-[73%] flex flex-col items-center justify-center ">
        {/* Tittle */}
        <div>What People are Saying</div>
        {/* Text */}
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero
          magni a quas doloremque molestiae fugit adipisci ipsam minima nisi.
        </div>
        {/* Card holder */}
        <div className="max-w-sm h-full bg-[#EFF1F3] p-8 items-center flex flex-col rounded-[20px]  border border-[#AAC]">
          {/* Img */}
          <div className="w-24 h-24 rounded-full bg-cover ">
            <img src={pic} alt="" className="w-full " />
          </div>
          {/* icon */}
          <div className="  pt-5">
            <PiQuotesFill className=" text-[30px] text-MainCol" />
          </div>
          {/* text */}
          <div className="text-center text-[#AAC] text-2xl">
            Bripo is awesome! I use it every day to get to work and back. It’s
            easy to book a ride and the drivers are always friendly and
            professional.
          </div>
          {/* Name div */}
          <div className="border-t-2 border-[#AAC] w-14 mt-8"></div>
          <div className="">John Alabi</div>
        </div>
      </div>
    </div>
  );
};

export default PeopleComment;
