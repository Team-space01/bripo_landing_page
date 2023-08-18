import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { TbBus } from "react-icons/tb";
const WhyBripo = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    // speed: 700,
    slidesToShow: 1,
    slidesToScroll: 3,
    rtl: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    //Container
    <div className="w-full h-[80vh] bg-MainCol flex justify-center">
      {/* Wrapper */}
      <div className="w-[73%] flex flex-col bg-[red] p-[20px] ">
        {/* Head tiller */}
        <div className="text-[#ffff] font-bold text-[48px] text-center ">
          Why Bripo
        </div>


        {/* Card Holders */}
        <div className="  overflow-hidden">

          <Slider {...settings}>
            {/* Card 1 */}
            <div className="w-[300px] h-[fit] bg-[#ffff] p-[20px] shadow-md gap-2 flex flex-col rounded-[15px]">
              {/*Icon */}
              <div className="w-12 bg-[#EFF1F3] h-11 flex justify-center items-center rounded-full text-MainCol ">
                <TbBus />
              </div>

              {/* Tittle */}
              <div className="text-[28px] font-bold text-MainCol">
                Dispatching feature
              </div>

              {/* Text */}
              <div className="text-[#AAC] text-[20px] ">
                Bripo allows you to perform dispatching operations for your
                business or organization. You can create and manage multiple
                accounts for your employees, clients, or partners. You can also
                assign rides, monitor trips, and generate reports on the app. 
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[300px] h-[fit] bg-[#ffff] p-[20px] shadow-md gap-2 flex flex-col rounded-[15px]">
              {/*Icon */}
              <div className="w-12 bg-[#EFF1F3] h-11 flex justify-center items-center rounded-full text-MainCol ">
                <TbBus />
              </div>

              {/* Tittle */}
              <div className="text-[28px] font-bold text-MainCol">
                Dispatching feature
              </div>

              {/* Text */}
              <div className="text-[#AAC] text-[20px] ">
                Bripo allows you to perform dispatching operations for your
                business or organization. You can create and manage multiple
                accounts for your employees, clients, or partners. You can also
                assign rides, monitor trips, and generate reports on the app. 
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[300px] h-[fit] bg-[#ffff] p-[20px] shadow-md gap-2 flex flex-col rounded-[15px]">
              {/*Icon */}
              <div className="w-12 bg-[#EFF1F3] h-11 flex justify-center items-center rounded-full text-MainCol ">
                <TbBus />
              </div>

              {/* Tittle */}
              <div className="text-[28px] font-bold text-MainCol">
                Dispatching feature
              </div>

              {/* Text */}
              <div className="text-[#AAC] text-[20px] ">
                Bripo allows you to perform dispatching operations for your
                business or organization. You can create and manage multiple
                accounts for your employees, clients, or partners. You can also
                assign rides, monitor trips, and generate reports on the app. 
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-[300px] h-[fit] bg-[#ffff] p-[20px] shadow-md gap-2 flex flex-col rounded-[15px]">
              {/*Icon */}
              <div className="w-12 bg-[#EFF1F3] h-11 flex justify-center items-center rounded-full text-MainCol ">
                <TbBus />
              </div>

              {/* Tittle */}
              <div className="text-[28px] font-bold text-MainCol">
                Dispatching feature
              </div>

              {/* Text */}
              <div className="text-[#AAC] text-[20px] ">
                Bripo allows you to perform dispatching operations for your
                business or organization. You can create and manage multiple
                accounts for your employees, clients, or partners. You can also
                assign rides, monitor trips, and generate reports on the app. 
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WhyBripo