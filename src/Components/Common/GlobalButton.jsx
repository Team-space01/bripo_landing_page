import { useState, useEffect } from "react";

const GlobalButton = ({ myClass, text, padding }) => {
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
    <div className="">
      <button
        className={` text-[white] cursor-pointer hover:bg-[#1238e023] hover:border-[2px] hover:border-MainCol hover:text-MainCol ease-in-out duration-500 font-semibold text-[24px] hover:rounded-tl-[0px] hover:rounded-br-[0px] ${padding} px-10 ${
          scrolling ? "bg-MainCol" : "bg-MainCol"
        }  ${myClass}`}
      >
        {text}
      </button>
    </div>
  );
};

export default GlobalButton;
