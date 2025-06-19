"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Modern Web Development",
    description: "Building the future of web applications with cutting-edge technologies and innovative approaches.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-pink-600 via-rose-600 to-red-600",
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Creating seamless experiences across all devices with mobile-first design principles.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-600 via-violet-600 to-indigo-600",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Delivering lightning-fast applications with advanced optimization techniques.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-cyan-600 via-blue-600 to-indigo-600",
  },
  {
    id: 4,
    title: "User Experience",
    description: "Crafting intuitive and engaging user interfaces that delight and convert.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    id: 5,
    title: "Creative Innovation",
    description: "Pushing boundaries with creative solutions and cutting-edge design trends.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-yellow-600 via-orange-600 to-red-600",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects and innovations in frontend development.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center h-full p-8 md:p-12">
                  <div className="flex-1 text-white">
                    <motion.h3
                      className="text-2xl md:text-4xl font-bold mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      className="text-lg md:text-xl text-white/90 mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Button variant="secondary" size="lg">
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                  <div className="hidden md:block flex-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={slides[currentSlide].title}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-2xl"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-purple-500 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
