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
          className="relative z-10 cursor-pointer"
        >
          <Image
            src="/White_Logo.png"
            alt="Claybird logo"
            width={32}
            height={32}
            className="transition-transform duration-300"
          />
        </a>

        {/* Expanded Content */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Container for all elements */}
          <div className="relative flex items-center gap-8 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            {/* Portfolio - slides in from left */}
            <Link
              href="/work"
              className={`text-sm text-white hover:text-gray-200 whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'translate-x-0' : '-translate-x-8'
              }`}
            >
              Portfolio
            </Link>

            {/* Logo + Claybird text in center */}
            <div className="flex items-center gap-2">
              <Image
                src="/White_Logo.png"
                alt="Claybird logo"
                width={24}
                height={24}
              />
              <span className={`text-base font-semibold text-white italic transition-all duration-300 ${
                isExpanded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}>
                Claybird
              </span>
            </div>

            {/* Launch - slides in from right */}
            <Button
              asChild
              size="sm"
              className={`bg-white text-black text-sm rounded-full hover:bg-gray-200 font-medium transition-all duration-300 ${
                isExpanded ? 'translate-x-0' : 'translate-x-8'
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
