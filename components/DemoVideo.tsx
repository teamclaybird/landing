'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function DemoVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
      setShowHint(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/testimonials/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Mute/Unmute Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <div className="bg-black/70 backdrop-blur-sm rounded-full p-4">
                  {isMuted ? (
                    <VolumeX className="w-8 h-8 text-white" />
                  ) : (
                    <Volume2 className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Hint Indicator */}
              {showHint && isMuted && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm animate-pulse">
                  Click to enable audio
                </div>
              )}
            </div>

            {/* Audio Status Indicator */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
