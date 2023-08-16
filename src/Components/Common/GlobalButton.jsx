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
    <div className="">
      <button
        className={` text-[white] cursor-pointer w-[150px] h-[50px]  rounded-md hover:bg-[#1238e023] hover:border-[2px] hover:border-MainCol hover:text-MainCol ease-in-out duration-500 font-semibold text-[24px] hover:rounded-tl-[20px] hover:rounded-br-[30px] ${
          scrolling ? "bg-MainCol" : "bg-MainCol"
        } `}
      >
        Join Waitlist
      </button>
    </div>
  );
}

export default GlobalButton