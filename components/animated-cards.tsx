"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Zap, Globe, Smartphone, Database } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Write maintainable, scalable, and efficient code following best practices.",
    color: "from-pink-500 via-rose-500 to-red-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    textColor: "text-pink-400",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Create stunning user interfaces with contemporary design principles.",
    color: "from-purple-500 via-violet-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize for speed and efficiency with cutting-edge techniques.",
    color: "from-yellow-500 via-orange-500 to-red-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
  },
  {
    icon: Globe,
    title: "Responsive",
    description: "Ensure perfect functionality across all devices and screen sizes.",
    color: "from-green-500 via-emerald-500 to-teal-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Design with mobile users in mind for optimal user experience.",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    icon: Database,
    title: "Data Driven",
    description: "Leverage data insights to make informed design decisions.",
    color: "from-rose-500 via-pink-500 to-fuchsia-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    textColor: "text-rose-400",
  },
]

export default function AnimatedCards() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the cutting-edge features that make our frontend solutions stand out from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card
                className={`h-full bg-card/50 backdrop-blur-sm border-border/50 hover:${feature.borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${feature.bgColor}`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className={`text-xl group-hover:${feature.textColor} transition-colors`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
