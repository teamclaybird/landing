'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { VideoShowcaseSection } from '@/components/VideoShowcaseSection';
import { NeonGlitchBackground } from '@/components/NeonGlitchBackground';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Main content */}
      <main className="bg-black relative">
        <NeonGlitchBackground />

        <HeroSection
          showBadge={true}
          heading="The Award-Winning AI Ad Company"
          subheading="We write and produce AI brand ads - then intelligently generate tailored retargeting videos for every audience segment."
        />

        {/* Portfolio Button Section */}
        <section className="pt-16 pb-16 px-6 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto flex justify-center">
            <ShimmerButton
              className="text-xl font-semibold px-12 py-6 text-white"
              background="rgb(0, 0, 0)"
              shimmerColor="rgba(255, 255, 255, 0.5)"
              onClick={() => router.push('/work')}
            >
              PORTFOLIO 🖼️
            </ShimmerButton>
          </div>
        </section>

        {/* That's It Section */}
        <section className="pb-16 px-6 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-lg md:text-xl font-mono text-white">
              that's pretty much it, tbh
            </h2>
          </div>
        </section>

        {/* Launch Button Section */}
        <section className="pb-24 px-6 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto flex justify-center">
            <ShimmerButton
              className="text-xl font-semibold px-12 py-6 text-white"
              background="rgb(0, 0, 0)"
              shimmerColor="rgba(255, 255, 255, 0.5)"
              onClick={() => router.push('/book')}
            >
              LAUNCH 🚀
            </ShimmerButton>
          </div>
        </section>


        {/* How It Works - Bento Grid */}
        {/* <section className="pt-8 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-gray-900 dark:text-gray-100">
                CLAYBIRD AGENT
              </h2>
            </div>

            <BentoGrid className="lg:grid-cols-5 lg:grid-rows-1">
              <BentoCard
                name="Collaborate"
                className="col-span-3 lg:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-gray-100/40 dark:from-blue-950/20 dark:to-gray-950/20" />
                }
                Icon={MessageSquare}
                description="First, share your idea, and it helps you refine your idea into a detailed script."
                href="#"
                cta="Best practices"
              />
              <BentoCard
                name="Storyboard"
                className="col-span-3 lg:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-100/50 dark:from-blue-950/15 dark:to-slate-950/15" />
                }
                Icon={Layout}
                description="Agent automatically creates a detailed storyboard with each shot visualized and planned."
                href="#"
                cta="See examples"
              />
              <BentoCard
                name="Generate"
                className="col-span-3 lg:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/40 dark:from-sky-950/20 dark:to-blue-950/20" />
                }
                Icon={Video}
                description="Agent generates each shot for you using AI video models, ensuring character and dialogue consistency."
                href="#"
                cta="Engineering blog"
              />
              <BentoCard
                name="Edit"
                className="col-span-3 lg:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100/40 to-gray-100/40 dark:from-slate-950/20 dark:to-gray-950/20" />
                }
                Icon={Scissors}
                description="Agent autonomously edits clips together with captions, transitions, and effects."
                href="#"
                cta="See examples"
              />
              <BentoCard
                name="Publish"
                className="col-span-3 lg:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/35 to-indigo-100/35 dark:from-blue-950/18 dark:to-indigo-950/18" />
                }
                Icon={Upload}
                description="Publish directly to your TikTok, Reels, and Shorts accounts, or use a phone farm via DoubleSpeed."
                href="#"
                cta="Learn more"
              />
            </BentoGrid>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="px-6 pt-8 pb-12 bg-transparent relative">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-400">© 2025 Claybird Inc.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
