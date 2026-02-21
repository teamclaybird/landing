'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { ChevronRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 500);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 transition-all duration-300`}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center gap-3 px-6 py-4 transition-all duration-500 ease-out ${
          isExpanded ? 'bg-white/5 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <Image src="/White_Logo.png" alt="Claybird logo" width={24} height={24} />
          <span className="text-xl font-semibold text-white italic">
            Claybird
          </span>
        </a>

        {/* Arrow indicator */}
        <div className={`transition-opacity duration-300 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}>
          <ChevronRight className="w-4 h-4 text-white/60" />
        </div>

        {/* Expandable content */}
        <div className={`flex items-center gap-8 overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? 'max-w-[1000px] opacity-100' : 'max-w-0 opacity-0'
        }`}>
          {/* Navigation */}
          <nav className="flex items-center gap-8 whitespace-nowrap">
            <Link href="/work" className="text-sm text-white hover:text-gray-200">
              Portfolio
            </Link>
            <Link href="/book" className="text-sm text-white hover:text-gray-200">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Button
              asChild
              className="bg-white text-black text-sm rounded-xl hover:bg-gray-200 font-medium"
            >
              <Link href="/book">Launch 🚀</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
