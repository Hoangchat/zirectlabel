'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const playlistData = [
  { src: "./images/PLL1.png", followers: "+4.000 FOLLOWERS PLAYLIST.", url: "https://open.spotify.com/playlist/3T7iY2hYQJLB3JKubnkXjl" },
  { src: "./images/222.png", followers: "+20.000.000 PLAYS ON SOUNDCLOUD.", url: "https://soundcloud.com/" },
  { src: "./images/3333.png", followers: "+14.000 FOLLOWERS PLAYLIST.", url: "https://open.spotify.com/playlist/15haiEJWHeyZDWLoti9sF5" }
];

const youtubeChannels = [
  { src: "./images/SLAVA FUNK 4.0!.jpg", url: "https://www.youtube.com/watch?v=rjsZeY1uT-w&list=OLAK5uy_nPAu-y87pF_0ITMB-JZIWcVBWyiEKOZYI&index=4", title: "SLAVA FUNK 4.0!", description: "uniwes, KW1K" },
  { src: "./images/Luz De La Luna.png", url: "https://www.youtube.com/watch?v=QM5QFMypDJU&list=OLAK5uy_npzP7O_Lcun7Y2lQaxIFGmLp_KeChMZlU&index=2", title: "Luz De La Luna", description: "KZNL, uniwes" },
  { src: "./images/HAUNTING ME.png", url: "https://www.youtube.com/watch?v=Gb64hmub0oA&list=OLAK5uy_nPTGcP-ZChETJ2M6u60mQ7pTUcFlynP_w&index=3", title: "HAUNTING ME", description: "uniwes" },
  { src: "./images/DANÇA TAKA.png", url: "https://www.youtube.com/watch?v=AyzYpUnS_ks&list=OLAK5uy_kU9-PAvPWjMzsithRWVKsbSGwVkS2dBWA&index=2", title: "DANÇA TAKA", description: "FAB10, DJZPX" },
  { src: "./images/1 B!T.png", url: "https://www.youtube.com/watch?v=FVidVx2QJLc&list=OLAK5uy_lQ0egE06EPfDknUNfN1XPkapGvUkMRVbE&index=3", title: "1 B!t", description: "DJ FiK, uniwes" },
  { src: "./images/Portão do Céu.png", url: "https://www.youtube.com/watch?v=654BZYpX9fU&list=OLAK5uy_kF_W1fcLW4r_hQ1YjTlmJ97daOM0WRpCc&index=2", title: "Portão do Céu", description: "KW1K, FAB10" },
  { src: "./images/FLAME AURA.jpg", url: "https://www.youtube.com/watch?v=JpUGZA1_pAw&list=OLAK5uy_mAYkrRg7HEhhega96pIlf1XOmKVZV3aOs&index=4", title: "FLAME AURA", description: "uniwes, FAB10" },
  { src: "./images/Novo Mundo.png", url: "https://www.youtube.com/watch?v=-4MZm1Rwh4c&list=OLAK5uy_kj_yeAkTQBSQF4680b5zr9jQOGMQy64mI&index=3", title: "Novo Mundo", description: "uniwes" },
  { src: "./images/Empurra E Toma!.png", url: "https://www.youtube.com/watch?v=ULvs_kGVxek&list=OLAK5uy_lR3teIotZh_pBdBrHpWvvlZTuRJMY7es8&index=3", title: "Empurra E Toma!", description: "DJZPX" },
  { src: "./images/CORONA FUNK.jpg", url: "https://www.youtube.com/watch?v=LJnDy62OD8k&list=OLAK5uy_nHqpX7SXM8T7H49bUt_NxE9H_9xFmkv8M&index=3", title: "CORONA FUNK", description: "uniwes" },
];

export default function AboutSection() {
  return (
    <section id="highlights" className="bg-gradient-to-r from-black to-blue-900 text-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
        {/* Title */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold italic text-center leading-tight">
            WHERE YOUR MUSIC<br />SOARS BEYOND LIMITS
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start md:justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10">
            {/* Left: Playlist images + followers */}
            <div className="flex flex-col gap-4 sm:gap-6 mx-auto md:mx-0">
              {playlistData.map((playlist, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <Link href={playlist.url} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={playlist.src} 
                        width={120} 
                        height={120} 
                        alt={`playlist ${index + 1}`} 
                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] object-contain'
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg italic leading-snug">{playlist.followers}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Text */}
            <div className="max-w-xl md:max-w-[520px] lg:max-w-xl text-sm md:text-[15px] lg:text-base" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
              <h4 className="font-bold uppercase mb-2">Let us bring your music to the world.</h4>
              <p className="mb-4">
              A dark, powerful phonk beat. A vibrant Brazilian funk groove. Or maybe an unexpected hook that takes over the internet overnight.
              The spark is yours — the reach is ours.
              </p>
              <p>
              At Zirect Label, we don&apos;t just release tracks — we build momentum. We select high-energy, viral-ready sounds and launch them across DSPs, our own networks, and global media partners. The result? Your music isn&apos;t just heard — it&apos;s remembered.
              </p>
              <p className="mt-4">
              We maintain trusted partnerships with strategic partners, allowing you to join an official and secure YouTube CMS system. With our comprehensive support, we help your channel grow sustainably, reach the right audience, increase views and engagement, and optimize revenue. By combining your creative content with our powerful support platform, your YouTube channel will quickly break through and make a distinctive mark in the market.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Partnered channels */}
        <ScrollReveal delay={0.3}>
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold italic text-center leading-tight mb-8 sm:mb-10 md:mb-12" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
              MUSIC, PARTNER & YOUTUBE CHANNEL
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-full overflow-hidden">
              {youtubeChannels.map((channel, index) => (
                <Link key={index} href={channel.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center text-center min-h-[120px] justify-between w-full">
                    <div className='relative aspect-square w-full max-w-[200px] mb-3 overflow-hidden rounded-lg'>
                      <Image 
                        src={channel.src} 
                        alt={`YouTube ${index + 1}`} 
                        fill
                        sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, (min-width: 640px) 120px, 100px"
                        className="object-cover rounded-lg"
                      />
                    </div> 
                    <div className="flex flex-col items-center w-full px-2">
                      <h2 className='text-sm sm:text-base md:text-lg font-bold font-roboto text-white mb-1 leading-tight'>{channel.title}</h2>
                      {channel.description && (
                        <h3 className='text-xs sm:text-sm font-roboto text-white opacity-80 leading-tight'>{channel.description}</h3>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}