import * as React from "react"
import { Slot as SlotPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-tvec-blue focus-visible:ring-tvec-blue/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-tvec-navy text-white hover:bg-tvec-navy/90",
        primary: "bg-tvec-blue text-white hover:bg-tvec-blue/90",
        secondary: "bg-tvec-yellow text-tvec-navy hover:bg-tvec-yellow-bright",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-tvec-blue bg-transparent text-tvec-blue hover:bg-tvec-blue hover:text-white",
        "outline-navy":
          "border-2 border-tvec-navy bg-transparent text-tvec-navy hover:bg-tvec-navy hover:text-white",
        "outline-yellow":
          "border-2 border-tvec-yellow bg-transparent text-tvec-yellow hover:bg-tvec-yellow hover:text-tvec-navy",
        "outline-blue":
          "border-2 border-tvec-blue-light bg-transparent text-tvec-blue-light hover:bg-tvec-blue-light hover:text-white",
        ghost:
          "hover:bg-tvec-blue/10 hover:text-tvec-blue",
        link: "text-tvec-blue underline-offset-4 hover:underline hover:text-tvec-blue/80",
        gradient: "gradient-blue-electric text-white",
        glass: "glass-blue text-white border-tvec-blue/20 hover:bg-tvec-blue/20",
        // Hero section variants with animations (only for hero)
        "hero-primary": "bg-tvec-blue text-white hover:bg-tvec-blue/90 hover:shadow-floating hover:scale-105 electric-glow lightning-border transition-all duration-300",
        "hero-secondary": "bg-tvec-yellow text-tvec-navy hover:bg-tvec-yellow-bright hover:shadow-floating hover:scale-105 lightning-glow transition-all duration-300",
        "hero-outline": "border-2 border-tvec-blue bg-transparent text-tvec-blue hover:bg-tvec-blue hover:text-white hover:shadow-floating hover:scale-105 lightning-border transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
