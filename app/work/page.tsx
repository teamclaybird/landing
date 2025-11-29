'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LightRays } from '@/components/ui/light-rays';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

// Shorts data (vertical videos)
const shorts = [
  { src: '/videos/american_eagle_1.mp4', type: 'short' },
  { src: '/videos/delve.mp4', type: 'short' },
  { src: '/videos/american_eagle_2.mp4', type: 'short' },
  { src: '/videos/handshake_short.mp4', type: 'short' },
  { src: '/videos/kepos_new.mp4', type: 'short' },
  { src: '/videos/stratus.mp4', type: 'short' },
  { src: '/videos/channl.mp4', type: 'short' },
  { src: '/videos/mercor_1.mp4', type: 'short' },
  { src: '/videos/agape.mp4', type: 'short' },
  { src: '/videos/sellraze_gorilla_gen_z_video.mp4', type: 'short' },
  { src: '/videos/handshake_alex_phd.mp4', type: 'short' },
];

// Horizontal videos data
const horizontalVideos = [
  // { src: '/videos/audi_ad.mp4', title: 'Audi F1 Spec Ad' },
  { src: '/videos/coke_holiday.mp4', title: 'Coke Holiday Ad' },
  { src: '/videos/running_brand.mp4', title: 'Running Brand Project' },
  { src: '/videos/lunavo_launch_video.mp4', title: 'Lunavo Lauch Video' },
  { src: '/videos/automax_v1.mp4', title: 'Automax' },
  { src: '/videos/lunabill_v5_compressed.mp4', title: 'Lunabill' },
];

// Image data
const images = [
  { src: '/images/portfolio/soap_1.jpg', alt: 'Brooklyn Soap Company 1' },
  { src: '/images/portfolio/rizz_2.jpg', alt: 'Rizz 2' },
  { src: '/images/portfolio/soap_2.jpg', alt: 'Brooklyn Soap Company 2' },
  { src: '/images/portfolio/rizz_1.jpg', alt: 'Rizz 1' },
  { src: '/images/portfolio/adidas_1.png', alt: 'Adidas 1' },
  { src: '/images/portfolio/soap_3.jpg', alt: 'Brooklyn Soap Company 3' },
  { src: '/images/portfolio/adidas_2.png', alt: 'Adidas 2' },
  { src: '/images/portfolio/adidas_3.png', alt: 'Adidas 3' },
  { src: '/images/portfolio/rizz_3.jpg', alt: 'Rizz 3' },
  { src: '/images/portfolio/soap_4.jpg', alt: 'Brooklyn Soap Company 4' },
  { src: '/images/portfolio/adidas_4.png', alt: 'Adidas 4' },
  { src: '/images/portfolio/rizz_4.jpg', alt: 'Rizz 4' },
  { src: '/images/portfolio/soap_5.jpg', alt: 'Brooklyn Soap Company 5' },
  { src: '/images/portfolio/adidas_5.png', alt: 'Adidas 5' },
  { src: '/images/portfolio/rizz_5.jpg', alt: 'Rizz 5' },
  { src: '/images/portfolio/soap_6.jpg', alt: 'Brooklyn Soap Company 6' },
  { src: '/images/portfolio/soap_7.jpg', alt: 'Brooklyn Soap Company 7' },
  { src: '/images/portfolio/soap_8.jpg', alt: 'Brooklyn Soap Company 8' },
];

export default function Work() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [openMedia, setOpenMedia] = useState<{ src: string; type: 'video' | 'image'; alt?: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMediaClick = (e: React.MouseEvent, media: { src: string; type: 'video' | 'image'; alt?: string }) => {
    // On mobile, fullscreen the existing video player
    if (isMobile && media.type === 'video') {
      const videoElement = e.currentTarget.querySelector('video');
      if (videoElement) {
        videoElement.controls = true;
        videoElement.muted = false;
        videoElement.style.objectFit = 'contain';

        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        }

        // Reset when exiting fullscreen
        const handleFullscreenChange = () => {
          if (!document.fullscreenElement) {
            videoElement.controls = false;
            videoElement.muted = true;
            videoElement.style.objectFit = 'cover';
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
          }
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
      }
    } else {
      // On desktop or for images, use the modal
      setOpenMedia(media);
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
            <Link href="/" className="flex items-center gap-1 cursor-pointer">
              <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cla<span className="italic">y</span><span className="italic">b</span>ird</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/work" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Portfolio</Link>
              <Link href="/#testimonials" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</Link>
              <Link href="/book" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Contact</Link>
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
      <main className="relative min-h-screen pt-32 pb-16 px-6">
        {/* Light rays decoration */}
        <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Our Work
          </h1>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full px-6 py-3.5 text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-600 dark:text-gray-400 data-[state=active]:dark:bg-white data-[state=active]:dark:text-gray-900"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-full px-6 py-3.5 text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-600 dark:text-gray-400 data-[state=active]:dark:bg-white data-[state=active]:dark:text-gray-900"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="shorts"
                  className="rounded-full px-6 py-3.5 text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-600 dark:text-gray-400 data-[state=active]:dark:bg-white data-[state=active]:dark:text-gray-900"
                >
                  Shorts
                </TabsTrigger>
                <TabsTrigger
                  value="images"
                  className="rounded-full px-6 py-3.5 text-base data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm text-gray-600 dark:text-gray-400 data-[state=active]:dark:bg-white data-[state=active]:dark:text-gray-900"
                >
                  Images
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                {/* Videos Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Videos</h2>
                    <button
                      onClick={() => setActiveTab('videos')}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium"
                    >
                      View more →
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {horizontalVideos.slice(0, 2).map((video, index) => (
                      <div
                        key={`horizontal-${index}`}
                        className="aspect-video overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                        onClick={(e) => handleMediaClick(e, { src: video.src, type: 'video' })}
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          src={video.src}
                          onLoadedMetadata={(e) => {
                            const videoElement = e.currentTarget;
                            videoElement.currentTime = 2.5;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shorts Section */}
                <div className="pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Shorts</h2>
                    <button
                      onClick={() => setActiveTab('shorts')}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium"
                    >
                      View more →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {shorts.slice(0, 6).map((video, index) => (
                      <div
                        key={`short-${index}`}
                        className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                        onClick={(e) => handleMediaClick(e, { src: video.src, type: 'video' })}
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          src={video.src}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Images Section */}
                <div className="pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Images</h2>
                    <button
                      onClick={() => setActiveTab('images')}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium"
                    >
                      View more →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {images.slice(0, 6).map((image, index) => (
                      <div
                        key={`image-${index}`}
                        className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                        onClick={(e) => handleMediaClick(e, { src: image.src, type: 'image', alt: image.alt })}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={1067}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="videos">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {horizontalVideos.map((video, index) => (
                    <div
                      key={index}
                      className="aspect-video overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                      onClick={(e) => handleMediaClick(e, { src: video.src, type: 'video' })}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src={video.src}
                        onLoadedMetadata={(e) => {
                          const videoElement = e.currentTarget;
                          videoElement.currentTime = 2.5;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="shorts">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {shorts.map((video, index) => (
                    <div
                      key={index}
                      className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                      onClick={(e) => handleMediaClick(e, { src: video.src, type: 'video' })}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src={video.src}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="images">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50 cursor-pointer"
                      onClick={(e) => handleMediaClick(e, { src: image.src, type: 'image', alt: image.alt })}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={1067}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Media Overlay */}
      <AnimatePresence>
        {openMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMedia(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <button
                onClick={() => setOpenMedia(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative isolate overflow-hidden rounded-2xl border-2 border-white/20 bg-black flex items-center justify-center max-h-[90vh]">
                {openMedia.type === 'video' ? (
                  <>
                    <video
                      src={openMedia.src}
                      className="max-w-full max-h-[90vh] w-auto h-auto"
                      controls
                      autoPlay
                    />
                    {/* Floating CTA Button */}
                    <Link
                      href="/book"
                      className="absolute top-6 right-6 bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 shadow-lg font-medium z-10 flex items-center gap-2"
                    >
                      Try Claybird
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </>
                ) : (
                  <Image
                    src={openMedia.src}
                    alt={openMedia.alt || 'Portfolio image'}
                    width={1200}
                    height={1600}
                    className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
