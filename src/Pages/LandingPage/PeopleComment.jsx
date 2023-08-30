import React from "react";
import pic from "../../assets/roundPic.svg";
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero
          magni a quas doloremque molestiae fugit adipisci ipsam minima nisi.
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
          <SwiperSlide>
            <PeopleCards
              text='Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional.'
              textName='John Alabi'
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCards
              text='I love Bripo! It’s so convenient and affordable. I can book a cab in minutes and pay with my Bripo wallet.'
              textName='Aminat Abubakar'
            />
          </SwiperSlide>
          <SwiperSlide>
            <PeopleCards
              text='Bripo is amazing! It’s the best solution for my business. I can dispatch rides for my clients and employees on the app and track their trips in real-time.'
              textName='Kareem Eze'
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <PeopleCards
              text=" Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional."
              textName="John Alabi"
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <PeopleCards
              text=" Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional."
              textName="John Alabi"
            />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <PeopleCards
              text=" Bripo is awesome! I use it every day to get to work and back. It’s easy to book a ride and the drivers are always friendly and professional."
              textName="John Alabi"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export const PeopleCards = ({ text, textName }) => {
  return (
    <div className='max-w-sm h-full bg-[#EFF1F3] p-8 items-center flex flex-col rounded-[20px]  border border-[#AAC]'>
      {/* Img */}
      <div className='w-24 h-24 rounded-full bg-cover '>
        <img src={pic} alt='' className='w-full ' />
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
      <div className='border-t-2 border-[#AAC] w-14 mt-8'></div>
      {/* Name div */}
      <div className='text-2xl text-[#1F2229] font-medium'>{textName}</div>
    </div>
  );
};

export default PeopleComment;
