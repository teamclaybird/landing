'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Marquee } from '@/components/ui/marquee';
import { BentoCard } from '@/components/ui/bento-grid';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TestimonialCard } from '@/components/testimonial-card';
import testimonials from '@/data/testimonials.json';
import DemoVideo from '@/components/DemoVideo';
import { LightRays } from '@/components/ui/light-rays';
import { FloatingCTA } from '@/components/floating-cta';
import { Lens } from '@/components/ui/lens';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedList } from '@/components/ui/animated-list';
import { ProcessNotification } from '@/components/process-notification';
import { motion, AnimatePresence } from 'motion/react';
import { BsCircleFill } from 'react-icons/bs';
import { PersonIcon } from '@radix-ui/react-icons';

export default function Home() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openVideo, setOpenVideo] = useState<string | null>(null);

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
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-black/95 backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-1 cursor-pointer">
              <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cla<span className="italic">y</span><span className="italic">b</span>ird</span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#community" onClick={(e) => handleSmoothScroll(e, 'community')} className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Community</a>
              <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</a>
              <Link href="/book" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Contact</Link>
              <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Blog</Link>
            </nav>
          </div>

          {/* Right side: CTA Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" className="text-sm text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-xl font-medium">
              <Link href="/book">
                Log in
              </Link>
            </Button>
            <Button asChild className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 font-medium">
              <Link href="/book">
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section className="flex items-start justify-center px-6 relative pt-[15vh] pb-8 md:pb-12">
          {/* Light rays decoration */}
          <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />

          {/* Cloud decorations - commented out for testing
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-30">
            <div className="absolute top-0 left-20 w-32 h-32 bg-blue-300/40 rounded-full blur-3xl"></div>
            <div className="absolute top-10 left-40 w-40 h-40 bg-blue-400/40 rounded-full blur-3xl"></div>
            <div className="absolute top-5 right-20 w-36 h-36 bg-blue-300/40 rounded-full blur-3xl"></div>
          </div>
          */}

          <div className="w-full mx-auto text-center relative z-10 px-8">
            {/* Badge */}
            <a
              href="https://www.youtube.com/watch?v=tjBOwU3I27g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-colors cursor-pointer"
            >
              <span className="text-sm text-blue-600 dark:text-blue-400">Introducing Claybird Agent</span>
              <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 dark:text-gray-100 mb-4">
              The award-winning AI video ad agency
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              We write and produce AI brand ads - then intelligently <br /> generate tailored retargeting videos for every audience segment.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <Button asChild variant="secondary" size="sm" className="rounded-full px-6">
                <Link href="/book">
                  Book a call
                </Link>
              </Button>
              <Button asChild variant="default" size="sm" className="rounded-full px-6 min-w-[240px] justify-center">
                <Link href="/book" className="gap-2 flex items-center justify-center">
                  Design your first campaign
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Search Input - Commented Out */}
            {/* <div className="max-w-2xl mx-auto bg-[#eeedf2] dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-lg p-4">
              <AnimatedPlaceholderInput
                type="text"
                staticPrefix="Ask Claybird to make "
                placeholders={[
                  "Ask Claybird to make a skit about a physics postdoc hating his life until he discovers making money online.",
                  "Ask Claybird to make an ad where someone drinks coffee and their world bursts into color.",
                  "Ask Claybird to make a short video where a person struggles to work out… then finds a fitness app.",
                  "Ask Claybird to make a clip where a young professional drowns in bills until budgeting becomes simple.",
                ]}
                typingSpeed={40}
                deletingSpeed={25}
                pauseDuration={2500}
                className="w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent dark:bg-transparent border-0 outline-none mb-3 px-2 py-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
              />
              <div className="flex items-center justify-end">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="text-gray-400 dark:text-gray-500 h-auto w-auto p-0 hover:bg-transparent">
                    <AudioLines className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-full hover:bg-gray-500 dark:hover:bg-gray-500">
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div> */}

            {/* Email Input with Get Started Button */}
            {/* <div className="max-w-2xl mx-auto">
              <div className={`bg-gray-50 dark:bg-gray-100 rounded-2xl shadow-lg p-4 ring-1 transition-all duration-300 ${showError ? 'ring-[#3b82f6] ring-2' : 'ring-gray-200/50 dark:ring-gray-700/50'}`}>
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative group">
                    <input
                      ref={emailInputRef}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setShowError(false);
                      }}
                      placeholder={showError ? "Enter a valid email address to get started" : "Enter your company email"}
                      className="w-full text-sm text-gray-900 dark:text-gray-900 bg-transparent border-0 outline-none px-3 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 caret-gray-900 dark:caret-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                  </div>
                  <ShimmerButton
                    className="text-sm px-8 py-3"
                    borderRadius="0.5rem"
                    background="rgba(0, 0, 0, 1)"
                    shimmerColor="#ffffff"
                    onClick={() => {
                      if (!email) {
                        setShowError(true);
                        emailInputRef.current?.focus();
                      } else {
                        window.open('https://calendar.app.google/WnAhPmPW456bKBJ89', '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    Get started
                  </ShimmerButton>
                </div>
              </div>
            </div> */}

            {/* Trusted By Section */}
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
              <Marquee pauseOnHover className="[--duration:30s]">
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
          </div>
        </section>

        {/* Video Showcase Section */}
        <section id="community" className="pt-4 pb-8">
          <Marquee pauseOnHover className="[--duration:40s]">
            <div className="flex gap-4 mx-2">
              {/* Video 1 */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/mercor_1.mp4"
                />
              </div>

              {/* Video 2 */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/handshake_short.mp4"
                />
              </div>

              {/* Video 3 */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/kepo_cinematic_ecom.mp4"
                />
              </div>

              {/* Video 4 */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/handshake_alex_phd.mp4"
                />
              </div>

              {/* Video 5 */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/agape.mp4"
                />
              </div>

              {/* Video 6 - New */}
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/sellraze_gorilla_gen_z_video.mp4"
                />
              </div>
            </div>
          </Marquee>
        </section>

        {/* Case Studies Section */}
        <section className="pt-8 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-gray-900 dark:text-gray-100">
                CASE STUDIES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case Study 1 */}
              <Card className="shadow-none">
                <CardHeader>
                  <Lens>
                    <div className="aspect-video w-full rounded-xl overflow-hidden">
                      <Image
                        src="/testimonials/agape-case-study-thumbnail.png"
                        alt="Agapé case study"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Lens>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">Agapé</CardTitle>
                  <CardDescription className="line-clamp-2">
                    To retarget Bay Area engineers, we crafted a funny love story tracing a couple&apos;s journey from childhood Kumon classes to Silicon Valley careers—creating authentic connection through deeply personal, relatable narratives.
                  </CardDescription>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button size="sm" onClick={() => setOpenVideo('/videos/agape.mp4')}>
                    Watch ad
                  </Button>
                  <Button variant="secondary" size="sm">
                    Read more
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 2 */}
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
                  <Button size="sm" onClick={() => setOpenVideo('/videos/kepo_cinematic_ecom.mp4')}>
                    Watch ad
                  </Button>
                  <Button variant="secondary" size="sm">
                    Read more
                  </Button>
                </CardFooter>
              </Card>

              {/* Case Study 3 */}
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
                  <Button variant="secondary" size="sm">
                    Read more
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
            <Marquee pauseOnHover className="[--duration:40s]">
              {testimonials.slice(0, 4).map((tweet) => (
                <TestimonialCard key={tweet.id} {...tweet} className="mx-2" />
              ))}
            </Marquee>

            {/* Second row - moving left */}
            <Marquee reverse pauseOnHover className="[--duration:40s]">
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
