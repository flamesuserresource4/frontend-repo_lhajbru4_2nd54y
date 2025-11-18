import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 ring-1 ring-blue-400/30 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <p className="text-sm font-medium tracking-wide text-blue-100">K Media • Video Editing Portfolio</p>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Professional Video Editor & Content Creator
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-blue-100/90 md:text-xl">
            I create high-quality Reels, YouTube videos, ads, and social media content.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:translate-y-[-2px] hover:shadow-xl"
            >
              Watch Showreel
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
