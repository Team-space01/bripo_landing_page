import React, { useState } from "react";

const InputButton = () => {
  const [join, setJoin] = useState("Get Link");
  const [width, setWidth] = useState("40%");
  const [padding, setPadding] = useState("0 20px");
  const [buttonWidth, setButtonWidth] = useState("%");

  const joinWaitlist = () => {
    setPadding("0");
    setWidth("0%");
    setButtonWidth("100%");
    setJoin("You’ve Joined Waitlist");
    setInterval(() => {
      setPadding("0 20px");
      setWidth("40%");
      setButtonWidth("40%");
      setJoin("Get Link");
    }, 3000);
  };
  return (
    <div className="relative w-[350px] h-16 p-[6px] flex border border-[#AAC] rounded-[100px]">
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
