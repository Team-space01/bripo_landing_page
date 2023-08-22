import React from "react";
import pic from "../../assets/roundPic.svg";

const PeopleComment = () => {
  return (
    //Container
    <div className="w-full h-[500px]">
      {/* Wrapper */}
      <div>
        {/* Tittle */}
        <div>What People are Saying</div>
        {/* Text */}
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero
          magni a quas doloremque molestiae fugit adipisci ipsam minima nisi.
        </div>
        {/* Card holder */}
        <div className="max-w-sm h-full bg-[#ffff] p-8 items-center shadow-md gap-2 flex flex-col rounded-[15px]">
          {/* Img */}
          <div className="w-20 h-20 rounded-full bg-red-300">
            <img src={pic} alt="" className="w-full" />
          </div>
          {/* text */}
          <div>
            Bripo is awesome! I use it every day to get to work and back. It’s
            easy to book a ride and the drivers are always friendly and
            professional.
          </div>
          {/* Name div */}
          <div className="border-t-2 border-cyan-700 w-14"></div>
          <div className="">John Alabi</div>
        </div>
      </div>
    </div>
  );
};

export default PeopleComment;
