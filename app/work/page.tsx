'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { motion, AnimatePresence } from 'motion/react';

// Portfolio videos
const videos = [
  { src: '/videos/lunavo_compressed.mp4', title: 'Lunavo' },
  { src: '/videos/claybird_compressed.mp4', title: 'Claybird' },
  { src: '/videos/corvera_compressed.mp4', title: 'Corvera' },
  { src: '/videos/automax_compressed.mp4', title: 'Automax' },
  { src: '/videos/american_eagle_1.mp4', title: 'American Eagle 1' },
  { src: '/videos/delve.mp4', title: 'Delve' },
  { src: '/videos/american_eagle_2.mp4', title: 'American Eagle 2' },
  { src: '/videos/handshake_short.mp4', title: 'Handshake Short' },
  { src: '/videos/kepos_new.mp4', title: 'Kepos' },
  { src: '/videos/stratus.mp4', title: 'Stratus' },
  { src: '/videos/channl.mp4', title: 'Channl' },
  { src: '/videos/mercor_1.mp4', title: 'Mercor' },
  { src: '/videos/agape.mp4', title: 'Agape' },
  { src: '/videos/sellraze_gorilla_gen_z_video.mp4', title: 'Sellraze' },
  { src: '/videos/handshake_alex_phd.mp4', title: 'Handshake Alex PhD' },
  { src: '/videos/audi_ad.mp4', title: 'Audi F1 Spec Ad' },
  { src: '/videos/coke_holiday.mp4', title: 'Coke Holiday Ad' },
  { src: '/videos/running_brand.mp4', title: 'Running Brand' },
  { src: '/videos/lunavo_launch_video.mp4', title: 'Lunavo Launch Video' },
  { src: '/videos/automax_v1.mp4', title: 'Automax V1' },
  { src: '/videos/lunabill_v5_compressed.mp4', title: 'Lunabill' },
];

export default function Work() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const handleVideoClick = (src: string) => {
    setOpenVideo(src);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Main content */}
      <main className="relative min-h-screen pt-32 pb-16 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-16">
            Our Work
          </h1>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-2xl bg-black border border-white/10 cursor-pointer hover:border-white/30 transition-all"
                onClick={() => handleVideoClick(video.src)}
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

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <div className="text-white text-2xl font-bold">{video.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Video Overlay */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(null)}
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
                onClick={() => setOpenVideo(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative isolate overflow-hidden rounded-2xl border-2 border-white/20 bg-black flex items-center justify-center max-h-[90vh]">
                <video
                  src={openVideo}
                  className="max-w-full max-h-[90vh] w-auto h-auto"
                  controls
                  autoPlay
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
