'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-6">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center"
      >
        {/* Center Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative z-10 cursor-pointer flex items-center"
        >
          <Image
            src="/claybird_logo.jpeg"
            alt="Claybird logo"
            width={32}
            height={32}
            className="transition-transform duration-300"
          />
        </a>

        {/* Expanded Content */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
          isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Container for Portfolio and Launch only */}
          <div className={`relative flex items-center gap-4 md:gap-16 px-4 md:px-6 py-2.5 rounded-full border transition-all duration-500 ease-out ${
            isExpanded ? 'bg-white/5 backdrop-blur-sm border-white/10' : 'bg-white/0 backdrop-blur-none border-white/0'
          }`}>
            {/* Portfolio - slides out to the left */}
            <Link
              href="/work"
              className={`text-sm text-white hover:text-gray-200 whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              Portfolio
            </Link>

            {/* Spacer for the logo in the middle */}
            <div className="w-8 h-8 flex-shrink-0"></div>

            {/* Launch - slides out to the right */}
            <Button
              asChild
              size="sm"
              className={`bg-white text-black text-sm rounded-full hover:bg-gray-200 font-medium transition-all duration-300 ${
                isExpanded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <Link href="/book">Launch 🚀</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
