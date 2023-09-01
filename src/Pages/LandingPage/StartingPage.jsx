import React, { useEffect, useState } from "react";
import pic from "../../assets/bripoLogo.svg";
import pic2 from "../../assets/logo-transparent.png";
import pic3 from "../../assets/logo-white.png";
import { Slide } from "react-awesome-reveal";

const StartingPage = () => {
  const [anime1, setAnime1] = useState(true);
  const [anime2, setAnime2] = useState(false);
  const [anime3, setAnime3] = useState(false);
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnime1(false);
      setAnime2(true);
    }, 3000);
    const animationTimeout2 = setTimeout(() => {
      setAnime2(false);
      setAnime3(true);
    }, 6000);
    const animationTimeout3 = setTimeout(() => {
      setAnime3(false);
      setWelcome(false);
    }, 9000);
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    welcome && (
      <div className='bg-MainCol flex justify-center text-lg items-center flex-wrap absolute w-full h-screen inset-0 overflow-hidden z-50'>
        <div className='w-[80%] h-[80%] shadow-2xl flex items-center justify-center p-[10px]'>
          <div className='w-[467px] overflow-hidden flex justify-center'>
            {anime1 && <AnimationComponent1 />}
            {anime2 && <AnimationComponent2 />}
            {anime3 && <AnimationComponent3 />}
          </div>
        </div>
      </div>
    )
  );
};

export const AnimationComponent1 = () => {
  return (
    <Slide direction='right' duration={2000}>
      {/* Image Hoder  */}
      <img src={pic} />
    </Slide>
  );
};

export const AnimationComponent2 = () => {
  return (
    <Slide direction='right' duration={2000}>
      {/* Image Hoder  */}
      <img src={pic2} />
    </Slide>
  );
};

export const AnimationComponent3 = () => {
  return (
    <Slide direction='right' duration={2000}>
      {/* Image Hoder  */}
      <img src={pic3} />
    </Slide>
  );
};

export default StartingPage;
