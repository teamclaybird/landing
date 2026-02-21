'use client';

import { useState, useEffect } from 'react';

interface HeroSectionProps {
  showBadge?: boolean;
  heading: string;
  subheading: string;
  splitSubheading?: boolean;
}

export function HeroSection({ showBadge = true, heading, subheading, splitSubheading = true }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <section className="flex items-end justify-center px-6 relative h-screen overflow-hidden pb-[10vh]">
      {/* Background Video with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px) scale(1.4)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        >
          <source src="/videos/Timeline 1.mov" type="video/mp4" />
        </video>
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

      {/* Launch Harder text */}
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center px-6" style={{
        top: '76%',
        transform: `translateY(-50%) translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
        transition: 'transform 0.2s ease-out'
      }}>
        <h1 className="font-black whitespace-nowrap" style={{
          fontSize: 'clamp(2.565rem, 12.825vw, 17.955rem)',
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

      {/* Backed by YC badge */}
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

    </section>
  );
}
