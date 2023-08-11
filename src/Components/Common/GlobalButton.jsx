import {useState,useEffect} from 'react'

const GlobalButton = () => {
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
    <div className=" p-[50px] ">
      <button
        className={` text-[white] cursor-pointer pt-[8px] pb-[8px] pr-[16px] pl-[16px] rounded-md hover:bg-[#1238e023] hover:border-[2px] hover:border-MainCol hover:text-MainCol ease-in-out duration-500 font-semibold text-[24px] hover:rounded-tl-[20px] hover:rounded-br-[30px] ${
          scrolling ? "bg-[white]" : "bg-MainCol"
        } `}
      >
        Join Waitlist
      </button>
    </div>
  );
}

export default GlobalButton