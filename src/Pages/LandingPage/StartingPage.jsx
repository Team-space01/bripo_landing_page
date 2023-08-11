import React from 'react'
import pic from "../../assets/logo-white.png"

const StartingPage = () => {
  return (
    //Main Container
    <div className="w-[100%] h-[100vh] bg-MainCol flex justify-center text-lg items-center">
      {/* Wrapper */}
      <div className="w-[80%] h-[80%] shadow-md flex items-center justify-center">
        <div>
          {/* Image Hoder  */}
          <img src={pic} />
        </div>
      </div>
    </div>
  );
}

export default StartingPage