import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

const ToggleButton = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    //Container
    <div className=' p-4 h-fit border border-[#AAC] rounded-3xl'>
      {/* Wrapper */}
      <div className='flex flex-col gap-3'>
        {/*First div */}
        <div className='flex  justify-between items-center'>
          <div className='font-semibold'>Where is Bripo available?</div>
          <div onClick={toggle}>
            <BiDownArrow className='text-[#AAC] ' />
          </div>
        </div>
        {/* second div */}
        {show ? (
          <div>
            We’re starting with a few major cities in the Nigeria, such as
            Lagos, Abuja, Cross-Rivers, etc. We plan to expand to more cities
            and countries in the future.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ToggleButton;
