import { useEffect, useState } from "react";
import logo from "../../assets/Mainlogo.svg";
import GlobalButton from "../Common/GlobalButton";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    //Container
    <div
      className={`w-full h-[90px] z-10 sticky top-0 shadow-lg  ${
        scrolling ? "bg-[white]" : "bg-[white]"
      }   `}
    >
      <div className='max-w-[1350px] mx-auto flex h-full items-center px-2 '>
        {/* Wrapper */}
        <div className='w-full h-full flex justify-between items-center animate__container'>
          <div className='h-9 lg:h-16 flex items-center justify-center animate__animated animate__bounce text-sm '>
            <img src={logo} alt='' className='h-full' />
          </div>
          <div className='sm:flex' hidden>
            <GlobalButton
              text='join waitlist'
              padding='h-[54px]'
              myClass='rounded-[30px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return ( ---
//     <div
//       className={`${
//         scrolling ? "bg-[red]": "bg-[blue]"
//       } p-4 fixed top-0 left-0 w-full h-10 text-[white]`}
//     >
//       <button >
//         {scrolling ? "Scrolled" : "Top"}
//       </button>

//     </div>
//   );
// };

// export default Header;

// import logo from "../../assets/Mainlogo.svg"
// import GlobalButton from "../Common/GlobalButton";

// const Header = () => {
//   return (
//     //Container
//    <div className="w-full h-[120px] flex justify-center items-center sticky top-0">
//     {/* Wrapper */}
//     <div className="w-[90%] h-[100%] flex justify-between items-center">
//       <div className="">
//         <img src= {logo} alt="" />
//       </div>
//       <div>
//         <GlobalButton/>
//       </div>
//     </div>
//    </div>
//   );
// }

// export default Header
