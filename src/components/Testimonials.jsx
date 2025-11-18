import React from 'react'

const testimonials = [
  {
    name: 'Aman | Farming Leader',
    text: 'Krishna is fast, reliable and understands YouTube pacing. Our engagement improved noticeably.'
  },
  {
    name: 'Harpreet | Flying Punjabi',
    text: 'Loved the turnarounds and polish. Clean motion titles and great colour sense.'
  },
  {
    name: 'Brand Manager | D2C',
    text: 'Professional communication and strong storytelling. Will collaborate again.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Clients Say</h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-blue-100/90">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold text-white/90">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
