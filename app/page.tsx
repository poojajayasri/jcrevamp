'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900  ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-400/10 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-yellow-500/15 to-yellow-600/20 blur-2xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">

        {/* Jewel Concepts Logo */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center space-x-4 mb-8">
            {/* Logo Recreation */}
            {/* <div className="relative">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-0 rounded-sm shadow-2xl"
                  style={{
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 25%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 0% 25%)'
                  }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-r-transparent rounded-full"></div>
                </div>
              </div>
            </div> */}
            <div className="text-white">
              <div className="text-6xl font-bold tracking-wider">
                <span className="text-yellow-500">JEWEL</span>
              </div>
              <div className="text-6xl font-bold tracking-wider -mt-1">
                CONCEPTS
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-2xl md:text-4xl font-light text-white mb-6 tracking-wide">
            <span className="inline-block">Website Currently Under Renovation</span>
            <br />
            {/* <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-medium">
            Renovation 
            </span> */}
            {/* <br /> */}
            {/* <span className="inline-block text-4xl md:text-5xl font-light text-gray-300">
              is Coming
            </span> */}
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
            We're crafting exceptional interior experiences that blend luxury with innovation.
            Our new digital presence will showcase the artistry that defines every space we create.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-80 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full origin-left">
              <div className="w-3/4 h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg animate-pulse"></div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm tracking-widest uppercase font-medium">
            Coming Soon
          </p>
        </div>

        {/* Contact Information */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your vision into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="mailto:hardyal.p@gmail.com"
              className="group px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-sm hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg tracking-wide"
            >
              <span className="flex items-center gap-3">
                Get In Touch
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            {/* <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-500 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-12 bg-yellow-500/30 animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-600 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-32 w-1 h-8 bg-yellow-500/20 animate-pulse opacity-30"></div>

      {/* Geometric Accent Lines */}
      <div className="absolute top-1/4 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-500/30"></div>
      <div className="absolute bottom-1/4 right-0 w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-500/30"></div>
    </div>
  );
}
// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       Under Construction
//     </div>
//   );
// }
