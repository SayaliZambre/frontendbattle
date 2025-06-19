"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const barData = [
  { name: "React", value: 95, color: "#61DAFB" },
  { name: "Next.js", value: 90, color: "#000000" },
  { name: "TypeScript", value: 88, color: "#3178C6" },
  { name: "Tailwind", value: 92, color: "#06B6D4" },
  { name: "Framer Motion", value: 85, color: "#FF0055" },
]

const lineData = [
  { month: "Jan", projects: 12, clients: 8 },
  { month: "Feb", projects: 19, clients: 12 },
  { month: "Mar", projects: 15, clients: 10 },
  { month: "Apr", projects: 25, clients: 18 },
  { month: "May", projects: 22, clients: 15 },
  { month: "Jun", projects: 30, clients: 22 },
]

const pieData = [
  { name: "Frontend", value: 45, color: "#8B5CF6" },
  { name: "Backend", value: 25, color: "#06B6D4" },
  { name: "Design", value: 20, color: "#F59E0B" },
  { name: "DevOps", value: 10, color: "#EF4444" },
]

const chartConfig = {
  projects: {
    label: "Projects",
    color: "#8B5CF6",
  },
  clients: {
    label: "Clients",
    color: "#06B6D4",
  },
}

export default function Charts() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics & Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data-driven insights into our development process and technology stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Our expertise in different technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
                <CardDescription>Projects and clients over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="projects" stroke="#8B5CF6" strokeWidth={3} />
                      <Line type="monotone" dataKey="clients" stroke="#06B6D4" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Service Distribution</CardTitle>
              <CardDescription>Breakdown of our service offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
