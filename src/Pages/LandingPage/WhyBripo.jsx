import React from "react";
import { TbBus } from "react-icons/tb";
import { BiSolidCheckShield } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const WhyBripo = () => {
  return (
    //Container
    <div className="w-full py-20 bg-MainCol flex justify-center">
      {/* Wrapper */}
      <div className="px-10 xl:p-0  w-full xl:w-[73%] flex flex-col items-center justify-center ">
        {/* Head tiller */}
        <div className="text-[#ffff] font-bold text-[48px] text-center mb-[60px] ">
          Why Bripo
        </div>

        {/* Card Holders */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          modules={[Autoplay]}
          className="w-full overflow-hidden h-max"
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
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Card
              header="Easy booking"
              details="Bripo lets you book a ride or a cab in seconds. You can choose from different vehicle types and options, such as sedan, SUV, minivan, or luxury car. You can also schedule your ride in advance or request it on-demand."
              icon={TbBus}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Reliable service"
              details="Bripo connects you with the best drivers in your area who have
              passed background checks and driving tests. You can also track
              your driver’s location and arrival time on the app. "
              icon={BiSolidCheckShield}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Affordable pricing"
              details="Bripo offers you transparent and competitive pricing for your
              ride. You can see the estimated fare before you book and pay with
              your credit card, debit card, or Bripo wallet. You can also tip
              your driver and get a receipt via email. "
              icon={TbBus}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Dispatching feature"
              details="Bripo allows you to perform dispatching operations for your
              business or organization. You can create and manage multiple
              accounts for your employees, clients, or partners. You can also
              assign rides, monitor trips, and generate reports on the app. "
              icon={BiSolidCheckShield}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Safe and comfortable"
              details="Bripo ensures your safety and comfort during your ride. You can
              contact your driver or the Bripo support team at any time through
              the app. You can also rate your driver and provide feedback after
              each ride. "
              icon={TbBus}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Easy booking"
              details="Bripo lets you book a ride or a cab in seconds. You can choose from different vehicle types and options, such as sedan, SUV, minivan, or luxury car. You can also schedule your ride in advance or request it on-demand."
              icon={TbBus}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Reliable service"
              details="Bripo connects you with the best drivers in your area who have
              passed background checks and driving tests. You can also track
              your driver’s location and arrival time on the app. "
              icon={BiSolidCheckShield}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Affordable pricing"
              details="Bripo offers you transparent and competitive pricing for your
              ride. You can see the estimated fare before you book and pay with
              your credit card, debit card, or Bripo wallet. You can also tip
              your driver and get a receipt via email. "
              icon={TbBus}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Dispatching feature"
              details="Bripo allows you to perform dispatching operations for your
              business or organization. You can create and manage multiple
              accounts for your employees, clients, or partners. You can also
              assign rides, monitor trips, and generate reports on the app. "
              icon={BiSolidCheckShield}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              header="Safe and comfortable"
              details="Bripo ensures your safety and comfort during your ride. You can
              contact your driver or the Bripo support team at any time through
              the app. You can also rate your driver and provide feedback after
              each ride. "
              icon={TbBus}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const Card = ({ header, details, icon: Icon }) => {
  return (
    <div className="max-w-sm h-full bg-[#ffff] p-8 shadow-md gap-2 flex flex-col rounded-[15px]">
      {/*Icon */}
      <div className="w-14 bg-[#EFF1F3] h-14 flex justify-center items-center rounded-full text-MainCol mb-4">
        <Icon className="text-2xl" />
      </div>

      {/* Tittle */}
      <div className="text-[28px] font-bold text-MainCol leading-none">
        {header}
      </div>

      {/* Text */}
      <div className="text-[#AAC] text-[20px] leading-[24px]">{details}</div>
    </div>
  );
};

export default WhyBripo;
