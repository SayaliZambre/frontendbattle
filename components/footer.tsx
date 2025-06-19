"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              FRONTEND BATTLE 2.0
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting exceptional digital experiences with cutting-edge frontend technologies and innovative design
              solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:bg-purple-500 hover:text-white transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Features", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <li key={tech}>
                  <span className="text-muted-foreground">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Frontend Battle 2.0. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for the competition
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
