'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black to-blue-900 text-white dark:text-white shadow-md px-4 sm:px-6 md:px-8 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          <Image
            src="./trang.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain rounded-xl border-0 border-gray-300 w-20 sm:w-24 md:w-28 h-auto"
          />
        </Link>

        {/* Center: Navigation Menu (desktop only) */}
        <div className="hidden md:flex space-x-6 text-sm uppercase tracking-wide font-bold">
          <Link href="#about" className="hover:text-[#58CBCA]">About</Link>
          <Link href="#highlights" className="hover:text-[#58CBCA]">Highlights</Link>
          {/* <Link href="/submit" className="hover:text-[#58CBCA]">Submit</Link> */}
          <button
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
  className="hover:text-[#58CBCA] uppercase font-bold text-sm tracking-wide"
>
  Submit
</button>

          <Link href="#contact" className="hover:text-[#58CBCA]">Contact</Link>
        </div>

        {/* Right: Social Links (desktop only) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="https://www.instagram.com/zirect_label/" target="_blank" aria-label="Instagram">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCwlUKmHKk25ZnxqA-YMvxJA?sub_confirmation=1" target="_blank" aria-label="YouTube">
            <FaYoutube className="w-5 h-5" />
          </Link>
          <Link href="https://www.facebook.com/zirectlabel" target="_blank" aria-label="Facebook">
            <FaFacebook className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm px-4 pb-4">
          <div className="flex flex-col gap-2 border-b border-gray-200 pb-4">
            <Link href="#about" className="block">About</Link>
            <Link href="#highlights" className="block">Highlights</Link>
            {/* <Link href="/submit" className="block">Submit</Link> */}
            <button
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
  className="hover:text-[#58CBCA] uppercase font-bold text-sm tracking-wide"
>
  Submit
</button>
            <Link href="#contact" className="block">Contact</Link>
          </div>
          <div className="flex gap-4 justify-start">
            <Link href="https://www.instagram.com/zirect_label/" target="_blank" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCwlUKmHKk25ZnxqA-YMvxJA?sub_confirmation=1" target="_blank" aria-label="YouTube">
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link href="https://www.facebook.com/zirectlabel" target="_blank" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
