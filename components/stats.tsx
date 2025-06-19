"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
  { number: 50, label: "Happy Clients", suffix: "+" },
  { number: 24, label: "Support Hours", suffix: "/7" },
]

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`text-4xl md:text-6xl font-bold ${
                    index === 0
                      ? "bg-gradient-to-r from-pink-500 to-rose-500"
                      : index === 1
                        ? "bg-gradient-to-r from-purple-500 to-violet-500"
                        : index === 2
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                  } bg-clip-text text-transparent`}
                >
                  <AnimatedNumber value={stat.number} />
                  {stat.suffix}
                </div>
                <motion.div
                  className={`absolute -inset-4 ${
                    index === 0
                      ? "bg-gradient-to-r from-pink-500/20 to-rose-500/20"
                      : index === 1
                        ? "bg-gradient-to-r from-purple-500/20 to-violet-500/20"
                        : index === 2
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                          : "bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                  } rounded-full blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
