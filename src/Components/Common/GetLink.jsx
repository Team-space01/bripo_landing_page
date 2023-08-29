import React, { useState } from "react";

const GetLink = () => {
  const [refID, setRefID] = useState("");
  const [prepForCopy, setPrepForCopy] = useState(false);
  const [copied, setCopied] = useState(false);
  const submitRefId = () => {
    if (refID !== "") {
      setPrepForCopy(true);
    }
  };
  const copyLink = () => {
    if (prepForCopy === true) {
      setCopied(true);
    }
  };
  return (
    <div>
      <div className='w-[300px] sm:w-[335px] h-[60px] rounded-full p-2 border-[1px] border-[lightgrey] gap-2 flex '>
        <input
          onChange={(e) => {
            setRefID(e.target.value);
          }}
          className='w-4/6 outline-none placeholder:text-md pl-1 border-none'
          type='text'
          placeholder='Please enter your referral id'
        />
        {prepForCopy ? (
          <div
            onClick={copyLink}
            className='rounded-full cursor-pointer bg-MainCol text-white flex-1 flex justify-center items-center'
          >
            {copied ? "Copied" : " Copy"}
          </div>
        ) : (
          <div
            onClick={submitRefId}
            className='rounded-full cursor-pointer bg-MainCol text-white flex-1 flex justify-center items-center'
          >
            Get Link
          </div>
        )}
      </div>
    </div>
  );
};

export default GetLink;
