import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-4 md:mb-0 px-4 md:px-8">
          <img src={Logo} alt="Logo" className="w-25 h-6 mb-2" />
          <p className="text-sm text-center md:text-left py-8">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* Right side */}
        <div className="w-full md:w-auto flex flex-col md:flex-row mt-4 md:mt-0 md:ml-8">
          <div className="md:mr-8 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Our Technologies</h3>
            <ul className="list-none list-inside">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <ul className="list-none list-inside">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analysis</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Horizontal line */}
      <div className="flex justify-center">
        <hr className="border-white w-3/4 md:w-1/2 my-6" />
      </div>
      {/* Privacy Policy and Terms & Conditions */}
      <div className="text-center text-sm">
        Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default Footer;
