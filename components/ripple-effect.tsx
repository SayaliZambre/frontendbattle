"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface RippleEffectProps {
  children: React.ReactNode
  className?: string
}

export default function RippleEffect({ children, className = "" }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const nextRippleId = useRef(0)

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: nextRippleId.current++,
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <div className={`relative overflow-hidden ${className}`} onMouseDown={createRipple}>
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute pointer-events-none bg-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            opacity: 1,
          }}
          animate={{
            width: 200,
            height: 200,
            x: -100,
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
