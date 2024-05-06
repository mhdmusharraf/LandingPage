import React from "react";
import Computer from "../assets/computer.png";

const Frame_1 = () => {
  return (
    <div className="my-4 mx-4 flex">
      {/* Left side */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={Computer}
          alt="Left Image"
          className="w-414 h-414"
        />
      </div>
      
      {/* Right side */}
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-heading-purple my-2">
          Web & Mobile App Development
        </h2>
        <p className="text-black my-2">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <div>
        <button className="bg-yuzu-jam text-white font-bold px-4 py-2 rounded-lg flex items-center my-2">
          LEARN MORE
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Frame_1;
