'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Cla<span className="italic">y</span><span className="italic">b</span>ird
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/work" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Portfolio
            </Link>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, 'testimonials')}
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Testimonials
            </a>
            <Link href="/book" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right side: CTA Buttons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            className="text-sm text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-xl font-medium"
          >
            <Link href="/book">Log in</Link>
          </Button>
          <Button
            asChild
            className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 font-medium"
          >
            <Link href="/book">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
