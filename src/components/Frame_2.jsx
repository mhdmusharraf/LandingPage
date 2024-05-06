import React from "react";
import Search from "../assets/search.png";

const Frame_2 = () => {
  return (
    <div className="my-4 mx-4 flex">
      {/* Left side */}
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-heading-purple my-2">
        Digital Strategy Consulting        </h2>
        <p className="text-black my-2">
        Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
        </p>
        <div>
          <button className="bg-yuzu-jam text-white font-bold px-4 py-2 rounded-lg flex items-center my-2">
            LEARN MORE
          </button>
        </div>

        {/* Right side */}
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={Search} alt="Right Image" className="w-414 h-414" />
      </div>
    </div>
  );
};

export default Frame_2;
