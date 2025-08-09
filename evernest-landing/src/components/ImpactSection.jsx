import React from 'react';

const ImpactSection = () => {
  return (
    <div className="impact-section relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/background.png')` // Replace with your background image path
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-white text-6xl lg:text-7xl font-light tracking-wide mb-2">
            Evernest
          </h1>
          <p className="text-white/90 text-lg lg:text-xl font-light">
            # AI-Powered Property Management
          </p>
        </div>

        {/* Impact Stats Cards Container */}
        <div className="stats-cards flex flex-wrap gap-6 mb-8 lg:mb-0 max-w-4xl">
          
          {/* Card 1 - Hours Saved */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[220px] border border-white/20 shadow-lg">
            <div className="text-white text-2xl lg:text-3xl font-semibold mb-2">
              200% hours saved
            </div>
            <div className="text-white/80 text-sm font-light">
              per user annually
            </div>
          </div>

          {/* Card 2 - Cost Reduction */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[220px] border border-white/20 shadow-lg">
            <div className="text-white text-2xl lg:text-3xl font-semibold mb-2">
              15-20% reduction
            </div>
            <div className="text-white/80 text-sm font-light">
              in operational cost
            </div>
          </div>

          {/* Card 3 - Automated Workflows */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[220px] border border-white/20 shadow-lg">
            <div className="text-white text-lg lg:text-xl font-semibold mb-2">
              Fully Automated
            </div>
            <div className="text-white/80 text-sm font-light">
              workflows
            </div>
          </div>

          {/* Card 4 - Resident Satisfaction */}
          <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[220px] border border-white/20 shadow-lg">
            <div className="text-white text-lg lg:text-xl font-semibold mb-2">
              Higher Resident
            </div>
            <div className="text-white/80 text-sm font-light">
              satisfaction scores
            </div>
          </div>
        </div>
      </div>

      {/* Robot Character - Positioned on the right side */}
      <div className="robot-container absolute right-8 lg:right-16 bottom-0 lg:bottom-8">
        <img 
          src="/robot.png" // Replace with your robot image path
          alt="AI Robot Assistant" 
          className="w-64 lg:w-[40rem] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Decorative Elements - Vertical Lines matching the design */}
      <div className="absolute right-0 top-0 h-full w-20 opacity-20 hidden lg:block">
        <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-white/40 to-transparent ml-6"></div>
        <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent ml-10 -mt-full"></div>
        <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent ml-14 -mt-full"></div>
      </div>
    </div>
  );
};

export default ImpactSection;