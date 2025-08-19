'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-[#040e30] text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Subscribe Form - Left */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-3">Email</h4>
          <form onSubmit={handleSubmit} className="flex max-w-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-grow p-2 rounded-l bg-white text-black text-sm"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 rounded-r hover:bg-blue-600 text-sm"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Social Links - Right */}
        <div className="w-full flex justify-center md:justify-end gap-4">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <FaYoutube className="w-5 h-5" />
          </Link>
          <Link href="https://facebook.com" target="_blank" ảia-label="Facebook">
            <FaFacebook className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </footer>
  );
}
