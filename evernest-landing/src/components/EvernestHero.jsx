import React, { useState } from 'react';

const EvernestHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] relative overflow-hidden">
      {/* Background stars/particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center">
          <div className="text-orange-500 text-2xl font-bold">Evernest</div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-1 text-white cursor-pointer hover:text-orange-500 transition-colors">
            <span>Product</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex items-center space-x-1 text-white cursor-pointer hover:text-orange-500 transition-colors">
            <span>Solutions</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <a href="#" className="text-white cursor-pointer hover:text-orange-500 transition-colors">Pricing</a>
          <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-slate-900 transition-colors">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-slate-800/95 backdrop-blur-md z-20 border-t border-slate-700">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <div className="flex items-center justify-between text-white cursor-pointer hover:text-orange-500 transition-colors py-2">
              <span>Product</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center justify-between text-white cursor-pointer hover:text-orange-500 transition-colors py-2">
              <span>Solutions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="#" className="text-white cursor-pointer hover:text-orange-500 transition-colors py-2">Pricing</a>
            <button className="w-full px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-slate-900 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-12 mt-8 lg:mt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-orange-500/30 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span># AI-Powered Property Management</span>
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-serif leading-tight">
                <span className="text-white">The </span>
                <span className="text-orange-500">AI Concierge</span>
                <br />
                <span className="text-white">That Never Sleeps!</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base lg:text-lg xl:text-xl leading-relaxed max-w-lg">
              Evernest is the world's first AI-native Ecosystem for residential 
              living—streamlining property management, concierge services, 
              and supplier workflows into a 24-hour, frictionless experience.
            </p>

            {/* CTA Button
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition-colors">
              Request a Demo
            </button> */}

            {/* Trust Indicators */}
            <div className="pt-6 lg:pt-8 space-y-4">
              <p className="text-slate-400 text-xs lg:text-sm">
                Trusted by the world's leading organizations
              </p>
              
              <div className="flex flex-wrap items-center gap-4 lg:gap-8 opacity-60">
                {/* Berkeley Group Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px] lg:text-xs font-bold">BG</span>
                  </div>
                  <span className="text-slate-400 text-xs lg:text-sm">Berkeley Group</span>
                </div>
                
                {/* CBRE Logo */}
                <div className="text-slate-400 text-lg lg:text-xl font-bold">CBRE</div>
                
                {/* Ballymore Logo */}
                <div className="text-slate-400 text-xs lg:text-sm">ballymore.</div>
                
                {/* Savills Logo */}
                <div className="text-slate-400 text-xs lg:text-sm">savills</div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D House */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center">
              {/* 3D House Image with Floating Animation */}
              <div className="relative animate-float">
                <img 
                  src="/house-3d.png" 
                  alt="3D Modern House" 
                  className="w-full h-auto max-w-[280px] sm:max-w-sm lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
                />
                
                {/* Floating elements around the house */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -left-6 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/4 -right-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-20 right-4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvernestHero;