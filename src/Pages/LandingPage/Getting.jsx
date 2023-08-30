import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Getting = () => {
  const [refID, setRefID] = useState("");
  const [prepForCopy, setPrepForCopy] = useState(false);
  const submitRefId = () => {
    if (refID !== "") {
      setPrepForCopy(true);
    }
  };
  return (
    <div>
      <div className="w-[335px] h-[60px] rounded-full p-2 border-[1px] border-[lightgrey] gap-2 flex ml-5">
        {prepForCopy ? null : (
          <input
            onChange={(e) => {
              setRefID(e.target.value);
            }}
            className="w-3/5 outline-none placeholder:text-md pl-1 border-none"
            type="email"
            placeholder="Type your email"
          />
        )}
        {prepForCopy ? (
          <div className="rounded-full cursor-pointer bg-MainCol text-white flex-1 flex justify-center items-center">
            <div className="flex items-center gap-2">
              you have joined waitlist
              <AiOutlineCheck />
            </div>
          </div>
        ) : (
          <div
            onClick={submitRefId}
            className="rounded-full cursor-pointer bg-MainCol text-white flex-1 flex justify-center items-center"
          >
            Join Waitlist
          </div>
        )}
      </div>
    </div>
  );
};

export default Getting;
