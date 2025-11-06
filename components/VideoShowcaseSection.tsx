'use client';

import { Marquee } from '@/components/ui/marquee';

export function VideoShowcaseSection() {
  return (
    <section id="community" className="pt-4 pb-8">
      <Marquee className="[--duration:40s]">
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

          {/* Video 10 */}
          <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/american_eagle_2.mp4"
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
              src="/videos/kepos_new.mp4"
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
              src="/videos/stratus.mp4"
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
              src="/videos/handshake_alex_phd.mp4"
            />
          </div>

          {/* Video 6 */}
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

          {/* Video 7 */}
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

          {/* Video 8 */}
          <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/channl.mp4"
            />
          </div>

          {/* Video 9 */}
          <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900/50">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/american_eagle_1.mp4"
            />
          </div>
        </div>
      </Marquee>
    </section>
  );
}
