'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const playlistData = [
  { src: "/images/playlist1.png", followers: "+53.000" },
  { src: "/images/playlist2.png", followers: "+153.000" },
  { src: "/images/playlist3.png", followers: "+14.000" }
];

const youtubeChannels = [
  { src: "/images/yt1.png" },
  { src: "/images/yt2.png" },
  { src: "/images/yt3.png" }
];

export default function AboutSection() {
  return (
    <section id="highlights" className="bg-gradient-to-r from-black to-blue-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-extrabold italic text-center">
            BRING YOUR MUSIC TO THE WORLD
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left: Playlist images + followers */}
            <div className="space-y-6">
              {playlistData.map((playlist, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={playlist.src} 
                      width={120} 
                      height={120} 
                      alt={`playlist ${index + 1}`} 
                    />
                  </Link>
                  <p className="font-bold text-lg italic">{playlist.followers} FOLLOWERS PLAYLIST.</p>
                </div>
              ))}
            </div>

            {/* Right: Text */}
            <div className="max-w-md text-sm md:text-base">
              <h4 className="font-bold uppercase mb-2">It all begins with a sound.</h4>
              <p className="mb-4">
                Maybe it's a phonk banger. Maybe it's a Brazilian funk anthem. Or maybe it's just a catchy track that's going viral.
                Whatever it is, sharing your music with the world starts with the right platform.
              </p>
              <p>
                At Loop Hit Music, we focus on viral, high-potential tracks — especially in phonk and Brazilian funk — and we help your
                sound reach millions through DSPs, partnered and owned media channels. If it slaps, we'll help it spread.
              </p>
              <p className="mt-4">
                Don't worry about fitting a mold. Be real. Be bold. There are millions of tracks out there, but yours deserves to stand out.
                If your music tells a story — we'll make sure the world hears it.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Partnered channels */}
        <ScrollReveal delay={0.3}>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold italic text-center mb-12">
              OUR & PARTNERED YOUTUBE CHANNEL
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {youtubeChannels.map((channel, index) => (
                <Link key={index} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={channel.src} 
                    width={200} 
                    height={200} 
                    alt={`YouTube ${index + 1}`} 
                  />
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}