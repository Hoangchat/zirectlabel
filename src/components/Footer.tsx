'use client';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
export default function Footer() {

  return (
    <footer className="bg-[#040e30] text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
  {/* Social Links - Center */}
  <div className="w-full flex justify-center gap-4">
    <Link href="https://www.instagram.com/zirect_label/" target="_blank" aria-label="Instagram">
      <FaInstagram className="w-10 h-10" />
    </Link>
    <Link href="https://www.youtube.com/channel/UCXMBpneqrohBAOBwLeM1NDw?sub_confirmation=1" target="_blank" aria-label="YouTube">
      <FaYoutube className="w-10 h-10" />
    </Link>
    <Link href="https://www.facebook.com/zirectlabel" target="_blank" aria-label="Facebook">
      <FaFacebook className="w-10 h-10" />
    </Link>
  </div>
</div>
    </footer>
  );
}
