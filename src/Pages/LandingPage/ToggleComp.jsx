import React from "react";
import mac from "../../assets/Mackbook.png";
import GlobalText from "../../Components/Common/GlobalText";
import ToggleButton from "../../Components/Common/ToggleButton";

const ToggleComp = () => {
  return (
    //Container
    <div className='max-w-7xl mx-auto flex justify-center items-center mt-[40px] mb-[20px]   p-4 md:px-10 xl:p-0'>
      {/* Wrapper */}
      <div className='flex text-end gap-10 items-center'>
        {/* Img div */}
        <div className='hidden lg:flex'>
          <img src={mac} />
        </div>
        {/* Text div */}
        <div className=' md:w-[500px]  flex flex-col gap-6 '>
          <GlobalText
            Title='Frequently Asked Questions'
            subtext='Here are some of the common questions we get asked about Bripo'
            aliging='text-left lg:text-right'
          />
          <div className='w-full space-y-3'>
            <ToggleButton
              Title='When will Bripo launch? '
              subtext='We’re working hard to launch Bripo as soon as possible. We expect to go live in the next few months. If you join the waitlist, you’ll be notified when we launch. '
            />
            <ToggleButton
              Title='Where is Bripo available?'
              subtext='We’re starting with a few major cities in the Nigeria, such as Lagos, Abuja, Cross-Rivers, etc. We plan to expand to more cities and countries in the future.'
            />
            <ToggleButton
              Title='How do I become a Bripo driver?'
              subtext='If you’re interested in becoming a Bripo driver, please visit our website and fill out an application form. We’ll review your application and get back to you soon. '
            />
            <ToggleButton
              Title='How do I contact Bripo support?'
              subtext='If you have any questions or issues with Bripo, please email us at support@bripo.com or call us at 1-800-BRIPO. We’re available 24/7 to help you. '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleComp;
