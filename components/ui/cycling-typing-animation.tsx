"use client"

import { useEffect, useState } from "react"

interface CyclingTypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function CyclingTypingAnimation({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = "",
}: CyclingTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[currentPhraseIndex]

    if (!isDeleting && displayedText === currentPhrase) {
      // Finished typing, pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === "") {
      // Finished deleting, move to next phrase
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    // Type or delete one character
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        } else {
          // Deleting
          setDisplayedText(displayedText.slice(0, -1))
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayedText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
