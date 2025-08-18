'use client';

import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section id="about" className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <ScrollReveal>
        <div className="relative max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <h1 className="absolute top-0 left-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black italic text-white opacity-60 select-none">
            THE TRUE<br />PULSE<br />OF PHONK
          </h1>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black italic text-white">
            THE TRUE<br />PULSE<br />OF PHONK
          </h1>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-10 sm:mt-12 md:mt-16">
        <button
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
  className="inline-block border border-white px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full text-xs sm:text-sm md:text-base tracking-wider hover:bg-white hover:text-black hover:border-black transition duration-300"
>
  LET&apos;S SEND YOUR DEMO
</button>
                </div>
      </ScrollReveal>
      
    </section>
  );
}