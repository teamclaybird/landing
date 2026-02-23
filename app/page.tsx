'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TestimonialCard } from '@/components/testimonial-card';
import testimonials from '@/data/testimonials.json';
import { Lens } from '@/components/ui/lens';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { VideoShowcaseSection } from '@/components/VideoShowcaseSection';
import { NeonGlitchBackground } from '@/components/NeonGlitchBackground';

export default function Home() {
  const router = useRouter();
  const [openVideo, setOpenVideo] = useState<string | null>(null);

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

        {/* past launches Section */}
        <section className="pt-8 pb-16 px-6 bg-transparent relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-white">
                past launches
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case Study 1 - Lunavo */}
              <Card className="shadow-none bg-black border-white/10">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/lunavo-case-study-thumbnail.png"
                        alt="Lunavo case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl mb-2 text-white">Lunavo</CardTitle>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/lunavo_launch_video.mp4')} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white">
                    Watch
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 2 - Automax */}
              <Card className="shadow-none bg-black border-white/10">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/mercor-case-study-thumbnail.png"
                        alt="Automax case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl mb-2 text-white">Automax</CardTitle>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/automax_v1.mp4')} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white">
                    Watch
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 3 - Corvera */}
              <Card className="shadow-none bg-black border-white/10">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/corvera-thumbnail.png"
                        alt="Corvera case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl mb-2 text-white">Corvera</CardTitle>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/mercor_1.mp4')} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white">
                    Watch
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-8 flex justify-center bg-transparent relative z-10">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book')}
          >
            LAUNCH 🚀
          </ShimmerButton>
        </section>

        {/* That's It Section */}
        <section className="pt-16 pb-24 px-6 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-lg md:text-xl font-mono text-white">
              that's pretty much it, tbh
            </h2>
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


      {/* Video Dialog */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
            >
              <button
                onClick={() => setOpenVideo(null)}
                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black hover:bg-neutral-900/70"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <video
                  src={openVideo}
                  className="size-full rounded-2xl"
                  controls
                  autoPlay
                ></video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
