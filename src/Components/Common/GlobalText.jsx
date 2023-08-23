import React from "react";

const GlobalText = ({ Title, subtext }) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-md lg:text-right">
      <div className="text-MainCol font-bold text-3xl lg:text-[45px] leading-none">
        {Title}
      </div>
      <div className="text-[#AAC] text-lg lg:text-[24px]">{subtext}</div>
    </div>
  );
};

export default GlobalText;
