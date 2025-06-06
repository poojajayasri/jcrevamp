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
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-white/3 blur-2xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.3}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">

        {/* Jewel Concepts Logo */}
        <div className={`mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center space-x-4 mb-12">
            {/* Logo */}
            <div className="relative">
              <div className="w-16 h-16 relative">
                {/* Shield Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-0 rounded-sm shadow-2xl"
                  style={{
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 25%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 0% 25%)'
                  }}>
                </div>
                {/* Letter C */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-r-transparent rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold tracking-wider">
                <span className="text-yellow-500">JEWEL</span>
              </div>
              <div className="text-2xl font-bold tracking-wider -mt-1">
                CONCEPTS
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl lg:text-6xl font-thin text-white mb-8 tracking-wide leading-tight">
            Website
            <br />
            <span className="text-5xl md:text-7xl text-gray-400 font-extralight">
              Coming Soon
            </span>
          </h1>

          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed tracking-wide">
            We're crafting something extraordinary.
          </p>
        </div>

        {/* Contact */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="mailto:hardyal.p@gmail.com"
            className="group inline-block px-12 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-light tracking-widest uppercase"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Minimal geometric accents */}
      <div className="absolute top-20 left-20 w-px h-20 bg-white/10"></div>
      <div className="absolute bottom-20 right-20 w-px h-20 bg-white/10"></div>
      <div className="absolute top-1/2 left-0 w-12 h-px bg-white/10"></div>
      <div className="absolute top-1/2 right-0 w-12 h-px bg-white/10"></div>
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
