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
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-gray-100/50 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gray-200/30 blur-2xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.3}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">

        {/* Logo */}
        <div className={`mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-12">
            <img 
              src="/WhatsApp Image 2025-07-08 at 17.13.09.jpeg" 
              alt="Logo" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} -mt-24`}>
          <h1 className="text-3xl lg:text-6xl font-thin text-black mb-8 tracking-wide leading-tight">
            Website
            <br />
            <span className="text-5xl md:text-7xl text-gray-600 font-extralight">
              Coming Soon
            </span>
          </h1>

          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl leading-relaxed tracking-wide">
            We're crafting something extraordinary.
          </p>
        </div>

        {/* Contact */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="mailto:hardyal.p@gmail.com"
            className="group inline-block px-12 py-4 border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300 text-lg font-light tracking-widest uppercase"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Minimal geometric accents */}
      <div className="absolute top-20 left-20 w-px h-20 bg-gray-300/30"></div>
      <div className="absolute bottom-20 right-20 w-px h-20 bg-gray-300/30"></div>
      <div className="absolute top-1/2 left-0 w-12 h-px bg-gray-300/30"></div>
      <div className="absolute top-1/2 right-0 w-12 h-px bg-gray-300/30"></div>
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
