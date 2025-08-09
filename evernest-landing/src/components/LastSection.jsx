import React from 'react';

const LastSection = () => {
  return (
    <div className="last-section relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image - Earth from space */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/earth-bg.png')` // Replace with your earth background image path
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center max-w-4xl mx-auto pt-50000">
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4">
            Evernest : The Signature
          </h1>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8">
            Masterpiece of <span className="text-orange-500 font-normal">POLYMAITHS</span>
          </h2>
        </div>

        {/* Description Text */}
        <div className="mb-12 max-w-2xl">
          <p className="text-white/90 text-sm md:text-base lg:text-lg font-light leading-relaxed">
            Born from the minds at POLYMAITHS—a radical AI agency where engineering meets artistry—Evernest represents the pinnacle of our vision:
          </p>
          <p className="text-white/90 text-sm md:text-base lg:text-lg font-light leading-relaxed mt-2">
            to redefine how humans live, work, and interact with space.
          </p>
        </div>

        {/* Get Started Button */}
        {/* <div className="mb-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base md:text-lg">
            Get Started
          </button>
        </div> */}
      </div>

      {/* Subtle stars/particles effect overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-4000"></div>
      </div>
    </div>
  );
};

export default LastSection;