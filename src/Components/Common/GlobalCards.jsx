import React from 'react'
import {TbBus} from "react-icons/tb"

const GlobalCards = () => {
  return ( 
    //Container
    <div className="w-[300px] h-[fit] bg-[#ffff] p-[20px] shadow-md gap-2 flex flex-col rounded-[15px]">
      {/*Icon */}
      <div className="w-12 bg-[#EFF1F3] h-11 flex justify-center items-center rounded-full text-MainCol ">
        <TbBus />
      </div>

      {/* Tittle */}
      <div className='text-[28px] font-bold text-MainCol'>Dispatching feature</div>

      {/* Text */}
      <div className='text-[#AAC] text-[20px] '>
        Bripo allows you to perform dispatching operations for your business or
        organization. You can create and manage multiple accounts for your
        employees, clients, or partners. You can also assign rides, monitor
        trips, and generate reports on the app. 
      </div>
    </div>
  );
}

export default GlobalCards