import React from "react";
import pic from "../../assets/roundPic.svg";
import pic2 from "../../assets/RoundPic2.svg";
import pic3 from "../../assets/RoundPic3.svg";
import { PiQuotesFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PeopleComment = () => {
  return (
    //Container
    <div className='w-full flex justify-center items-center m-0'>
      {/* Wrapper */}
      <div className='px-10  xl:p-0  w-full xl:w-[73%] flex flex-col  justify-center  '>
        {/* Tittle */}
        <div className=' font-bold text-2xl lg:text-4xl xl:text-5xl text-MainCol mt-[30px] pb-3'>
          What People are Saying
        </div>
        {/* Text */}
        <div className=' w-full pb-10 font-semibold text-[#AAC] text-lg xl:text-2xl'>
          Don’t just take our word for it. Here are some of the reviews from our
          beta testers who have tried Bripo.
        </div>

        {/* Card holder */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          modules={[Autoplay]}
          className='w-full overflow-hidden h-max'
          breakpoints={{
            768: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1023: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className='h-[470px]'>
            <PeopleCards
              pixing={pic3}
              text='Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional.'
              textName='John Alabi'
            />
          </SwiperSlide>
          <SwiperSlide className='h-[470px]'>
            <div className='max-w-sm h-full  bg-[#EFF1F3] p-8 items-center flex flex-col rounded-[20px]  border border-[#AAC]'>
              {/* Img */}
              <div className='w-24 h-24 rounded-full bg-cover '>
                <img src={pic2} alt='' className='w-full ' />
              </div>
              {/* icon */}
              <div className='  pt-5'>
                <PiQuotesFill className=' text-[30px] text-MainCol' />
              </div>
              {/* text */}
              <div className='text-center text-[#AAC] text-2xl leading-[27px]'>
                I love Bripo! It’s so convenient and affordable. I can book a
                cab in minutes and pay with my Bripo wallet.
              </div>
              {/* line div */}
              <div className='border-t-2 border-[#AAC] w-14 mt-[20px]'></div>
              {/* Name div */}
              <div className='text-2xl text-[#1F2229] font-medium'>
                Aminat Abubakar
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='h-[470px]'>
            <PeopleCards
              pixing={pic}
              text='Bripo is amazing! It’s the best solution for my business. I can dispatch rides for my clients and employees on the app and track their trips in real-time.'
              textName='Kareem Eze'
            />
          </SwiperSlide>
          <SwiperSlide className='h-[470px]'>
            <PeopleCards
              pixing={pic3}
              text=' Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional.'
              textName='John Alabi'
            />
          </SwiperSlide>
          <SwiperSlide className='h-[470px]'>
            <PeopleCards
              pixing={pic}
              text='Bripo is amazing! It’s the best solution for my business. I can dispatch rides for my clients and employees on the app and track their trips in real-time.'
              textName='Kareem Eze'
            />
          </SwiperSlide>
          <SwiperSlide className='h-[470px]'>
            <div className='max-w-sm h-full  bg-[#EFF1F3] p-8 items-center flex flex-col rounded-[20px]  border border-[#AAC]'>
              {/* Img */}
              <div className='w-24 h-24 rounded-full bg-cover '>
                <img src={pic2} alt='' className='w-full ' />
              </div>
              {/* icon */}
              <div className='  pt-5'>
                <PiQuotesFill className=' text-[30px] text-MainCol' />
              </div>
              {/* text */}
              <div className='text-center text-[#AAC] text-2xl leading-[27px]'>
                I love Bripo! It’s so convenient and affordable. I can book a
                cab in minutes and pay with my Bripo wallet.
              </div>
              {/* line div */}
              <div className='border-t-2 border-[#AAC] w-14 mt-[20px]'></div>
              {/* Name div */}
              <div className='text-2xl text-[#1F2229] font-medium'>
                Aminat Abubakar
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const PeopleCards = ({ text, textName, pixing }) => {
  return (
    <div className='max-w-sm h-full  bg-[#EFF1F3] p-8 items-center flex flex-col rounded-[20px]  border border-[#AAC]'>
      {/* Img */}
      <div className='w-24 h-24 rounded-full bg-cover '>
        <img src={pixing} alt='' className='w-full ' />
      </div>
      {/* icon */}
      <div className='  pt-5'>
        <PiQuotesFill className=' text-[30px] text-MainCol' />
      </div>
      {/* text */}
      <div className='text-center text-[#AAC] text-2xl leading-[27px]'>
        {text}
      </div>
      {/* line div */}
      <div className='border-t-2 border-[#AAC] w-14 mt-[20px]'></div>
      {/* Name div */}
      <div className='text-2xl text-[#1F2229] font-medium'>{textName}</div>
    </div>
  );
};

export default PeopleComment;

//  <PeopleCards
//    pixing={pic}
//    text='I love Bripo! It’s so convenient and affordable. I can book a cab in minutes and pay with my Bripo wallet.'
//    textName='Aminat Abubakar'
//  />;
