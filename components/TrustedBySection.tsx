'use client';

import { Marquee } from '@/components/ui/marquee';

export function TrustedBySection() {
  return (
    <div className="mt-4">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider flex items-center justify-center gap-1">
        Backed by
        <a
          href="https://www.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <span className="inline-flex w-5 h-5 bg-[#FF6600] items-center justify-center ml-1">
            <span className="text-white font-bold text-sm">Y</span>
          </span>
          <span className="text-gray-500 dark:text-gray-400 normal-case"> Combinator</span>
        </a>
        and trusted by growth teams at
      </p>
      <Marquee className="[--duration:30s]">
        <div className="flex items-center gap-12 mx-6">
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            Mercor
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            Eight Sleep
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            Agapé
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            InterviewCoder
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            SellRaze
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            Headstarter
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            kēpos
          </div>
          <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
            Stratus
          </div>
        </div>
      </Marquee>
    </div>
  );
}
