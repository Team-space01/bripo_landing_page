import React from "react";
import GlobalText from "../../Components/Common/GlobalText";
import pic from "../../assets/phone2.svg";
import pic2 from "../../assets/Phone1.svg";
import GlobalButton from "../../Components/Common/GlobalButton";

const IntroSession = () => {
  return (
    //Container
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-[40px] mb-[20px] flex-col  p-4 md:px-10 xl:p-0">
      {/* Wrapper */}
      <div className="w-full flex justify-center">
        {/* First box */}
        <div className=" w-1/2 hidden md:flex md:mr-[30px] mr-0 ">
          <img src={pic} />
        </div>
        {/* second div */}
        <div className="w-full md:w-1/2 md:mt-[50px] ">
          <GlobalText />
        </div>
      </div>

      {/* Wrapper 2 */}
      <div className="w-full flex justify-center mt-[20px]">
        {/* First box */}
        <div className="w-full md:w-[50%] flex md:mr-[30px] mr-0 flex-col justify-center gap-4 mt-[50px]">
          <GlobalText />
          <GlobalButton
            myClass="rounded-[100px]"
            text="Join waitlist"
            padding=" py-4 "
          />
        </div>
        {/* second div */}
        <div className="md:w-[50%] hidden  justify-center md:flex ">
          <img src={pic2} />
        </div>
      </div>
    </div>
  );
};

export default IntroSession;
