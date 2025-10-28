'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

const images = [
  { src: '/images/portfolio/soap_1.jpg', alt: 'Brooklyn Soap Company 1' },
  { src: '/images/portfolio/adidas_1.png', alt: 'Adidas 1' },
  { src: '/images/portfolio/soap_2.jpg', alt: 'Brooklyn Soap Company 2' },
  { src: '/images/portfolio/soap_3.jpg', alt: 'Brooklyn Soap Company 3' },
  { src: '/images/portfolio/adidas_2.png', alt: 'Adidas 2' },
  { src: '/images/portfolio/soap_4.jpg', alt: 'Brooklyn Soap Company 4' },
  { src: '/images/portfolio/adidas_3.png', alt: 'Adidas 3' },
  { src: '/images/portfolio/soap_5.jpg', alt: 'Brooklyn Soap Company 5' },
  { src: '/images/portfolio/soap_6.jpg', alt: 'Brooklyn Soap Company 6' },
  { src: '/images/portfolio/adidas_4.png', alt: 'Adidas 4' },
  { src: '/images/portfolio/soap_7.jpg', alt: 'Brooklyn Soap Company 7' },
  { src: '/images/portfolio/adidas_5.png', alt: 'Adidas 5' },
  { src: '/images/portfolio/soap_8.jpg', alt: 'Brooklyn Soap Company 8' },
];

export function ImageShowcaseSection() {
  return (
    <section id="showcase" className="pt-4 pb-8">
      <Marquee pauseOnHover className="[--duration:40s]">
        <div className="flex gap-4 mx-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[280px] aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={280}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
