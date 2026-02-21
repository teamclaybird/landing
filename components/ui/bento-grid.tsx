import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
      // Glossy black background
      "bg-black backdrop-blur-xl border border-white/20",
      // Glossy gradient overlay
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:opacity-50",
      // Shine effect on hover
      "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent after:translate-x-[-200%] after:transition-transform after:duration-700 hover:after:translate-x-[200%]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-6 flex flex-col h-full relative z-10">
      {/* Header: Name on left, Icon on right */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white drop-shadow-lg">
          {name}
        </h3>
        <Icon className="h-5 w-5 text-white flex-shrink-0 drop-shadow-lg" />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 flex-grow drop-shadow-md">{description}</p>

      {/* CTA Link - Only show if cta and href are provided */}
      {cta && href && (
        <div className="mt-auto">
          <Button
            variant="link"
            asChild
            size="sm"
            className="p-0 h-auto text-sm text-white hover:text-gray-200"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </a>
          </Button>
        </div>
      )}
    </div>

    {/* Glossy reflection overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 bg-gradient-to-b from-white/5 to-transparent opacity-60 group-hover:opacity-80" />
  </div>
)

export { BentoCard, BentoGrid }
