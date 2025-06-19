"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Globe, Zap, Shield, Headphones } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    price: "From $2,999",
    color: "from-pink-500 via-rose-500 to-red-500",
    bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/5",
    borderColor: "hover:border-pink-500/50",
    shadowColor: "hover:shadow-pink-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "From $4,999",
    color: "from-purple-500 via-violet-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/5",
    borderColor: "hover:border-purple-500/50",
    shadowColor: "hover:shadow-purple-500/20",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration and analytics.",
    features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Gateway"],
    price: "From $3,999",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
    borderColor: "hover:border-blue-500/50",
    shadowColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with advanced optimization techniques.",
    features: ["Core Web Vitals", "Bundle Optimization", "CDN Setup", "Caching Strategy"],
    price: "From $1,999",
    color: "from-yellow-500 via-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/5",
    borderColor: "hover:border-yellow-500/50",
    shadowColor: "hover:shadow-yellow-500/20",
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Comprehensive security assessment and implementation of best practices.",
    features: ["Vulnerability Assessment", "Security Headers", "HTTPS Setup", "Monitoring"],
    price: "From $1,499",
    color: "from-green-500 via-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/5",
    borderColor: "hover:border-green-500/50",
    shadowColor: "hover:shadow-green-500/20",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing maintenance and support for your web applications.",
    features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Reports"],
    price: "From $999/month",
    color: "from-rose-500 via-pink-500 to-fuchsia-500",
    bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-500/5",
    borderColor: "hover:border-rose-500/50",
    shadowColor: "hover:shadow-rose-500/20",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive frontend solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card
                className={`h-full bg-card/50 backdrop-blur-sm border-border/50 ${service.borderColor} transition-all duration-300 hover:shadow-lg ${service.shadowColor} ${service.bgColor}`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      >
                        {service.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:text-white transition-all duration-300 border-2`}
                      >
                        Get Quote
                      </Button>
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
