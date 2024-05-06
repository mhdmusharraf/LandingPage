import React from 'react'
import Feed from "../assets/feed.png";

const HeroSection = () => {
  return (
    <div className='relative'>
      <img src={Feed} alt="" />
      <div className='w-full lg:w-622 lg:h-306 md:w-64 h-54 bg-gradient-to-r from-rich-blue to-interstellar-blue absolute bottom-0 md:bottom-40 left-0 md:left-14 p-3 flex-shrink'>
        <p className='text-white lg:text-5xl lg:my-2 font-bold text-lg md:text-2xl'>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
        <button className='bg-yuzu-jam text-white font-bold p-2 md:p-1 my-2 rounded-md'>GET FREE CONSULTATION</button>
      </div>
    </div>
  )
}

export default HeroSection;
