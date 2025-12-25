'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { BentoCard } from '@/components/ui/bento-grid';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TestimonialCard } from '@/components/testimonial-card';
import testimonials from '@/data/testimonials.json';
import DemoVideo from '@/components/DemoVideo';
import { FloatingCTA } from '@/components/floating-cta';
import { Lens } from '@/components/ui/lens';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedList } from '@/components/ui/animated-list';
import { ProcessNotification } from '@/components/process-notification';
import { motion, AnimatePresence } from 'motion/react';
import { BsCircleFill } from 'react-icons/bs';
import { PersonIcon } from '@radix-ui/react-icons';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { VideoShowcaseSection } from '@/components/VideoShowcaseSection';

export default function Home() {
  const router = useRouter();
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main content */}
      <main>
        <HeroSection
          showBadge={true}
          heading="The Award-Winning AI Ad Company"
          subheading="We write and produce AI brand ads - then intelligently generate tailored retargeting videos for every audience segment."
        />

        <VideoShowcaseSection />

        {/* Case Studies Section */}
        <section className="pt-8 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-gray-900 dark:text-gray-100">
                CASE STUDIES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case Study 1 - Lunavo */}
              <Card className="shadow-none">
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
                <CardContent>
                  <CardTitle className="text-xl mb-2">Lunavo</CardTitle>
                  <CardDescription className="line-clamp-2">
                    For Lunavo&apos;s launch, we produced a cinematic brand video showcasing their innovative technology, blending stunning visuals with compelling storytelling to introduce a new era of logistics.
                  </CardDescription>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/lunavo_launch_video.mp4')}>
                    Watch ad
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/book">
                      Read more
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 2 - kēpos */}
              <Card className="shadow-none">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/kepos-case-study-thumbnail.png"
                        alt="kēpos case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">kēpos</CardTitle>
                  <CardDescription className="line-clamp-2">
                    To introduce a breast milk-inspired supplement for adult gut health, we wove together cinematic visuals of life, scientific innovation, and natural wellness—creating evocative storytelling that bridges nature and cutting-edge science.
                  </CardDescription>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/kepos_new.mp4')}>
                    Watch ad
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/book">
                      Read more
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 3 - Mercor */}
              <Card className="shadow-none">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/mercor-case-study-thumbnail.png"
                        alt="Mercor case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">Mercor</CardTitle>
                  <CardDescription className="line-clamp-2">
                    To challenge viewers to solve puzzles on the platform, we created a cinematic brand ad exploring humanity&apos;s greatest unsolved mathematical mysteries—transforming abstract problems into compelling visual invitations.
                  </CardDescription>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/mercor_1.mp4')}>
                    Watch ad
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/book">
                      Read more
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-8 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book')}
          >
            Start your first campaign
          </ShimmerButton>
        </section>

        {/* Creative Process Section */}
        <section className="pt-4 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-gray-900 dark:text-gray-100">
                HOW IT WORKS
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              {/* Left Column - Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <BentoCard
                  name="Strategy"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">1</div>}
                  description="We understand your brand and audience, and create a content calendar and screenplays."
                />
                <BentoCard
                  name="Approval"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">2</div>}
                  description="You review and approve scripts before production begins, and we make revisions based on your feedback."
                />
                <BentoCard
                  name="Production"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">3</div>}
                  description="We produce and edit the first draft of the video ad, and it appears directly in your Claybird account."
                />
                <BentoCard
                  name="Revisions"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">4</div>}
                  description="We revise based on your feedback until you're happy with your video ad."
                />
                <BentoCard
                  name="Claybird Platform"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <BsCircleFill className="w-4 h-4" />}
                  description="View drafts, request edits, and manage your video ads in one place."
                />
                <BentoCard
                  name="Dedicated Expert"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={PersonIcon}
                  description="A dedicated account executive will be available to you via Slack, email, and phone."
                />
              </div>

              {/* Right Column - Animated Notifications */}
              <div className="flex justify-center">
                <AnimatedList delay={2000}>
                  {/* <ProcessNotification
                    key="strategy"
                    step="Content Calendar Approved"
                    description="Analyzing your target audience and defining campaign objectives"
                    status="completed"
                  /> */}
                  <ProcessNotification
                    key="screenplay"
                    step="Screenplay Ready for Review"
                    description="Crafting compelling narratives tailored to your brand voice"
                    status="completed"
                  />
                  <ProcessNotification
                    key="approval"
                    step="Screenplay Approved"
                    description="Your team reviews and approves the creative direction"
                    status="completed"
                  />
                  <ProcessNotification
                    key="draft"
                    step="First Draft Available"
                    description="Completed video ad ready for your review"
                    status="completed"
                  />
                  <ProcessNotification
                    key="revision"
                    step="Revisions"
                    description="Incorporating your feedback to perfect the final cut"
                    status="pending"
                  />
                  <ProcessNotification
                    key="payment"
                    step="Payment - $999"
                    description="Payment for completed video ad"
                    status="pending"
                  />
                </AnimatedList>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-8 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book')}
          >
            Start your first campaign
          </ShimmerButton>
        </section>

        {/* Demo Video Section */}
        <DemoVideo />

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

        {/* Book a Demo Section */}
        <section className="px-6 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book')}
          >
            Start your first campaign
          </ShimmerButton>
        </section>

        {/* Twitter Testimonials Section */}
        <section id="testimonials" className="py-16 px-6">
          <div className="max-w-7xl mx-auto mb-12 text-center">
            <h2 className="text-xl md:text-2xl font-mono text-gray-900 dark:text-gray-100 flex items-center justify-center gap-3">
              Marketers <Heart className="w-6 h-6 fill-black text-black" /> Claybird
            </h2>
          </div>

          <div className="relative flex flex-col gap-4">
            {/* First row - moving right */}
            <Marquee className="[--duration:40s]">
              {testimonials.slice(0, 4).map((tweet) => (
                <TestimonialCard key={tweet.id} {...tweet} className="mx-2" />
              ))}
            </Marquee>

            {/* Second row - moving left */}
            <Marquee reverse className="[--duration:40s]">
              {testimonials.slice(4, 8).map((tweet) => (
                <TestimonialCard key={tweet.id} {...tweet} className="mx-2" />
              ))}
            </Marquee>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-16 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book')}
          >
            Start your first campaign
          </ShimmerButton>
        </section>

        {/* Footer - White Card */}
        <footer className="px-6 pb-12">
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {/* Product Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Pricing</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Features</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Blog</a></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Help & guides</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Support</a></li>
                </ul>
              </div>

              {/* Community Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Community</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Discord</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">X / Twitter</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Claybird Inc.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating CTA */}
      <FloatingCTA />

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
