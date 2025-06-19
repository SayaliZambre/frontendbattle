"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollAnimations() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="icon"
              onClick={scrollToTop}
              className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
        style={{
          scaleX:
            typeof window !== "undefined"
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0,
        }}
      />
    </>
  )
}
