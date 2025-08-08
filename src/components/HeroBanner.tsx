'use client';

import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section id="about" className="bg-gradient-to-r from-black to-blue-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <ScrollReveal>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-black italic text-white opacity-60">
            WHERE<br />PHONK HITS<br />DIFFERENT
          </h1>
          <h1 className="relative text-6xl md:text-8xl font-black italic text-white">
            WHERE<br />PHONK HITS<br />DIFFERENT
          </h1>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 md:mt-16">
          <Link href="/submit" className="inline-block border border-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base tracking-wider hover:bg-white hover:text-black hover:border-black transition duration-300">
            LET&apos;S SEND YOUR DEMO
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}