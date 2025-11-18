import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Film, Type, Camera, Share2, Sparkles } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Short-Form Editing', desc: 'Reels, Shorts, TikTok that hook viewers fast.' },
  { icon: Film, title: 'Long-Form YouTube Editing', desc: 'Story-driven edits with pacing, b-roll and SFX.' },
  { icon: Type, title: 'Graphics & Motion Titles', desc: 'Clean kinetic typography and motion design.' },
  { icon: Camera, title: 'Product / Event Editing', desc: 'Highlight videos for launches, events, and promos.' },
  { icon: Share2, title: 'Social Media Content', desc: 'Cutdowns, repurposing, and channel management.' },
  { icon: Sparkles, title: 'Color & Sound Polish', desc: 'Color grading, audio cleanup, and final mix.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur hover:bg-white/7.5 transition shadow-lg shadow-slate-900/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-400/30 text-blue-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
