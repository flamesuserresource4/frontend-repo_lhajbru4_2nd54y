import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
          </div>
          <div className="md:col-span-7 text-blue-100/90 text-lg leading-relaxed">
            <p>
              Hi, I'm Krishna, a professional video editor with 3+ years of experience. I have worked with top YouTubers like
              <span className="font-semibold text-white"> Farming Leader</span>,
              <span className="font-semibold text-white"> Flying Punjabi</span>,
              <span className="font-semibold text-white"> Indian Singh</span>, and multiple brands across India. I specialize in
              short-form and long-form editing, graphics, color grading, and content strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
