import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, title: 'Reel Montage', thumb: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/mov_bbb.mp4', tag: 'Reels' },
  { id: 2, title: 'YouTube Edit', thumb: 'https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/movie.mp4', tag: 'YouTube' },
  { id: 3, title: 'Product Ad', thumb: 'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/mov_bbb.mp4', tag: 'Ads' },
  { id: 4, title: 'Event Highlights', thumb: 'https://images.unsplash.com/photo-1551179939-28c0c92a75b2?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/movie.mp4', tag: 'Events' },
  { id: 5, title: 'Motion Graphics', thumb: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/mov_bbb.mp4', tag: 'Motion' },
  { id: 6, title: 'Brand Story', thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', video: 'https://www.w3schools.com/html/movie.mp4', tag: 'Brand' },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="relative bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 focus:outline-none"
            >
              <img src={p.thumb} alt={p.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-blue-200/80">{p.tag}</p>
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-6 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.98, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-black">
                <video src={active.video} controls autoPlay className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-white font-semibold">{active.title}</h4>
                <p className="mt-1 text-blue-200/80">Sample preview for demonstration</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
