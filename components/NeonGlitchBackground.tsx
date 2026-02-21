'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GlitchText {
  id: string;
  x: number;
  y: number;
  text: 'LAUNCH' | 'HARDER';
}

export function NeonGlitchBackground() {
  const [glitchTexts, setGlitchTexts] = useState<GlitchText[]>([]);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide glitches when in hero section (first 70vh)
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const createGlitch = () => {
      const id = Math.random().toString(36);

      // Only spawn in the edges/corners - completely avoid center where cards are
      let x, y;
      let attempts = 0;
      const maxAttempts = 10;

      // Try to find a non-overlapping position
      do {
        const zone = Math.floor(Math.random() * 4); // 0=left, 1=right, 2=top, 3=bottom

        if (zone === 0) {
          // Left edge
          x = Math.random() * 15 + 2; // 2-17%
          y = Math.random() * 90 + 5; // 5-95%
        } else if (zone === 1) {
          // Right edge
          x = Math.random() * 15 + 83; // 83-98%
          y = Math.random() * 90 + 5; // 5-95%
        } else if (zone === 2) {
          // Top edge (but not in center)
          y = Math.random() * 15 + 2; // 2-17%
          x = Math.random() < 0.5
            ? Math.random() * 30 + 2  // Left side: 2-32%
            : Math.random() * 30 + 68; // Right side: 68-98%
        } else {
          // Bottom edge (but not in center)
          y = Math.random() * 15 + 83; // 83-98%
          x = Math.random() < 0.5
            ? Math.random() * 30 + 2  // Left side: 2-32%
            : Math.random() * 30 + 68; // Right side: 68-98%
        }

        attempts++;
      } while (
        attempts < maxAttempts &&
        glitchTexts.some(existing => {
          // Check if the new position is too close to any existing glitch (within 15% distance)
          const distance = Math.sqrt(Math.pow(x - existing.x, 2) + Math.pow(y - existing.y, 2));
          return distance < 15;
        })
      );

      // If we couldn't find a good spot after max attempts, skip this glitch
      if (attempts >= maxAttempts && glitchTexts.some(existing => {
        const distance = Math.sqrt(Math.pow(x - existing.x, 2) + Math.pow(y - existing.y, 2));
        return distance < 15;
      })) {
        return;
      }

      const text = Math.random() > 0.5 ? 'LAUNCH' : 'HARDER';

      const newGlitch: GlitchText = { id, x, y, text };

      setGlitchTexts(prev => [...prev, newGlitch]);

      // Remove after a short duration
      setTimeout(() => {
        setGlitchTexts(prev => prev.filter(g => g.id !== id));
      }, 500 + Math.random() * 700); // 500-1200ms duration
    };

    // Create glitches at random intervals
    const interval = setInterval(() => {
      // Create 2-4 glitches at once
      const count = Math.floor(Math.random() * 3) + 2; // 2-4 glitches
      for (let i = 0; i < count; i++) {
        createGlitch();
      }
    }, 400); // Check every 400ms

    return () => clearInterval(interval);
  }, []);

  // Don't render glitches when hero is visible
  if (isHeroVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {glitchTexts.map((glitch) => (
          <motion.div
            key={glitch.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="fixed font-black whitespace-nowrap font-mono"
            style={{
              left: `${glitch.x}%`,
              top: `${glitch.y}%`,
              fontSize: 'clamp(1rem, 3vw, 2rem)',
              letterSpacing: '-0.08em',
              color: '#FF0000',
              WebkitTextStroke: '1px #FF0000',
              paintOrder: 'stroke fill',
              transform: 'scaleY(1.5)',
            }}
          >
            {glitch.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
