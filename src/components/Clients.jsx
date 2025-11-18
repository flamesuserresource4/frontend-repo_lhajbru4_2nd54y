import React from 'react'

const clients = [
  { name: 'Farming Leader' },
  { name: 'Flying Punjabi' },
  { name: 'Farmbaba' },
]

export default function Clients() {
  return (
    <section className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-wider text-blue-300/70">Trusted by creators & brands</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-center rounded-xl bg-white/5 px-6 py-8 ring-1 ring-white/10">
              <span className="text-xl font-semibold text-white/90">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
