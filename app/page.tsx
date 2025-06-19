"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Loader from "@/components/loader"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AnimatedCards from "@/components/animated-cards"
import Carousel from "@/components/carousel"
import Charts from "@/components/charts"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Showcase from "@/components/showcase"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <AnimatedCards />
        <Services />
        <Carousel />
        <Charts />
        <Stats />
        <Testimonials />
        <Showcase />
        <Footer />
        <ScrollAnimations />
      </div>
    </ThemeProvider>
  )
}
