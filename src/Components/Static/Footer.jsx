import Getting from "../Common/Getting";

const Footer = () => {
  return (
    //Container
    <div className=' w-full h-full flex justify-center pb-6 '>
      {/* Wrapper */}
      <div className='w-3/4 flex justify-center items-center text-center flex-col gap-3 mb-3 '>
        {/* First Div */}
        <div className='font-bold text-2xl lg:text-4xl xl:text-5xl text-MainCol mt-[30px] pb-2'>
          Ready to Join The Waitlist?
        </div>
        {/* Second */}
        <div className='w-full xl:w-3/4 pb-2 font-semibold text-[#AAC] text-lg xl:text-2xl'>
          Don’t miss this opportunity to be one of the first to try Bripo when
          it launches. Join the waitlist today and get 50% off your first ride
          when Bripo goes live.
        </div>
        {/* Last Div */}

        <Getting />
      </div>
    </div>
  );
};

export default Footer;
