import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import logo from "../../assets/Mainlogo.svg";
import Car from "../../assets/groupCar.png";
import GlobalText from "../../Components/Common/GlobalText";
import Getting from "../../Components/Common/Getting";

const FirstIntroPage = () => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIntro(false);
    }, 12000);
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    intro && (
      <div className='absolute  w-full  h-full z-30 overflow-hidden inset-0 bg-white flex flex-col items-center gap-16'>
        <div className='max-w-[1350px] mx-auto flex justify-between items-center px-2 py-4'>
          {/* Header */}
          <Slide
            className='w-full h-full flex justify-center'
            direction='down'
            delay={9000}
            duration={1000}
          >
            <div className='h-9 lg:h-16 flex items-center justify-center text-sm '>
              <img src={logo} alt='' className='h-full' />
            </div>
          </Slide>
        </div>

        {/* Components two */}
        <div className=' flex  items-center w-full gap-20'>
          {/* first Div */}
          <Slide
            direction='left'
            duration={1000}
            delay={10000}
            className='w-1/2 flex justify-end'
          >
            <GlobalText
              Title='The Ultimate Ride Booking and Dispatching App '
              subtext='Book rides and cabs online from a network of trusted and professional drivers'
            />
          </Slide>
          {/* Second div */}
          <Slide
            direction='right'
            duration={1000}
            delay={10000}
            className='w-1/2 flex justify-end'
          >
            <img src={Car} alt='' />
          </Slide>
        </div>

        {/* Lastest Components */}
        <Slide direction='up' duration={1000} delay={11000}>
          <Getting />
        </Slide>
      </div>
    )
  );
};

export default FirstIntroPage;
