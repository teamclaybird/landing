"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="relative bg-white dark:bg-white rounded-2xl shadow-2xl p-6 w-[280px] border border-gray-200 dark:border-gray-200">
        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="pr-4">
          <h3 className="text-gray-900 dark:text-gray-900 text-base font-semibold mb-2">
            10x your video campaigns
          </h3>
          <p className="text-gray-600 dark:text-gray-600 text-sm mb-5">
            Schedule a personalized demo to see how Claybird can fit into your content workflow.
          </p>
          <Button className="w-full bg-black dark:bg-black text-white dark:text-white hover:bg-gray-800 dark:hover:bg-gray-800 rounded-full font-medium py-5 flex items-center justify-center gap-2">
            <span>Book a demo</span>
            <div className="flex items-center -space-x-2">
              <Image
                src="/testimonials/saad.jpg"
                alt="Team member"
                width={24}
                height={24}
                className="rounded-full border-2 border-black"
              />
              <Image
                src="/testimonials/me.jpg"
                alt="Team member"
                width={24}
                height={24}
                className="rounded-full border-2 border-black"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
