'use client';

import { useState } from 'react';
import * as React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Download } from 'lucide-react';

export default function BrandPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [linkedinPng, setLinkedinPng] = useState<string>('');
  const [twitterPng, setTwitterPng] = useState<string>('');

  const generateSvg = async (width: number, height: number) => {
    const satori = (await import('satori')).default;

    // Fetch Playfair Display (serif similar to Libre Caslon) from Google Fonts
    const fontData = await fetch(
      'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.ttf'
    ).then((res) => res.arrayBuffer());

    return await satori(
        {
          type: 'div',
          props: {
            style: {
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: width > 1000 ? 80 : 60,
                    fontWeight: 700,
                    color: '#ffffff',
                    textAlign: 'center',
                    marginBottom: 20,
                    fontFamily: 'Playfair Display',
                  },
                  children: 'Idea to video in minutes',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: width > 1000 ? 32 : 24,
                    color: '#ffffff',
                    textAlign: 'center',
                    maxWidth: 800,
                  },
                  children: 'Claybird plans, creates, and edits your AI video ad.',
                },
              },
            ],
          },
        },
        {
          width,
          height,
          fonts: [
            {
              name: 'Playfair Display',
              data: fontData,
              weight: 700,
              style: 'normal',
            },
          ],
        }
      );
  };

  const svgToPng = (svg: string, width: number, height: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
      img.src = 'data:image/svg+xml;base64,' + btoa(svg);
    });
  };

  const handleDownload = async (pngDataUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = pngDataUrl;
    link.click();
  };

  // Generate previews on mount
  React.useEffect(() => {
    const loadPreviews = async () => {
      try {
        const linkedinSvg = await generateSvg(1584, 396);
        const twitterSvg = await generateSvg(1500, 500);

        const linkedinPngData = await svgToPng(linkedinSvg, 1584, 396);
        const twitterPngData = await svgToPng(twitterSvg, 1500, 500);

        setLinkedinPng(linkedinPngData);
        setTwitterPng(twitterPngData);
      } catch (error) {
        console.error('Error loading previews:', error);
      }
    };
    loadPreviews();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header - Same as main page */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#eeedf2] dark:bg-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <NextImage src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Claybird</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#community" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Community</Link>
              <Link href="/#testimonials" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Testimonials</Link>
              <a href="https://calendar.app.google/WnAhPmPW456bKBJ89" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Contact</a>
              <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">Blog</Link>
            </nav>
          </div>

          {/* Right side: CTA Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" className="text-sm text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-xl font-medium">
              <a href="https://app.claybird.ai" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
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
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* LinkedIn Banner */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">LinkedIn Banner</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1584 × 396 px</p>
                </div>
                <Button
                  onClick={() => handleDownload(linkedinPng, 'claybird-linkedin-banner.png')}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  disabled={!linkedinPng}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-auto">
                {linkedinPng ? (
                  <img src={linkedinPng} alt="LinkedIn Banner" width={1584} height={396} />
                ) : (
                  <div className="flex items-center justify-center h-96">
                    <p className="text-gray-500">Loading preview...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Twitter Banner */}
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Twitter Banner</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1500 × 500 px</p>
                </div>
                <Button
                  onClick={() => handleDownload(twitterPng, 'claybird-twitter-banner.png')}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  disabled={!twitterPng}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-auto">
                {twitterPng ? (
                  <img src={twitterPng} alt="Twitter Banner" width={1500} height={500} />
                ) : (
                  <div className="flex items-center justify-center h-96">
                    <p className="text-gray-500">Loading preview...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
