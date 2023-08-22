import React from "react";

const GlobalText = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-md lg:text-right">
      <div className="text-MainCol font-bold text-3xl lg:text-[45px] leading-none">
        Introducting Bripo!
      </div>
      <div className="text-[#AAC] text-lg lg:text-[24px]">
        Bripo is a new app that lets you book rides and cabs online from a
        network of trusted and professional drivers. Whether you need a ride for
        yourself, your family, or your business, Bripo has you covered
      </div>
    </div>
  );
};

export default GlobalText;