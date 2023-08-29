import React from "react";
import mac from "../../assets/Mackbook.png";
import GlobalText from "../../Components/Common/GlobalText";
import ToggleButton from "../../Components/Common/ToggleButton";

const ToggleComp = () => {
  return (
    //Container
    <div className='max-w-7xl mx-auto flex justify-center items-center mt-[40px] mb-[20px]   p-4 md:px-10 xl:p-0'>
      {/* Wrapper */}
      <div className='flex text-end gap-10 items-center'>
        {/* Img div */}
        <div className='hidden lg:flex'>
          <img src={mac} />
        </div>
        {/* Text div */}
        <div className=' md:w-[500px]  flex flex-col gap-6 '>
          <GlobalText
            Title='Frequently Asked Questions'
            subtext='Here are some of the common questions we get asked about Bripo'
            aliging='text-left lg:text-right'
          />
          <div className='w-full space-y-3'>
            <ToggleButton />
            <ToggleButton />
            <ToggleButton />
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleComp;
