import React from "react";
import GlobalText from "../../Components/Common/GlobalText";
import pic from "../../assets/phone2.svg";
import pic2 from "../../assets/Phone1.svg";
import GlobalButton from "../../Components/Common/GlobalButton";

const IntroSession = () => {
  return (
    //Container
    <div className='max-w-7xl mx-auto flex justify-center items-center mt-[40px] mb-[20px] flex-col  p-4 md:px-10 xl:p-0'>
      {/* Wrapper */}
      <div className='w-full flex justify-center  flex-col sm:flex-row'>
        {/* First box */}
        <div className=' sm:w-1/2 w-full md:mr-[30px] mr-0 '>
          <img src={pic} />
        </div>
        {/* second div */}
        <div className='w-full md:w-1/2 md:mt-[50px] '>
          <GlobalText
            Title=' Introducting Bripo!'
            subtext='Bripo is a new app that lets you book rides and cabs online from a
        network of trusted and professional drivers. Whether you need a ride for
        yourself, your family, or your business, Bripo has you covered'
            aliging='lg:text-right'
          />
        </div>
      </div>

      {/* Wrapper 2 */}
      <div className='w-full flex justify-center mt-[20px]'>
        {/* First box */}
        <div className='w-full md:w-[50%] flex md:mr-[30px] mr-0 flex-col justify-center gap-4 mt-[50px]'>
          <GlobalText
            Title='Join the waitlist! '
            subtext='Join the Waitlist and Get 50% Off Your First Ride. Bripo is launching soon, but you can get a special offer by joining the waitlist. Just enter your email address below and you’ll get 50% off your first ride when Bripo goes live.'
            aliging='lg:text-right'
          />
          <GlobalButton
            myClass='rounded-[30px]'
            text='Join waitlist'
            padding=' py-3 '
          />
        </div>
        {/* second div */}
        <div className='md:w-[50%] hidden  justify-center md:flex '>
          <img src={pic2} />
        </div>
      </div>
    </div>
  );
};

export default IntroSession;
