'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { LightRays } from '@/components/ui/light-rays';
import { TrustedBySection } from '@/components/TrustedBySection';

interface HeroSectionProps {
  showBadge?: boolean;
  heading: string;
  subheading: string;
  splitSubheading?: boolean;
}

export function HeroSection({ showBadge = true, heading, subheading, splitSubheading = true }: HeroSectionProps) {
  return (
    <section className="flex items-start justify-center px-6 relative pt-[12vh] pb-4 md:pb-6">
      {/* Light rays decoration */}
      <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />

      <div className="w-full mx-auto text-center relative z-10 px-8">
        {/* Badge */}
        {showBadge && (
          <a
            href="https://www.youtube.com/watch?v=tjBOwU3I27g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-colors cursor-pointer"
          >
            <span className="text-sm text-blue-600 dark:text-blue-400">Introducing Claybird Agent</span>
            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </a>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 dark:text-gray-100 mb-4">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          {splitSubheading && subheading.length > 54 ? (
            <>
              {subheading.slice(0, 54)}
              <br />
              {subheading.slice(54)}
            </>
          ) : (
            subheading
          )}
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <Button asChild variant="secondary" size="sm" className="rounded-full px-6">
            <Link href="/work">See our work</Link>
          </Button>
          <Button asChild variant="default" size="sm" className="rounded-full px-6 min-w-[240px] justify-center">
            <Link href="/book" className="gap-2 flex items-center justify-center">
              Book a call
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Trusted By Section */}
        <TrustedBySection />
      </div>
    </section>
  );
}
