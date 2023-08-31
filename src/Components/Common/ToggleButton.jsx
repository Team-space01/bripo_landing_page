import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

const ToggleButton = ({ Title, subtext }) => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  //for the drop down icos

  const dropDown = () => {
    setClick(!click);
  };

  return (
    //Container
    <div className=' p-4 h-fit border border-[#AAC] rounded-3xl'>
      {/* Wrapper */}
      <div className='flex flex-col gap-3'>
        {/*First div */}
        <div className='flex  justify-between items-center'>
          <div className='font-semibold'>{Title}</div>
          <div
            onClick={() => {
              dropDown();
              toggle();
            }}
          >
            {click ? (
              <BiSolidUpArrow className='text-[#AAC] ' />
            ) : (
              <BiSolidDownArrow className='text-[#AAC] ' />
            )}
          </div>
        </div>
        {/* second div */}
        {show ? <div>{subtext}</div> : null}
      </div>
    </div>
  );
};

export default ToggleButton;
