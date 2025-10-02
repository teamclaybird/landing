'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, AudioLines, ArrowUp, MessageSquare, Layout, Video, Scissors, Upload, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Marquee } from '@/components/ui/marquee';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TestimonialCard } from '@/components/testimonial-card';
import testimonials from '@/data/testimonials.json';
import DemoVideo from '@/components/DemoVideo';
import { LightRays } from '@/components/ui/light-rays';
import { AnimatedPlaceholderInput } from '@/components/ui/animated-placeholder-input';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { FloatingCTA } from '@/components/floating-cta';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#eeedf2] dark:bg-black/95 backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-1 cursor-pointer">
              <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Claybird</span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#community" onClick={(e) => handleSmoothScroll(e, 'community')} className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Community</a>
              <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</a>
              <a href="https://calendar.app.google/WnAhPmPW456bKBJ89" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Contact</a>
              <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Blog</Link>
            </nav>
          </div>

          {/* Right side: CTA Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="text-sm text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-xl font-medium">
              Log in
            </Button>
            <Button asChild className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 font-medium">
              <a href="https://calendar.app.google/WnAhPmPW456bKBJ89" target="_blank" rel="noopener noreferrer">
                Get started
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section className="flex items-start justify-center px-6 relative pt-[25vh] pb-16 md:pb-24">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full">
              <span className="text-sm text-blue-600 dark:text-blue-400">Introducing Claybird Agent</span>
              <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 dark:text-gray-100 mb-4">
              Idea to <span className="italic">video</span> in minutes
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
              Claybird is the AI platform for creating video ads.
              <br />
              Post directly to managed accounts or export videos anywhere.
            </p>

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
            <div className="max-w-2xl mx-auto">
              <div className={`bg-[#eeedf2] dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 ring-1 transition-all duration-300 ${showError ? 'ring-[#3b82f6] ring-2' : 'ring-gray-200/50 dark:ring-gray-700/50'}`}>
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
                      className="w-full text-sm text-gray-900 dark:text-gray-100 bg-transparent border-0 outline-none px-3 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 caret-gray-900 dark:caret-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
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
            </div>

            {/* Trusted By Section */}
            <div className="mt-16">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider flex items-center justify-center gap-2">
                Backed by
                <a
                  href="https://www.ycombinator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-5 h-5 bg-[#FF6600] items-center justify-center hover:bg-[#FF7700] transition-colors cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">Y</span>
                </a>
                and trusted by growth teams at
              </p>
              <Marquee pauseOnHover className="[--duration:30s]">
                <div className="flex items-center gap-12 mx-6">
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    Mercor
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    Zareen&apos;s Restaurant
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    Agapé
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    InterviewCoder
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    Headstarter
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    tangent.run
                  </div>
                  <div className="flex items-center justify-center h-12 px-8 text-gray-400 dark:text-gray-500 font-semibold text-lg">
                    SolarX
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section id="community" className="pt-4 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Video 1 */}
              <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/demo.mov"
                />
              </div>

              {/* Video 2 */}
              <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/demo.mov"
                />
              </div>

              {/* Video 3 */}
              <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/demo.mov"
                />
              </div>

              {/* Video 4 */}
              <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/demo.mov"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Bento Grid */}
        <section className="py-16 px-6">
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
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-16 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6"
            onClick={() => window.open('https://calendar.app.google/WnAhPmPW456bKBJ89', '_blank', 'noopener,noreferrer')}
          >
            Book a demo and get started
          </ShimmerButton>
        </section>

        {/* Twitter Testimonials Section */}
        <section id="testimonials" className="py-16 px-6">
          <div className="max-w-7xl mx-auto mb-12 text-center">
            <h2 className="text-xl md:text-2xl font-mono text-gray-900 dark:text-gray-100 flex items-center justify-center gap-3">
              Marketers <Heart className="w-6 h-6 fill-white text-white" /> Claybird
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

        {/* Demo Video Section */}
        <DemoVideo />

        {/* Book a Demo Section */}
        <section className="px-6 pb-16 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6"
            onClick={() => window.open('https://calendar.app.google/WnAhPmPW456bKBJ89', '_blank', 'noopener,noreferrer')}
          >
            Book a demo and get started
          </ShimmerButton>
        </section>

        {/* Footer - White Card */}
        <footer className="px-6 pb-12">
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12">
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
    </div>
  );
}
