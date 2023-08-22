import React, { useState } from "react";

const InputButton = () => {
  const [join, setJoin] = useState("Join Waitlist");
  const [width, setWidth] = useState("55%");
  const [padding, setPadding] = useState("0 30px");
  const [buttonWidth, setButtonWidth] = useState("45%");

  const joinWaitlist = () => {
    setPadding("0");
    setWidth("0%");
    setButtonWidth("100%");
    setJoin("You’ve Joined Waitlist");
    setInterval(() => {
      setPadding("0 30px");
      setWidth("55%");
      setButtonWidth("45%");
      setJoin("Join Waitlist");
    }, 3000);
  };
  return (
    <div className="relative w-[500px] h-16 p-[6px] flex border border-[#AAC] rounded-[100px]">
      <input
        type="email"
        required
        className={`text-2xl placeholder:text-[#AAC] py-[21px] px-[30px] focus:outline-none bg-transparent  transition-all ease-in-out duration-300`}
        style={{ width: width, padding: padding }}
        placeholder="Type your email"
      />
      <button
        onClick={joinWaitlist}
        className={`h-full px-8 rounded-[100px] bg-MainCol text-white text-2xl font-medium transition-all ease-in-out duration-200`}
        style={{ width: buttonWidth }}
      >
        {join}
      </button>
    </div>
  );
};

export default InputButton;
