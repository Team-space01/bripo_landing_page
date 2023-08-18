import React from "react";
import pic from "../../assets/Vector.png";
import pic2 from "../../assets/phoneMock.png";

const Bripo2 = () => {
  return (
    //container'
    <section
      className="w-full bg-MainCol relative py-10 bg-no-repeat bg-contain bg-[center_top_127px]"
      style={{ backgroundImage: `url(${pic})` }}
    >
      {/* Wrapper */}
      <div className="max-w-7xl w-full mx-auto ">
        <div className="flex  ">
          {/* phone div */}
          <div className="w-1/2">
            <img src={pic2} />
          </div>
          {/* text div */}
          <div className="text-white w-1/2 flex justify-end flex-col pb-20 pl-10 text-2xl font-semibold">
            <h2 className="text-5xl font-bold mb-3">How It Works </h2>
            <p>Bripo is simple to use. Just follow these easy steps</p>
            <ul className="list-disc ml-6">
              <li>Download the Bripo app from the App Store or Google Play.</li>
              <li>Create an account and add your payment method.</li>
              <li>
                Enter your pickup and drop-off locations and choose your ride
                option.
              </li>
              <li>Confirm your ride and wait for your driver to arrive.</li>
              <li> Enjoy your ride and rate your driver.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bripo2;
