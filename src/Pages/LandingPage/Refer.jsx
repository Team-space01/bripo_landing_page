import React from "react";
import GlobalText from "../../Components/Common/GlobalText";
import InputButton from "../../Components/Common/InputButton";
import GetLink from "../../Components/Common/GetLink";

const Refer = () => {
  return (
    //Container
    <div className='max-w-7xl mx-auto flex justify-center  mt-[40px] mb-[20px] flex-col p-4 md:px-10 xl:p-0'>
      {/* Wrapper */}
      <div className='flex w-full flex-col gap-4'>
        <GlobalText
          Title='Refer Your Friends and Get Free Rides'
          subtext='Refer Your Friends and Get Free Rides Want to get more out of Bripo? Invite your friends to join the waitlist and get free rides when they sign up. Just share your unique referral code with them and you’ll both get $15 off your next ride.'
        />
        <GetLink />
      </div>
    </div>
  );
};

export default Refer;
