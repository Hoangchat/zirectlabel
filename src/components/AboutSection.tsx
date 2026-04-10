'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const playlistData = [
  { src: "./images/800x800cc.jpg", followers: "OUR PLAYLIST", url: "https://open.spotify.com/user/312gicoeg6ltw45znigspd5cjq6i" },
  { src: "./images/zzzzzz.jpg", followers: "PHONK TIME", url: "https://www.youtube.com/channel/UC50Skh8HNEXD5Ir4StWh5MQ" },
  { src: "./images/channels4_profile.jpg", followers: "PHONK HUB", url: "https://www.youtube.com/@phonkhub68" }
];

const youtubeChannels = [
  { src: "./images/Sombra y Corazón.png", url: "https://www.youtube.com/watch?v=IMjEpCPS-D8", title: "Sombra y Corazón", description: "jgrz" },
  { src: "./images/MONTAGEM CASSANDRA.png", url: "https://www.youtube.com/watch?v=2_NK11oipys", title: "MONTAGEM CASSANDRA", description: "Space.exe, -Kriz!, REVERSXN " },
  { src: "./images/MONTAGEM SACUDIR.png", url: "https://open.spotify.com/track/6fZSejPTdjrn9dz2gCHvZ6", title: "MONTAGEM SACUDIR", description: "secrecy" },
  { src: "./images/APROVAÇÃO.png", url: "https://open.spotify.com/track/1FHns8JaO1YWuPIvuy1snP", title: "APROVAÇÃO", description: "Appys, LeoTHM, remy" },
  { src: "./images/d4r.jpg", url: "https://www.youtube.com/watch?v=5brBgdakcX8", title: "MONTAGEM MISTERIOSO", description: "INFINITIX, CRVNER, D4R.IO" },
  { src: "./images/PERMISO.png", url: "https://open.spotify.com/track/0q2Ay0Hta3LqbAxxyNYj2D", title: "PERMISO", description: "EnØch, CRVNER" },
  { src: "./images/MONTAGEM LACRIMOSA.png", url: "https://open.spotify.com/track/3Q3TuInGaHeRXTM78UcNf0", title: "MONTAGEM LACRIMOSA", description: "AIGXL, Cruzt, dj.eddie" },
  { src: "./images/VAI VOLTAR.png", url: "https://open.spotify.com/track/59HGwViqxjor8AtbRuJeJn", title: "VAI VOLTAR", description: "F_xyz_n, INXRT" },
  { src: "./images/PISA NO ASFALTO.png", url: "https://www.youtube.com/watch?v=dno0DBaT-Rc", title: "PISA NO ASFALTO", description: "Space.exe, CRVNER, DJ VGK1" },
  { src: "./images/Química.png", url: "https://open.spotify.com/track/7JKOMxFchagAuK8hRuf7AB", title: "Química", description: "K4RVΞR, UDXMXR" },
  { src: "./images/MONTAGEM ODORI.png ", url: "https://www.youtube.com/watch?v=IZFo1FpFpjY", title: "MONTAGEM ODORI", description: "ZIRECT x ZXVN" },
  { src: "./images/Neon do Futuro.png", url: "https://open.spotify.com/track/1wn929aFlSf6t3H7kmsxtN", title: "Neon do Futuro", description: "Appys, K4RVΞR" },
  { src: "./images/MONTAGEM MIZUKI.jpg", url: "https://www.youtube.com/watch?v=B_JXN8OIsp4", title: "MONTAGEM MIZUKI", description: "ZIRECT x ZXVN" },
  { src: "./images/Elis.png", url: "https://open.spotify.com/track/4hZmHlp2Xy9AZBJZSyPi7T", title: "ESTRALIS", description: "ZXK, INFINITIX, CRVNER" },
  { src: "./images/MONTAGEM TERREMOTO.jpg", url: "https://open.spotify.com/track/2sZn4oLfOSJJi6kZUdTDpY", title: "MONTAGEM TERREMOTO", description: "F_xyz_n, INXRT" }

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
              OUR FEATURED TRACKS
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