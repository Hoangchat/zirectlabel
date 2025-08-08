'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: unknown;
    THREE: unknown;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<unknown>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.VANTA?.BIRDS &&
      window.THREE &&
      vantaRef.current
    ) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000, // có thể chỉnh
        color1: 0xff0000, // màu cánh chim
        color2: 0xffff00, // màu đuôi chim
        birdSize: 1.2,
        wingSpan: 25.0,
        separation: 60.0,
        alignment: 50.0,
        cohesion: 10.0
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
}
