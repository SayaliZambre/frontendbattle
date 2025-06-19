"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Next.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and user management system.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio website with smooth animations, dark mode, and responsive design.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and transaction history.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Redux", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System",
    description: "Complete LMS with course creation, progress tracking, and interactive learning modules.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "GraphQL", "Mapbox", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Showcase() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
