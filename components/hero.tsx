"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Zap, Code, Palette } from "lucide-react"
import RippleEffect from "@/components/ripple-effect"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Colorful Animated Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 via-blue-500/20 via-cyan-500/20 to-green-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(119,255,198,0.3),transparent_50%)]" />
      </motion.div>

      {/* Floating Colorful Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 6 === 0
                ? "bg-pink-500/40"
                : i % 6 === 1
                  ? "bg-purple-500/40"
                  : i % 6 === 2
                    ? "bg-blue-500/40"
                    : i % 6 === 3
                      ? "bg-cyan-500/40"
                      : i % 6 === 4
                        ? "bg-green-500/40"
                        : "bg-yellow-500/40"
            }`}
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-4 border-pink-500/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-500/30 to-yellow-500/30"
          animate={{ y: [-20, 20, -20], rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.div className="relative z-10 text-center px-4 max-w-6xl mx-auto" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-lg font-medium backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
           
            <Zap className="w-5 h-5 ml-3 text-cyan-400" />
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {/* REPLICATE */}
          </span>
          <br />
          <span className="text-white">&</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            {/* INNOVATE */}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to the ultimate frontend challenge. Create{" "}
          <span className="text-pink-400 font-semibold">pixel-perfect</span> designs with{" "}
          <span className="text-cyan-400 font-semibold">innovative features</span> that elevate user experience.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RippleEffect>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Features
            </Button>
          </RippleEffect>
          <RippleEffect>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <Palette className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
          </RippleEffect>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          className="flex justify-center space-x-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Code, color: "text-pink-400", bg: "bg-pink-500/20" },
            { icon: Palette, color: "text-purple-400", bg: "bg-purple-500/20" },
            { icon: Zap, color: "text-cyan-400", bg: "bg-cyan-500/20" },
            { icon: Sparkles, color: "text-green-400", bg: "bg-green-500/20" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-full ${item.bg} backdrop-blur-sm`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="w-8 h-8 mx-auto text-gradient-to-r from-pink-400 to-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
