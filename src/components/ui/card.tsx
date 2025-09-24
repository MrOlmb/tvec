import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-tvec-blue/30 py-6 shadow-professional hover:shadow-elevated hover-lift transition-all duration-300 backdrop-blur-sm glass-blue group overflow-hidden relative electrical-particles",
        "hover:border-tvec-yellow/50 hover:electric-glow",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative z-10",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-lg text-white group-hover:text-tvec-yellow transition-colors duration-300 electric-glow", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 relative z-10", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6 relative z-10", className)}
      {...props}
    />
  )
}

// Special card variants for enhanced designs
function CardGlow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-glow"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-tvec-blue/40 py-6 shadow-professional hover:shadow-floating hover-lift electric-glow transition-all duration-300 backdrop-blur-sm glass-blue group overflow-hidden relative electrical-particles",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-tvec-blue/10 before:to-tvec-yellow/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300",
        "hover:lightning-border",
        className
      )}
      {...props}
    />
  )
}

function CardGradient({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-gradient"
      className={cn(
        "gradient-blue-electric text-white flex flex-col gap-6 rounded-xl py-6 shadow-professional hover:shadow-floating hover-lift transition-all duration-300 group overflow-hidden relative electrical-grid",
        "before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300",
        "hover:lightning-border hover:electric-glow",
        className
      )}
      {...props}
    />
  )
}

function CardFeature({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-feature"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border-2 border-tvec-blue/30 py-8 shadow-elevated hover:shadow-floating hover-lift transition-all duration-300 backdrop-blur-sm glass-blue group overflow-hidden relative electrical-particles",
        "hover:border-tvec-yellow/50 hover:electric-glow",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-blue-electric before:transform before:scale-x-0 before:group-hover:scale-x-100 before:transition-transform before:duration-300",
        "lightning-border",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardGlow,
  CardGradient,
  CardFeature,
}
