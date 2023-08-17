import React from 'react'
import pic from "../../assets/bripoLogo.svg";
import pic2 from "../../assets/logo-transparent.png";
import pic3 from "../../assets/logo-white.png"

const StartingPage = () => {
  return (
    //Main Container
    <div className="animate-disappear">
      <div className="bg-MainCol flex justify-center text-lg items-center flex-wrap absolute w-screen h-screen inset-0 overflow-hidden ">
        <AnimationComponent1 />
        <AnimationComponent2 />
        <AnimationComponent3 />
      </div>
    </div>
  );
}

export const AnimationComponent1 = () => {
  return (
    <div className="animate-elDisappear1">
      {/* Image Hoder  */}
      <img src={pic} />
    </div>
  );
}

export const AnimationComponent2 = () => {
  return (
    <div className="w-[80%] h-[80%] shadow-2xl hidden items-center justify-center p-[10px] animate-elDisappear2">
      <div>
        {/* Image Hoder  */}
        <img src={pic2} />
      </div>
    </div>
  );
};

export const AnimationComponent3 = () => {
  return (
    <div className="w-[80%] h-[80%] shadow-md hidden items-center justify-center animate-elDisappear3">
      <div>
        {/* Image Hoder  */}
        <img src={pic3} />
      </div>
    </div>
  );
}







export default StartingPage