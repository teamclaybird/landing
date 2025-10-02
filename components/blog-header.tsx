"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function BlogHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
            <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Claybird</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Blog
            </Link>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Community
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Contact
            </a>
          </nav>
        </div>

        {/* Right side: CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="text-sm text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-xl font-medium">
            <a href="https://app.claybird.ai" target="_blank" rel="noopener noreferrer">
              Log in
            </a>
          </Button>
          <Button className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 font-medium">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
