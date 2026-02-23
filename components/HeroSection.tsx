'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  showBadge?: boolean;
  heading: string;
  subheading: string;
  splitSubheading?: boolean;
}

export function HeroSection({ showBadge = true, heading, subheading, splitSubheading = true }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false); // TEMPORARILY SET TO ALWAYS SHOW: true

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* MOBILE: Video fills top, text at bottom in black fade */}
      <div className="md:hidden absolute inset-0 flex flex-col">
        {/* Video Container - fills available space */}
        <div className="relative flex-1 w-full">
          {/* Loading buffer - positioned over theater screen - TEMPORARILY ALWAYS SHOWING */}
          <div
            className="absolute"
            style={{
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '42%',
              aspectRatio: '16/9',
              zIndex: 5,
            }}
          >
            <Image
              src="/videos/loading_buffer.gif"
              alt="Loading..."
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={(e) => {
              const video = e.currentTarget as HTMLVideoElement;
              video.muted = true;
              video.play().catch(() => {
                console.log('Autoplay prevented on loadeddata');
              });
              setVideoLoaded(true);
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget as HTMLVideoElement;
              video.muted = true;
              video.play().catch(() => {
                console.log('Autoplay prevented on canplay');
              });
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget as HTMLVideoElement;
              video.muted = true;
              video.play().catch(() => {
                console.log('Autoplay prevented on loadedmetadata');
              });
            }}
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => {
                  console.log('Autoplay prevented on ref');
                });
              }
            }}
          >
            <source src="/videos/landing_final_hero.mov" type="video/mp4" />
          </video>

          {/* Bottom Fade to Black - larger on mobile */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '60vh',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            }}
          />
        </div>

        {/* Text Section - in the black area */}
        <div className="absolute bottom-0 left-0 right-0 pb-24" style={{ height: '50vh' }}>
          <div className="flex items-center justify-center h-full px-4">
            <h1 className="font-black text-center leading-[0.85]" style={{
              fontSize: 'clamp(3.5rem, 18vw, 8rem)',
              letterSpacing: '-0.08em',
              transform: 'scaleY(1.5)',
              color: '#FF0000',
              WebkitTextStroke: '2px #FF0000',
              paintOrder: 'stroke fill',
              filter: 'url(#grain)',
              maxWidth: '95%',
            }}>
              LAUNCH<br />HARDER
            </h1>
          </div>

          {/* Backed by YC badge - mobile */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <p className="text-center text-xs text-white/80 flex items-center justify-center gap-1.5">
              <span>Backed by</span>
              <a
                href="https://www.ycombinator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="inline-flex w-5 h-5 bg-[#FF6600] items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </span>
                <span className="text-white/80">Combinator</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP: Parallax video effect */}
      <div className="hidden md:flex items-end justify-center px-6 relative h-screen pb-[10vh]">
        {/* Background Video with Parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover relative z-0"
            onLoadedData={(e) => {
              const video = e.currentTarget as HTMLVideoElement;
              video.muted = true;
              video.play().catch(() => {});
              setVideoLoaded(true);
            }}
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => {});
              }
            }}
          >
            <source src="/videos/landing_final_hero.mov" type="video/mp4" />
          </video>

          {/* Loading buffer - positioned over theater screen - TEMPORARILY ALWAYS SHOWING */}
          <div
            className="absolute"
            style={{
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '31.5%',
              aspectRatio: '16/9',
              zIndex: 5,
            }}
          >
            <Image
              src="/videos/loading_buffer.gif"
              alt="Loading..."
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>
        </div>

        {/* Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.7) 100%)'
          }}
        />

        {/* Bottom Fade to Black */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)'
          }}
        />

        {/* Launch Harder text - desktop */}
        <div className="absolute left-0 right-0 z-10 flex items-center justify-center px-6" style={{
          top: '76%',
          transform: `translateY(-50%) translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.2s ease-out'
        }}>
          <h1 className="font-black whitespace-nowrap" style={{
            fontSize: 'clamp(2rem, 12.825vw, 17.955rem)',
            letterSpacing: '-0.08em',
            lineHeight: '0.85',
            transform: 'scaleY(1.5)',
            color: '#FF0000',
            WebkitTextStroke: '2px #FF0000',
            paintOrder: 'stroke fill',
            filter: 'url(#grain)',
          }}>
            LAUNCH HARDER
          </h1>
        </div>

        {/* Backed by YC badge - desktop */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <p className="text-center text-xs text-white/80 flex items-center justify-center gap-1.5">
            <span>Backed by</span>
            <a
              href="https://www.ycombinator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="inline-flex w-5 h-5 bg-[#FF6600] items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </span>
              <span className="text-white/80">Combinator</span>
            </a>
          </p>
        </div>
      </div>

      {/* SVG filter for grain */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="grain" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.8"
              numOctaves="6"
              seed="2"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="monoNoise"
            />
            <feComponentTransfer in="monoNoise" result="grain">
              <feFuncA type="discrete" tableValues="1 0 1 0 1 0" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="grain" mode="multiply" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
        </defs>
      </svg>

    </section>
  );
}
