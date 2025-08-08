'use client';
import Image from 'next/image';
import FileDrop from './FileDrop';
import VantaBackground from './VantaBackground';

export default function UploadPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <VantaBackground />

      <div className="text-center mb-10 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Loop Hit Music</h1>
      </div>

      <div className="w-full max-w-xl z-10">
        <FileDrop />
      </div>
    </div>
  );
}
