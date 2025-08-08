'use client';

import React from 'react';

export default function MarqueeText() {
  return (
    <div className="relative overflow-hidden border-y border-white bg-gradient-to-r from-black to-blue-900 text-white py-2">
      {/* Left & Right gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-blue-900 to-transparent z-10" />

      {/* Scrolling text */}
      <div className="whitespace-nowrap animate-marquee">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="mx-8 font-bold text-xs md:text-sm tracking-widest text-white"
          >
            ✷ IT ALL BEGINS WITH AN IDEA
          </span>
        ))}
      </div>
    </div>
  );
}
