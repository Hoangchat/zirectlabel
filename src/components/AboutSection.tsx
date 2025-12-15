'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const playlistData = [
  { src: "./images/LABEL.png", followers: "SPOTIFY.", url: "https://open.spotify.com/user/312gicoeg6ltw45znigspd5cjq6i" },
  { src: "./images/LABEL.png", followers: "SOUNDCLOUD.", url: "https://soundcloud.com/" },
  { src: "./images/LABEL.png", followers: "LINKEDIN.", url: "https://www.linkedin.com/company/108134405" }
];

const youtubeChannels = [
  { src: "./images/Elis.png", url: "https://open.spotify.com/track/4hZmHlp2Xy9AZBJZSyPi7T", title: "ESTRALIS", description: "ZXK, INFINITIX, CRVNER" },
  { src: "./images/MONTAGEM CONTIGO.png", url: "https://open.spotify.com/track/4v2JIhkUgAFuUzPVCnAQaO", title: "MONTAGEM CONTIGO", description: "uniwes" },
  { src: "./images/MONTAGEM LUNA.jpg", url: "https://open.spotify.com/track/5tksU9PoVhumFynn31xNFx", title: "MONTAGEM LUNA", description: "Zericxxn, D4R.IO" },
  { src: "./images/SEGURA CORAÇÃO.png", url: "https://open.spotify.com/track/3TZlSPciMvxzlDdKQIh7gt", title: "SEGURA CORAÇÃO", description: "SXR3NE" },
  { src: "./images/d4r.jpg", url: "https://open.spotify.com/track/7b9mDadwI4q00xFg4L9ouY", title: "MONTAGEM MISTERIOSO", description: "INFINITIX, CRVNER, D4R.IO" },
  { src: "./images/MONTAGEM FRAGRÂNCIA.jpg", url: "https://open.spotify.com/track/2O3N9wOKhTJtuC7VNjdRAR", title: "MONTAGEM FRAGRÂNCIA", description: "FLXME, Dj aleh" },
  { src: "./images/MUNDO VAI DANÇAR.png", url: "https://open.spotify.com/track/1YeE3VOn91ht0zPidqZg1C", title: "MUNDO VAI DANÇAR", description: "shogrim" },
  { src: "./images/MONTAGEM SAFADA.jpg", url: "https://open.spotify.com/track/0kn0GkCAXPuF9h5bcWx9q1", title: "MONTAGEM SAFADA", description: "uniwes" },
  { src: "./images/Sequencia Do Esfrega.png", url: "https://open.spotify.com/track/3aKRkqyyR6hSDXMqSTtR8M", title: "Sequencia Do Esfrega", description: "HXDES" },
  { src: "./images/MONTAGEM PORTAMENTO HAZE.png", url: "https://open.spotify.com/track/0OHJcwQdXvNMjgMEiNMpYs", title: "MONTAGEM PORTAMENTO HAZE", description: "secrecy" },
  { src: "./images/TREPA RITMICO.png", url: "https://open.spotify.com/track/5voO5sxT5eHqhm4S2vyzsK", title: "TREPA RITMICO", description: "gysix, Ranfish222" },
  { src: "./images/ABYSS.png", url: "https://open.spotify.com/track/63jTpzS9Hp0O9eFOQzJtRW", title: "ABYSS", description: "Zericxxn, SZEKTAS" },
  { src: "./images/f4llen_4ngel.jpg", url: "https://open.spotify.com/track/0Alhiiogdi0GKVushB8yHf", title: "f4llen_4ngel", description: "HAXLE" },
  { src: "./images/zzzz.jpg", url: "https://open.spotify.com/track/2SPjKR6e78CR87hx87tag1", title: "hard.exe", description: "HAXLE" },
  { src: "./images/Luz De La Luna.png", url: "https://open.spotify.com/album/5S31AVCTpz1AJxqDw9gonl", title: "Luz De La Luna", description: "KZNL, uniwes" }

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