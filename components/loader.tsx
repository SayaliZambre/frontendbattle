"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          FRONTEND BATTLE 2.0
        </motion.h2>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-gray-400 mt-4">{progress}% Loading...</p>
      </div>
    </div>
  )
}
