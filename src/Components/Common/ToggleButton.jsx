import React from "react";
import { BiDownArrow } from "react-icons/bi";

const ToggleButton = () => {
  return (
    //Container
    <div className="w-[300px] p-5 max-h-max bg-red-200 rounded-md">
      {/* Wrapper */}
      <div className="flex flex-col gap-4">
        {/*First div */}
        <div className="flex  justify-between items-center">
          <div>Where is Bripo available?</div>
          <div>
            <BiDownArrow />
          </div>
        </div>
        {/* second div */}
        <div>
          We’re starting with a few major cities in the Nigeria, such as Lagos,
          Abuja, Cross-Rivers, etc. We plan to expand to more cities and
          countries in the future.
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
