"use client"

import * as React from "react"
import { FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9">
      <FaDiscord className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Discord</span>
    </Button>
  )
}
