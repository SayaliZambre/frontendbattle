"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "The team delivered an exceptional frontend solution that exceeded our expectations. The attention to detail and innovative approach made all the difference.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    content:
      "Outstanding work on our e-commerce platform. The performance improvements and user experience enhancements have significantly boosted our conversion rates.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, StartupXYZ",
    content:
      "Professional, reliable, and incredibly skilled. They transformed our vision into a beautiful, functional web application that our users love.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    role: "Marketing Director, GrowthCo",
    content:
      "The mobile-first approach and responsive design have made our platform accessible to a much wider audience. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Wang",
    role: "Founder, DesignStudio",
    content:
      "Exceptional attention to design details and smooth animations. The final product perfectly captured our brand identity and values.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Miller",
    role: "VP Engineering, ScaleTech",
    content:
      "The code quality and architecture decisions were top-notch. The application scales beautifully and maintains excellent performance.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-purple-500 mb-2" />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
