import React from "react";

const GlobalText = ({ Title, subtext, aliging }) => {
  return (
    <div className={`flex flex-col gap-4 w-full lg:max-w-xl ${aliging}`}>
      <h3 className='text-MainCol font-bold text-3xl lg:text-[45px] leading-none'>
        {Title}
      </h3>
      <p className='text-[#AAC] text-lg lg:text-[24px]'>{subtext}</p>
    </div>
  );
};

export default GlobalText;
