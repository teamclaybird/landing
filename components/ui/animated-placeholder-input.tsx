"use client"

import { useEffect, useState } from "react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

interface AnimatedPlaceholderInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholders: string[]
  staticPrefix?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function AnimatedPlaceholderInput({
  placeholders,
  staticPrefix = "",
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className,
  value,
  ...props
}: AnimatedPlaceholderInputProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [inputValue, setInputValue] = useState(value || "")

  useEffect(() => {
    // Only animate if input is empty
    if (inputValue) return

    if (placeholders.length === 0) return

    const currentPhrase = placeholders[currentPhraseIndex]
    const prefixLength = staticPrefix.length

    if (!isDeleting && displayedText === currentPhrase) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    // When deleting, only delete back to the prefix length
    if (isDeleting && displayedText.length === prefixLength) {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % placeholders.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        } else {
          setDisplayedText(displayedText.slice(0, -1))
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayedText, currentPhraseIndex, isDeleting, placeholders, staticPrefix, typingSpeed, deletingSpeed, pauseDuration, inputValue])

  return (
    <div className="relative">
      {!inputValue && (
        <div className="absolute left-2 top-1 pointer-events-none text-sm text-gray-500 dark:text-gray-400 text-left">
          {displayedText}
          <span className="animate-pulse">|</span>
        </div>
      )}
      <Input
        {...props}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          props.onChange?.(e)
        }}
        className={cn(className)}
      />
    </div>
  )
}
