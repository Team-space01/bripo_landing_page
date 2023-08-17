import React from 'react'
import GlobalText from '../../Components/Common/GlobalText';
import pic from "../../assets/phone2.svg"
import pic2 from "../../assets/Phone1.svg"
import GlobalButton from '../../Components/Common/GlobalButton';

const IntroSession = () => {
  return (
    //Container
    <div className="w-[100%] flex justify-center items-center mt-[40px] mb-[20px] flex-col ">
      {/* Wrapper */}
      <div className="w-[75%] flex justify-center">
        {/* First box */}
        <div className=" w-[50%] hidden sm:flex sm:mr-[30px] mr-0 ">
          <img src={pic} />
        </div>
        {/* second div */}
        <div className="w-[100%] sm:w-[50%] mt-[50px] ">
          <GlobalText />
        </div>
      </div>

      {/* Wrapper 2 */}
      <div className="w-[75%] flex justify-center mt-[20px]">
        {/* First box */}
        <div className="w-[100%] sm:w-[50%] flex sm:mr-[30px] mr-0 flex-col   justify-center gap-4 mt-[50px]">
          <GlobalText />
          <GlobalButton />
        </div>
        {/* second div */}
        <div className="w-[50%] hidden  justify-center sm:flex ">
          <img src={pic2} />
        </div>
      </div>
    </div>
  );
}

export default IntroSession