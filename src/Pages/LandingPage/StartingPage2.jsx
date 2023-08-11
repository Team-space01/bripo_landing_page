import React from 'react'
import pic from "../../assets/logo-transparent.png"

const StartingPage2 = () => {
  return (
    //Main Container
    <div className="w-[100%] h-[100vh] bg-MainCol flex justify-center text-lg items-center">
      {/* Wrapper */}
      <div className="w-[80%] h-[80%] shadow-2xl flex items-center justify-center p-[10px]">
        <div>
          {/* Image Hoder  */}
          <img src={pic} />
        </div>
      </div>
    </div>
  );
}

export default StartingPage2